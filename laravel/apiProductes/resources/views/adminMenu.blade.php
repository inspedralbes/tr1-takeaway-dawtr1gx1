@extends('adminTemp') 

@section('content')
<ul>
    <li><a href="{{route('adminComanda')}}">Administracio de comandes</a></li>
    <li><a href="{{route('adminStock')}}">Administracio de stock</a></li>
</ul>
@endsection