<?php

namespace App\Http\Controllers;

use App\Models\items;
use App\Models\order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $validator = Validator::make($request->all(), [
            'jsonOrder' => 'required',
            'totalPrice' => 'required',
            'mail' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json(['errorMsg' => "Email incorrecte",'errorCode'=> 2], 422);
        }else {
            $newOrder = new Order;
            $newOrder->jsonOrder = $request->jsonOrder;
            $newOrder->totalPrice = $request->totalPrice;
            $newOrder->mail = $request->mail;
            $newOrder->save();

            $jsonDecoded=json_decode($request->jsonOrder);
            foreach($jsonDecoded->order as $item){
                $dish=items::find($item->id);
                $dish->stock=$dish->stock - $item->amount;
                $dish->save();
            }
            return response()->json(['errorCode'=> 3, 'id'=>$newOrder->id]);
            
        }

        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //return order::all()->where("id","==",$id);
        //$ret = order::all()->where("id","==",$id);
        $ret = order::find( $id);
        return $ret;
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

        return redirect()->route('detall', ['id' => $order->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
