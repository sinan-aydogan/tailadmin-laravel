<?php

namespace App\Console\Commands\Demo;

use Illuminate\Console\Command;

class DemoReset extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'demo:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset the demo database (migrate:fresh --seed)';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if (! config('app.demo_mode')) {
            $this->error('DEMO_MODE aktif değil. Bu komut sadece demo ortamında çalışır.');

            return self::FAILURE;
        }

        $this->call('migrate:fresh', [
            '--seed' => true,
            '--force' => true,
        ]);

        $this->info('Demo veritabanı sıfırlandı.');

        return self::SUCCESS;
    }
}
