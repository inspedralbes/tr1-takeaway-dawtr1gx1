<?php

namespace App\Http\Controllers;

use App\Models\order;
use Illuminate\Http\Request;

class orderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return order::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $jsonOrder = json_decode($request->jsonOrder, true);
    $allAmountsValid = true; 

    foreach ($jsonOrder as $orderItem) {
        if ($orderItem['amount'] < 0 ) {
            $allAmountsValid = false;
            break;
        }
    

    if ($allAmountsValid) {
        $newOrder = new Order;
        $newOrder->jsonOrder = $request->jsonOrder;
        $newOrder->totalPrice = $request->totalPrice;
        $newOrder->mail = $request->mail;
        $newOrder->save();

        return $newOrder;
    } else {
        // Registrar un mensaje de error en el registro de Laravel
        Log::error('Al menos uno de los "amount" no cumple con el requisito (debe ser mayor o igual a 1) en jsonOrder.');
        return response()->json(['error' => 'Al menos uno de los "amount" no cumple con el requisito (debe ser mayor o igual a 1) en jsonOrder.'], 400);
    }
}
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return order::all()->where("id","==",$id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order=order::find($id);
        $order->status=$request->status;
        $order->save();

        return route('detall', ['id' => $order->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
