# TailAdmin Laravel - AI Coding Assistant Instructions

## Project Overview
TailAdmin is a Laravel 12 + Vue.js 3 admin dashboard built with Inertia.js, TailwindCSS 3, and Laravel Jetstream. It's a comprehensive UI starter kit with multi-language support, role-based permissions, and extensive custom components.

## Architecture & Key Technologies

### Core Stack
- **Backend**: Laravel 12 with Inertia.js SSR
- **Frontend**: Vue.js 3 with Composition API + Vite build system
- **Styling**: TailwindCSS 3 with custom dark mode implementation
- **Authentication**: Laravel Jetstream + Sanctum
- **Permissions**: Spatie Laravel Permission package
- **State Management**: Pinia stores for dark mode, language, etc.
- **Icons**: FontAwesome via `@fortawesome/vue-fontawesome`

### Project Structure Patterns
- **Routes**: Modular routing via `routes/web_modules/` - add new route modules here
- **Controllers**: Follow resource controller pattern, use `Inertia::render()` for page responses
- **Vue Components**: Located in `resources/js/Components/` organized by type (Form/, Table/, etc.)
- **Pages**: Inertia pages in `resources/js/Pages/` with consistent layout wrapping
- **Custom Actions**: TailAdmin-specific actions in `app/Actions/TailAdmin/`

## Development Workflows

### Setup Commands
```bash
composer install && npm install
cp .env.example .env
php artisan migrate --seed
php artisan storage:link && php artisan key:generate
```

### Development
```bash
npm run dev          # Start Vite dev server with HMR
php artisan serve    # Start Laravel server
```

### Production Build
```bash
npm run build        # Builds both client and SSR bundles
```

## Key Conventions & Patterns

### Vue Component Architecture
- All components use Composition API with `<script setup>`
- Custom component prefix: `t-` (e.g., `<t-button>`, `<t-input>`)
- Layout components in `resources/js/Layouts/` (AppLayout.vue is main)
- Font Awesome icons registered globally as `<icon>` component

### Backend Patterns
- **Table Search**: Custom `tableSearch()` eloquent macro for frontend table filtering
- **Permissions**: Super Admin bypass implemented in `AppServiceProvider::boot()`
- **Inertia Responses**: Always return with `Inertia::render('PageName', $data)`
- **Resources**: Use API Resources for consistent data transformation

### State Management
- **Dark Mode**: Managed via Pinia store in `resources/js/Stores/darkMode.js`
- **Language**: i18n with vue-i18n, stores in `resources/js/Stores/displayLanguage.js`
- **User Preferences**: Stored in database (`users.language`, `users.dark_mode`, `users.theme`)

### Multi-language Implementation
- **Frontend**: Vue i18n with language files in `resources/js/Lang/`
- **Backend**: Laravel localization in `resources/lang/`
- **Language Switching**: Route `/lang/{locale}` updates session locale

### Component Library Structure
- **Form Components**: Complex form elements with validation integration
- **Table Components**: Frontend and backend table implementations with search/filter
- **UI Components**: Alert, Badge, Button, Modal, etc. with consistent theming
- **Custom Inputs**: Repeatable fields, date pickers, multi-select with rich features

## Integration Points

### Inertia.js Patterns
- Page props passed via controller methods to Vue components
- Shared data configured in `HandleInertiaRequests` middleware
- Progress bar styling configured in `app.js`
- SSR support configured with separate `ssr.js` entry point

### TailwindCSS Customization
- Dark mode: `selector` strategy with manual class toggling
- Custom scrollbar plugin via `tailwind-scrollbar`
- Component-specific utilities in theme extension
- CSS purging configured for Vue SFC templates

### Database Architecture
- **User Personalization**: Language, dark_mode, theme columns in users table
- **Demo Content**: Sample data model for table component demonstrations
- **Permission Groups**: Custom grouping for Spatie permissions
- **Team Management**: Laravel Jetstream team functionality enabled

## Common Tasks

### Adding New Pages
1. Create controller with `Inertia::render()` response
2. Add Vue page component in `resources/js/Pages/`
3. Register route in appropriate `routes/web_modules/` file
4. Use `<app-layout>` wrapper with title and breadcrumbs

### Creating Components
1. Add to appropriate `resources/js/Components/` subdirectory
2. Use `t-` prefix for custom components
3. Include prop validation and emits declaration
4. Follow existing styling patterns with TailwindCSS

### Extending Permissions
1. Add permissions via database seeder or manual creation
2. Group permissions using `PermissionGroup` model
3. Use `@can` directive in Blade or `$page.props.auth.user.permissions` in Vue
4. Remember Super Admin has automatic access to everything

### Styling Guidelines
- Use TailwindCSS utility classes primarily
- Dark mode variants: `dark:` prefix (managed by Pinia store)
- Custom CSS only when Tailwind utilities insufficient
- Component theming via prop-based color/style variants

This codebase emphasizes rapid development with pre-built components, comprehensive theming, and developer-friendly patterns for admin dashboard creation.
