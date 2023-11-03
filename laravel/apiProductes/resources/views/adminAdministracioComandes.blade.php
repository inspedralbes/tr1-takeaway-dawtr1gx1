@extends('adminTemp') 

@section('content')

<h1>Administracio de comandes</h1>
<ul>
    
    @foreach($orders as $order)
    @if($order->status!='entregat')
    <li>Comanda id:{{$order->id}} demanada per:{{$order->mail}} <a href="{{route('detall', ['id' => $order->id])}}">detall</a></li>
    @endif
    
    @endforeach
    <a href="{{route('landing')}}">tornar</a>
</ul>

@endsection