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
// 前台接口
Route::get('book', 'Api\Home\BookController@index');
Route::get('book/{id}', 'Api\Home\BookController@show');
Route::get('book/{id}/document', 'Api\Home\DocumentController@index');
Route::get('book/{bookid}/document/{id}', 'Api\Home\DocumentController@show');

// 后台 管理平台接口
Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'Api\Admin\AuthController@login')->name('login');
});
// 需要验证登录
Route::group([
'middleware' => ['auth:api'/*'role:api'*/],
'prefix' => 'admin',
], function ($router) {
    // 验证
    Route::post('auth/logout', 'Api\Admin\AuthController@logout')->name('auth.logout');
    Route::post('auth/refresh', 'Api\Admin\AuthController@refresh')->name('auth.refresh');
    Route::get('auth/me', 'Api\Admin\AuthController@me')->name('auth.me');
    Route::put('auth/password', 'Api\Admin\AuthController@password')->name('auth.password');
    Route::put('auth/update', 'Api\Admin\AuthController@update')->name('auth.update');
    // 角色
    Route::get('role/all', 'Api\Admin\RoleController@all')->name('role.all');
    // 权限
    Route::get('permission/all', 'Api\Admin\PermissionController@all')->name('permission.all');
    // 用户组
    Route::get('group/all', 'Api\Admin\GroupController@all')->name('group.all');

    // 需检查权限的接口
    Route::group([
      'middleware' => ['permission:api'],
    ], function ($router) {
        Route::post('book', 'Api\Admin\BookController@store')->name('book.store');
        Route::put('book/{id}', 'Api\Admin\BookController@update')->name('book.update');
        Route::delete('book/{id}', 'Api\Admin\BookController@destroy')->name('book.destroy');
        Route::post('book/{id}/group', 'Api\Admin\BookController@group')->name('book.group');
        Route::post('book/{id}/document', 'Api\Admin\DocumentController@store')->name('book.document.store');
        Route::put('book/{bookid}/document/{id}', 'Api\Admin\DocumentController@update')->name('book.document.update');
        Route::delete('book/{bookid}/document/{id}', 'Api\Admin\DocumentController@destroy')->name('book.document.destroy');
        Route::get('book', 'Api\Admin\BookController@index')->name('book.index');
        Route::get('book/{id}', 'Api\Admin\BookController@show')->name('book.show');
        Route::get('book/{id}/document', 'Api\Admin\DocumentController@index')->name('book.document.index');
        Route::get('book/{bookid}/document/{id}', 'Api\Admin\DocumentController@show')->name('book.document.show');

        // 用户
        Route::resource('user', 'Api\Admin\UserController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
        Route::post('user/{id}/role', 'Api\Admin\UserController@relation')->name('user.postrole');
        Route::get('user/{id}/role', 'Api\Admin\UserController@allot')->name('user.getrole');
        Route::put('user/{id}/password', 'Api\Admin\UserController@password')->name('user.password');
        Route::get('user/{id}/group', 'Api\Admin\UserController@getgroup')->name('user.getgroup');
        Route::post('user/{id}/group', 'Api\Admin\UserController@postgroup')->name('user.postgroup');
        // 用户组
        Route::resource('group', 'Api\Admin\GroupController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
        // 权限
        Route::resource('permission', 'Api\Admin\PermissionController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
        // 角色
        Route::resource('role', 'Api\Admin\RoleController', ['only' => ['show', 'index', 'store', 'update', 'destroy']]);
        Route::post('role/{id}/permission', 'Api\Admin\RoleController@relation')->name('role.postpermission');
        Route::get('role/{id}/permission', 'Api\Admin\RoleController@allot')->name('role.getpermission');
    });
});
