<?php

use App\Http\Controllers\categoryController;
use App\Http\Controllers\itemsController;
use App\Http\Controllers\orderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/dishes' , [itemsController::class, "index"]);
Route::post('/dishes' , [itemsController::class, "store"]);

Route::get('/categories', [categoryController::class, "index"]);
Route::post('/categories' , [categoryController::class, "store"]);

Route::get('/order', [orderController::class, "index"]);
Route::post('/order', [orderController::class, "store"]);