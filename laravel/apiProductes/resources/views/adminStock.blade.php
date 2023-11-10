@extends('adminTemp') 

@section('content')

<h1>Administracio de Stock</h1>
<ul>
    
    @foreach($items as $item)
    <form action="{{route('updateItem', ['id' => $item->id])}}" method="post">
    @csrf
    @method('PATCH')
    <li>Item id:{{$item->id}}, {{$item->itemName}}> <input type="number" value="{{$item->stock}}" name="stock" class="form-control"> <input type="submit" value="Guardar Stock" class="btn btn-secondary"></li>

    </form>
    @endforeach
    <a href="{{route('adminItems')}}" class="btn btn-secondary">Tornar</a>
    
    
</ul>

@endsection