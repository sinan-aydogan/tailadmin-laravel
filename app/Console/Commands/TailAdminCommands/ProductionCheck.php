<?php

namespace App\Console\Commands\TailAdminCommands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class ProductionCheck extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'production:check {--solve : Tespit edilen sorunları otomatik olarak düzeltmeye çalış}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Verify (and optionally fix) that the environment is safely configured for production';

    private bool $hasFailure = false;

    private bool $solve = false;

    private string $envPath;

    /** @var array<int, string> */
    private array $envLines = [];

    /** @var array<string, string> */
    private array $env = [];

    private bool $envDirty = false;

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->solve = (bool) $this->option('solve');
        $this->envPath = base_path('.env');

        if (! File::exists($this->envPath)) {
            $this->components->error('.env dosyası bulunamadı: '.$this->envPath);

            return self::FAILURE;
        }

        $this->loadEnvFile();

        $this->components->info($this->solve
            ? 'Production ortam kontrolleri çalıştırılıyor (--solve aktif)...'
            : 'Production ortam kontrolleri çalıştırılıyor...');

        // APP_KEY ilk sırada kontrol edilir; key:generate .env dosyasına doğrudan
        // yazdığı için diğer düzeltmelerden önce diskle senkron olmamız gerekir.
        $this->checkAppKey();
        $this->checkAppEnv();
        $this->checkAppDebug();
        $this->checkDebugbar();
        $this->checkAppUrl();
        $this->checkLogLevel();
        $this->checkWritablePaths();

        if ($this->envDirty) {
            File::put($this->envPath, $this->renderEnvFile());
            $this->call('config:clear');
            $this->components->warn('.env dosyası güncellendi ve config cache temizlendi.');
        }

        $this->newLine();

        if ($this->hasFailure) {
            $this->components->error('Production kontrolü başarısız oldu. Yukarıdaki maddeleri düzeltin.');

            return self::FAILURE;
        }

        $this->components->info('Tüm production kontrolleri başarılı.');

        return self::SUCCESS;
    }

    private function markPass(string $label): void
    {
        $this->components->twoColumnDetail($label, '<fg=green;options=bold>OK</>');
    }

    private function markFixed(string $label, string $detail): void
    {
        $this->components->twoColumnDetail($label, '<fg=cyan;options=bold>DÜZELTİLDİ</>');
        $this->line("  <fg=cyan>→ {$detail}</>");
    }

    private function markWarn(string $label, string $detail): void
    {
        $this->components->twoColumnDetail($label, '<fg=yellow;options=bold>UYARI</>');
        $this->line("  <fg=yellow>→ {$detail}</>");
    }

    private function markFail(string $label, string $detail): void
    {
        $this->hasFailure = true;
        $this->components->twoColumnDetail($label, '<fg=red;options=bold>HATA</>');
        $this->line("  <fg=red>→ {$detail}</>");
    }

    private function loadEnvFile(): void
    {
        $this->envLines = preg_split('/\r\n|\r|\n/', File::get($this->envPath));
        $this->env = [];

        foreach ($this->envLines as $line) {
            $trimmed = trim($line);

            if ($trimmed === '' || str_starts_with($trimmed, '#') || ! str_contains($trimmed, '=')) {
                continue;
            }

            [$key, $value] = explode('=', $trimmed, 2);
            $this->env[trim($key)] = trim($value);
        }
    }

    private function renderEnvFile(): string
    {
        return implode(PHP_EOL, $this->envLines);
    }

    private function getEnv(string $key, string $default = ''): string
    {
        return $this->env[$key] ?? $default;
    }

    private function setEnvValue(string $key, string $value): void
    {
        $this->env[$key] = $value;
        $this->envDirty = true;

        foreach ($this->envLines as $index => $line) {
            $trimmed = trim($line);

            if ($trimmed === '' || str_starts_with($trimmed, '#') || ! str_contains($trimmed, '=')) {
                continue;
            }

            [$lineKey] = explode('=', $trimmed, 2);

            if (trim($lineKey) === $key) {
                $this->envLines[$index] = "{$key}={$value}";

                return;
            }
        }

        $this->envLines[] = "{$key}={$value}";
    }

    private function checkAppEnv(): void
    {
        $value = $this->getEnv('APP_ENV', 'production');

        if ($value === 'production') {
            $this->markPass('APP_ENV');

            return;
        }

        if ($this->solve) {
            $this->setEnvValue('APP_ENV', 'production');
            $this->markFixed('APP_ENV', "\"{$value}\" yerine \"production\" yazıldı.");

            return;
        }

        $this->markFail('APP_ENV', "Şu an \"{$value}\" olarak ayarlı, \"production\" olmalı. --solve ile otomatik düzeltilebilir.");
    }

    private function checkAppDebug(): void
    {
        $value = $this->getEnv('APP_DEBUG', 'false');

        if (! filter_var($value, FILTER_VALIDATE_BOOLEAN)) {
            $this->markPass('APP_DEBUG');

            return;
        }

        if ($this->solve) {
            $this->setEnvValue('APP_DEBUG', 'false');
            $this->markFixed('APP_DEBUG', '"true" yerine "false" yazıldı.');

            return;
        }

        $this->markFail('APP_DEBUG', 'true olarak ayarlı. Production ortamında hata detaylarının/stack trace\'lerin dışarı sızmaması için false olmalı. --solve ile otomatik düzeltilebilir.');
    }

    private function checkDebugbar(): void
    {
        $value = $this->getEnv('DEBUGBAR_ENABLED', 'false');

        if (! filter_var($value, FILTER_VALIDATE_BOOLEAN)) {
            $this->markPass('DEBUGBAR_ENABLED');

            return;
        }

        if ($this->solve) {
            $this->setEnvValue('DEBUGBAR_ENABLED', 'false');
            $this->markFixed('DEBUGBAR_ENABLED', '"true" yerine "false" yazıldı.');

            return;
        }

        $this->markFail('DEBUGBAR_ENABLED', 'true olarak ayarlı. Debugbar production\'da performans ve bilgi sızıntısı riski oluşturur, false olmalı. --solve ile otomatik düzeltilebilir.');
    }

    private function checkAppKey(): void
    {
        if (filled($this->getEnv('APP_KEY'))) {
            $this->markPass('APP_KEY');

            return;
        }

        if ($this->solve) {
            $this->call('key:generate', ['--force' => true]);
            $this->loadEnvFile();
            $this->markFixed('APP_KEY', '"php artisan key:generate --force" ile yeni anahtar üretildi.');

            return;
        }

        $this->markFail('APP_KEY', 'Boş. Şifreleme ve session çalışmaz. --solve ile "php artisan key:generate --force" otomatik çalıştırılabilir.');
    }

    private function checkAppUrl(): void
    {
        $url = $this->getEnv('APP_URL', 'http://localhost');

        if (! str_contains($url, 'localhost') && ! str_contains($url, '127.0.0.1')) {
            $this->markPass('APP_URL');

            return;
        }

        if ($this->solve) {
            $domain = trim((string) $this->ask('Production için kullanılacak domain nedir? (örn: https://example.com)'));
            $domain = rtrim($domain, '/');

            if (filled($domain) && ! str_contains($domain, 'localhost') && ! str_contains($domain, '127.0.0.1')) {
                $this->setEnvValue('APP_URL', $domain);
                $this->markFixed('APP_URL', "\"{$url}\" yerine \"{$domain}\" yazıldı.");

                return;
            }

            $this->markWarn('APP_URL', "\"{$url}\" hâlâ localhost/127.0.0.1 gösteriyor. Geçerli bir domain girilmediği için değiştirilmedi, elle güncellenmeli.");

            return;
        }

        $this->markWarn('APP_URL', "\"{$url}\" hâlâ localhost/127.0.0.1 gösteriyor. --solve ile domain sorulup otomatik ayarlanabilir.");
    }

    private function checkLogLevel(): void
    {
        $level = $this->getEnv('LOG_LEVEL', 'debug');

        if ($level !== 'debug') {
            $this->markPass('LOG_LEVEL');

            return;
        }

        if ($this->solve) {
            $this->setEnvValue('LOG_LEVEL', 'error');
            $this->markFixed('LOG_LEVEL', '"debug" yerine "error" yazıldı.');

            return;
        }

        $this->markWarn('LOG_LEVEL', '"debug" seviyesinde. Production\'da log hacmini ve hassas veri sızıntısını azaltmak için "error" veya "warning" önerilir. --solve ile otomatik düzeltilebilir.');
    }

    private function checkWritablePaths(): void
    {
        $paths = [
            storage_path(),
            base_path('bootstrap/cache'),
        ];

        foreach ($paths as $path) {
            if (is_writable($path)) {
                $this->markPass("Yazma izni: {$path}");

                continue;
            }

            if ($this->solve && @chmod($path, 0775) && is_writable($path)) {
                $this->markFixed("Yazma izni: {$path}", '0775 izni verildi.');

                continue;
            }

            $this->markFail("Yazma izni: {$path}", 'Web sunucusu kullanıcısı bu dizine yazamıyor. Cache, log ve session işlemleri başarısız olur. --solve chmod 0775 dener; kalıcı çözüm için sunucu izinlerini/sahipliğini kontrol edin.');
        }
    }
}
