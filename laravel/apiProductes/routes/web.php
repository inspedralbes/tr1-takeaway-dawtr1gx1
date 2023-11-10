<?php

use App\Http\Controllers\itemsController;
use App\Http\Controllers\orderController;
use App\Models\category;
use App\Models\items;
use App\Models\order;
use Illuminate\Support\Facades\Route;
use App\Mail\MyTestEmail;
use Illuminate\Support\Facades\Mail;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/adminComanda', function () {

    $orders= order::all();
    return view('adminAdministracioComandes',['orders'=>$orders]);
})->name("adminComanda");
Route::get('/adminComanda/detall/{id}', function ($id) {
    $order= order::find($id);
    return view('adminComanda',['order'=>$order]);
})->name("detall");

Route::get("/admin", function(){
    return view('adminMenu');
})->name('landing');
Route::get("/adminStock", function (){
    $items= items::all();
    return view('adminStock', ['items'=>$items]);
})->name('adminStock');
Route::get("/adminItems", function (){

    return view('adminItems');
})->name('adminItems');

Route::get('/adminItems/afegirItemForm', function(){
    $categories=category::all();
    return view('afegirItemForm', ['categories'=>$categories]);
})->name('afegirItem');
Route::patch('/admin/updateStock/{id}', [itemsController::class, 'update'])->name('updateItem');
Route::patch('/admin/updateComanda/{id}', [orderController::class, 'update'])->name("update");
Route::post('/admin/pujarDades', [itemsController::class, "store"])->name('pujarItem');
