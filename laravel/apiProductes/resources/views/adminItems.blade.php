@extends('adminTemp') 

@section('content')
<h2>Administracio de items</h2>
<ul>
    <a href="{{route('adminStock')}}" class="btn btn-primary">Modificar productes</a>
    <a href="{{route('afegirItem')}}" class="btn btn-primary">Afegir item</a>
    <a href="{{route('landing')}}" class="btn btn-primary">Tornar</a>
</ul>


@endsection