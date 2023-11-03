<?php

use App\Http\Controllers\orderController;
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
Route::get('/admin', function () {
    $orders= order::all();
    return view('adminAdministracioComandes',['orders'=>$orders]);
})->name("landing");
Route::get('/admin/detall/{id}', function ($id) {
    $order= order::find($id);
    return view('adminComanda',['order'=>$order]);
})->name("detall");

Route::patch('/admin/update/{id}', [orderController::class, 'update'])->name("update");

Route::get('/testroute', function() {
    $name = "Funny Coder";
    $comandaId = 123;

    Mail::to('a16adrrodgon@inspedralbes.cat')->send(new MyTestEmail($name, $comandaId));
});