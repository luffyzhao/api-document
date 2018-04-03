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

Route::get('book', 'Api\BookController@index')->name('book.index');
Route::get('book/{id}', 'Api\BookController@show')->name('book.show');
Route::get('book/{id}/document', 'Api\DocumentController@index')->name('book.document.index');
Route::get('book/{bookid}/document/{id}', 'Api\DocumentController@show')->name('book.document.show');
// 需要验证登录
Route::group([
'middleware' => ['auth:api'/*'role:api'*/],
], function ($router) {
    // 验证
    Route::post('auth/logout', 'Api\AuthController@logout')->name('auth.logout');
    Route::post('auth/refresh', 'Api\AuthController@refresh')->name('auth.refresh');
    Route::get('auth/me', 'Api\AuthController@me')->name('auth.me');
    Route::put('auth/password', 'Api\AuthController@password')->name('auth.password');
    Route::put('auth/update', 'Api\AuthController@update')->name('auth.update');

    Route::post('book', 'Api\BookController@store');
    Route::put('book/{id}', 'Api\BookController@update');
    Route::delete('book/{id}', 'Api\BookController@destroy');
    Route::post('book/{id}/document', 'Api\DocumentController@store')->name('book.document.store');
    Route::put('book/{bookid}/document/{id}', 'Api\DocumentController@update')->name('book.document.update');
    Route::delete('book/{bookid}/document/{id}', 'Api\DocumentController@destroy')->name('book.document.destroy');

    // 用户
    Route::resource('user', 'Api\UserController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
    Route::post('user/{id}/role', 'Api\UserController@relation')->name('user.role');
    Route::put('user/{id}/password', 'Api\UserController@password')->name('user.password');
    Route::get('user/{id}/allot', 'Api\UserController@allot')->name('user.allot');
    // 角色
    Route::get('role/all', 'Api\RoleController@all')->name('role.all');
    Route::resource('role', 'Api\RoleController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
    Route::post('role/{id}/permission', 'Api\RoleController@relation')->name('role.permission');
    Route::get('role/{id}/allot', 'Api\RoleController@allot')->name('role.allot');
    // 权限
    Route::get('permission/all', 'Api\PermissionController@all')->name('permission.all');
    Route::resource('permission', 'Api\PermissionController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
});
