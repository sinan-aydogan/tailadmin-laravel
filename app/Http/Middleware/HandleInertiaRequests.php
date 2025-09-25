<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

final class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     */
    protected $rootView = 'app';

    /**
     * Cache duration for user permissions and roles (in minutes).
     */
    private const CACHE_DURATION = 60;

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $data =[
            ...parent::share($request),
            'user_extra' => $this->getAuthenticatedUserData(),
            'ziggy' => $this->getZiggyData($request),
            'flash' => $this->getFlashMessages(),
        ];

        return $data;
    }

    /**
     * Get Ziggy routing data with location.
     *
     * @return \Closure(): array<string, mixed>
     */
    private function getZiggyData(Request $request)
    {
        return fn() => [
            ...(new Ziggy)->toArray(),
            'location' => $request->url(),
        ];
    }

    /**
     * Get flash messages from session.
     *
     * @return array<string, \Closure>
     */
    private function getFlashMessages(): array
    {
        return [
            'message' => fn() => Session::get('message'),
            'toastr' => fn() => Session::get('toastr'),
        ];
    }

    /**
     * Get current application locale.
     *
     * @return \Closure(): string|null
     */
    private function getCurrentLocale()
    {
        return fn() => Session::get('locale', app()->getLocale());
    }

    /**
     * Get authenticated user's roles with caching.
     *
     * @return array<string, mixed>
     */
    private function getUserRoles()
    {
        if (!Auth::check()) {
            return [];
        }

        $userId = Auth::id();
        $cacheKey = "user_roles_{$userId}";

        $data = Auth::user()?->getRoleNames()->toArray() ?? [];

        Cache::put($cacheKey, $data, self::CACHE_DURATION);

        return $data;
    }

    /**
     * Get authenticated user's permissions with caching.
     *
     * @return array<string, mixed>
     */
    private function getUserPermissions()
    {
        if (!Auth::check()) {
            return [];
        }

        $userId = Auth::id();
        $cacheKey = "user_permissions_{$userId}";

        $data = Auth::user()?->getAllPermissions()->pluck('name')->toArray() ?? [];

        Cache::put($cacheKey, $data, self::CACHE_DURATION);

        return $data;
    }

    /**
     * Get authenticated user data with essential information and caching.
     *
     * @return array<string, mixed>
     */
    private function getAuthenticatedUserData()
    {
        if (!Auth::check()) {
            return [];
        }

        $userId = Auth::id();
        $cacheKey = "user_data_{$userId}";

        if (! $userId) {
            return [];
        }

        $user = Auth::user();

        $data = [
            'lang' => $user->language ?? app()->getLocale(),
            'dark_mode' => $user->dark_mode ?? 'auto',
            'cached_at' => now()->toISOString(),
            'roles' => $this->getUserRoles(),
            'permissions' => $this->getUserPermissions(),
        ];

        Cache::put($cacheKey, $data, self::CACHE_DURATION);

        return $data;
    }

    /**
     * Clear all cached data for a specific user.
     * Call this method when user data is updated.
     */
    public static function clearUserCache(int $userId): void
    {
        $cacheKeys = [
            "user_data_{$userId}",
            "user_roles_{$userId}",
            "user_permissions_{$userId}",
        ];

        foreach ($cacheKeys as $key) {
            Cache::forget($key);
        }
    }

    /**
     * Clear cache for the currently authenticated user.
     */
    public static function clearCurrentUserCache(): void
    {
        if (Auth::check()) {
            self::clearUserCache(Auth::id());
        }
    }
}
