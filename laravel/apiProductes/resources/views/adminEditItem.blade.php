@extends('adminTemp') 

@section('content')

<h1>Administracio de Items</h1>
<ul>
    
    @foreach($items as $item)
    <form action="{{route('updateItem', ['id' => $item->id])}}" method="post">
    @csrf
    @method('PATCH')
    <li>Item id:{{$item->id}}, {{$item->itemName}}> 
        <input type="number" value="{{$item->stock}}" name="stock"> <input type="submit" value="Guardar Stock" >
    </li>

    </form>
    @endforeach
    <input type="submit" value="acabar">
    
    
</ul>

@endsection