@extends('adminTemp') 

@section('content')

<h1>Administracio de comandes</h1>

    <div class="grid">
    @foreach($orders as $order)
    @if($order->status!='entregat')
    <p>Comanda id:{{$order->id}} demanada per:{{$order->mail}}</p> <a href="{{route('detall', ['id' => $order->id])}}" class="btn btn-primary">Detall</a>
    @endif
    
    @endforeach
    </div>
    <a href="{{route('landing')}}" class="btn btn-secondary">Tornar</a>


@endsection