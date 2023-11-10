@extends('adminTemp') 

@section('content')

<h1>Administracio de Stock</h1>
<ul>
    
    @foreach($items as $item)
    <form action="{{route('updateItem', ['id' => $item->id])}}" method="post">
    @csrf
    @method('PATCH')
    <li>Item id:{{$item->id}}, {{$item->itemName}}> 
        <br><label for="">Name:</label>
        <input type="text" value="{{$item->itemName}}" name="itemName">
        <label for="">Description:</label>
        <input type="text" value="{{$item->description}}" name="description">
        <label for="">Price:</label>
        <input type="number" value="{{$item->price}}" name="price">
        <label for="">Stock:</label>
        <input type="number" value="{{$item->stock}}" name="stock" class="form-control">
        <input type="submit" value="Guardar" class="btn btn-secondary">
    </li>

    </form>
    @endforeach
    <a href="{{route('adminItems')}}" class="btn btn-secondary">Tornar</a>
    
    
</ul>

@endsection