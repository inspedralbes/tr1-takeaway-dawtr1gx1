@extends('adminTemp') 

@section('content')

    <a href="{{route('adminComanda')}}" class="btn btn-primary">Administracio de comandes</a></li>
    <a href="{{route('adminItems')}}" class="btn btn-primary">Administracio de items</a></li>

@endsection