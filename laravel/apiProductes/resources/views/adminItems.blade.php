@extends('adminTemp') 

@section('content')
<a href="{{route('adminStock')}}">Gestionar stock</a>
<a href="{{route('afegirItem')}}">Afegir item</a>
@endsection