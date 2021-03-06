<?php

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




Route::group(['namespace' => 'Business'], function(){
        Route::get('/', 'BusinessController@index');
        Route::get('/business/getnews', 'BusinessController@getnews');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');