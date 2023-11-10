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
Route::delete('/dishes/{id}' , [itemsController::class, "destroy"]);
Route::put("/dishes/{id}", [itemsController::class, "update"]);
Route::get("/dishes/{id}", [itemsController::class, "show"]);

Route::get('/categories', [categoryController::class, "index"]);
Route::post('/categories' , [categoryController::class, "store"]);
Route::delete('/categories/{id}' , [categoryController::class, "destroy"]);
Route::put("/categories/{id}", [categoryController::class, "update"]);
Route::get("/categories/{id}", [categoryController::class, "show"]);


Route::get('/order', [orderController::class, "index"]);
Route::post('/order', [orderController::class, "store"]);
Route::get('/order/{id}', [orderController::class, "show"]);
Route::put("/order/{id}", [orderController::class, "update"]);