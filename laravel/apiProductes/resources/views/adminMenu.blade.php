@extends('adminTemp') 

@section('content')
<ul>
    <li><a href="{{route('adminComanda')}}">Administracio de comandes</a></li>
    <li><a href="{{route('adminItems')}}">Administracio de items</a></li>
</ul>
@endsection