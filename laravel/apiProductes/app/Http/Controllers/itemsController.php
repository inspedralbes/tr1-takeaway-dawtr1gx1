<?php

namespace App\Http\Controllers;

use App\Models\items;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;

class itemsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return items::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $newItem=new items;
        $newItem->itemName=$request->itemName;
        $newItem->price=$request->price;
        $newItem->stock=$request->stock;
        $newItem->description=$request->description;
        $newItem->imageRoute=$request->imageRoute;
        $newItem->itemCategory=$request->itemCategory;
        $newItem->save();
        return $newItem;
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
