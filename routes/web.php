<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->prefix('admin')->group(function (){
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    //Example Pages
    Route::get('lock',function (){return Inertia::render('Samples/Example/Lock');})->name('lock');
    Route::get('profile',function (){return Inertia::render('Samples/Example/Profile');})->name('profile');
    Route::get('pricing',function (){return Inertia::render('Samples/Example/Pricing');})->name('pricing');
    Route::get('project-management-app',function (){return Inertia::render('Samples/Example/ProjectApp');})->name('project-management-app');
    Route::get('todo-app',function (){return Inertia::render('Samples/Example/TodoApp');})->name('todo-app');
    Route::get('email-app',function (){return Inertia::render('Samples/Example/EmailApp');})->name('email-app');
    Route::get('chat-app',function (){return Inertia::render('Samples/Example/ChatApp');})->name('chat-app');
    //Component Pages
    Route::get('avatar',function (){return Inertia::render('Samples/Components/Avatar');})->name('avatar');
    Route::get('alert',function (){return Inertia::render('Samples/Components/Alert');})->name('alert');
    Route::get('badge',function (){return Inertia::render('Samples/Components/Badge');})->name('badge');
    Route::get('breadcrumb',function (){return Inertia::render('Samples/Components/Breadcrumb');})->name('breadcrumb');
    Route::get('button',function (){return Inertia::render('Samples/Components/Button');})->name('button');
    Route::get('collapsible',function (){return Inertia::render('Samples/Components/Collapsible');})->name('collapsible');
    Route::get('tab',function (){return Inertia::render('Samples/Components/Tab');})->name('tab');
    Route::get('dropdown',function (){return Inertia::render('Samples/Components/Dropdown');})->name('dropdown');
    Route::get('list',function (){return Inertia::render('Samples/Components/List');})->name('list');
    Route::get('modal',function (){return Inertia::render('Samples/Components/Modal');})->name('modal');
    Route::get('pagination',function (){return Inertia::render('Samples/Components/Paginate');})->name('pagination');
    Route::get('popover',function (){return Inertia::render('Samples/Components/Popover');})->name('popover');
    Route::get('progress',function (){return Inertia::render('Samples/Components/Progress');})->name('progress');
    Route::get('tooltip',function (){return Inertia::render('Samples/Components/Tooltip');})->name('tooltip');
    Route::get('table',function (){return Inertia::render('Samples/Components/Table',[
        'users' => \App\Models\User::all()
    ]);})->name('table');
    Route::get('chart',function (){return Inertia::render('Samples/Components/Chart');})->name('chart');
    // Layout Pages
    Route::get('layout-structure',function (){return Inertia::render('Samples/Layouts/LayoutStructure');})->name('layout-structure');
    Route::get('layout-grid',function (){return Inertia::render('Samples/Layouts/Grid');})->name('layout-grid');
    Route::get('layout-content-box',function (){return Inertia::render('Samples/Layouts/ContentBox');})->name('layout-content-box');
    Route::get('layout-statistic-widget',function (){return Inertia::render('Samples/Layouts/StatisticWidget');})->name('layout-statistic-widget');
    // Form Pages
    Route::get('form-structure',function (){return Inertia::render('Samples/FormElements/FormStructure');})->name('form-structure');
    Route::get('form-input-group',function (){return Inertia::render('Samples/FormElements/InputGroup');})->name('form-input-group');
    Route::get('form-simple-field',function (){return Inertia::render('Samples/FormElements/SimpleField');})->name('form-simple-field');
    Route::get('form-repeatable-field',function (){return Inertia::render('Samples/FormElements/RepeatableField');})->name('form-repeatable-field');
    Route::get('form-date-field',function (){return Inertia::render('Samples/FormElements/DateField');})->name('form-date-field');
    Route::get('form-select-input',function (){return Inertia::render('Samples/FormElements/SelectInput',[
        'users' => \App\Models\User::all()
    ]);})->name('form-select-input');
    Route::get('form-tag-input',function (){return Inertia::render('Samples/FormElements/TagInput');})->name('form-tag-input');
    Route::get('form-validation',function (){return Inertia::render('Samples/FormElements/Validation');})->name('form-validation');
});



