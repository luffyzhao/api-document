<?php

use Illuminate\Http\Request;

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
    Route::post('login', 'Api\AuthController@login');
});

Route::group([
    'middleware' => 'auth:api'
], function ($router) {
    // 验证
    Route::post('auth/logout', 'Api\AuthController@logout');
    Route::post('auth/refresh', 'Api\AuthController@refresh');
    Route::get('auth/me', 'Api\AuthController@me');
    // 项目
    Route::resource('book', 'Api\BookController', ['only' => ['index', 'store', 'update', 'destroy']]);
});
