<?php

use App\Http\Controllers\orderController;
use App\Models\order;
use Illuminate\Support\Facades\Route;

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

// Route::get(uri: '/', function() { 
//     // return view('welcome');

//     $to_name = 'adri';
//     $to_email = 'grupogrupo739@gmail.com';
//     $data = array("name"=>"adria", "body"=>"test email");
//     Mail::send(view: "mail", $data, function ($message) use ($to_email) {
//         $message->from('grupogrupo739@gmail.com', 'username');
//         $message->to($to_email)
//         ->subject('laravel main subject');
//     });
// });
