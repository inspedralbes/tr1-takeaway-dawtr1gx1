@extends('adminTemp') 

@section('content')


<ul>
    @foreach($orders as $order)
    @if($order->status!='entregat')
    <li>Comanda id:{{$order->id}} demanada per:{{$order->mail}} <a href="{{route('detall', ['id' => $order->id])}}">detall</a></li>
    @endif
    @endforeach
</ul>

@endsection