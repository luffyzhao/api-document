<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'Api\AuthController@login')->name('login');
});

Route::group([
    'middleware' => 'auth:api',
], function ($router) {
    // 验证
    Route::post('auth/logout', 'Api\AuthController@logout')->name('auth.logout');
    Route::post('auth/refresh', 'Api\AuthController@refresh')->name('auth.refresh');
    Route::get('auth/me', 'Api\AuthController@me')->name('auth.me');
    // 项目
    Route::resource('book', 'Api\BookController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
    // 用户
    Route::resource('user', 'Api\UserController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
    Route::post('user/{id}/role', 'Api\UserController@relation')->name('role.role');
    // 角色
    Route::resource('role', 'Api\RoleController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
    Route::post('role/{id}/permission', 'Api\RoleController@relation')->name('role.permission');
    // 权限
    Route::resource('permission', 'Api\PermissionController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
});
