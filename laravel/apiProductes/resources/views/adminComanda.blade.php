@extends('adminTemp') 

@section('content')
<?php
$data=json_decode($order->jsonOrder, true);
$dataDecoded=$data['order'];
?>


<h2>Ticket</h2>

@foreach($dataDecoded as $item)
    <p>idItem: {{$item["id"]}},  {{$item["itemName"]}}, X{{$item["amount"]}}, {{$item["price"]}}€</p>
@endforeach
<h2>Status</h2>
<form action="{{route('update', ['id' => $order->id])}}" method="post">
    @csrf
    @method('PATCH')
    <select name="status">
        <option value="rebut" {{ $order->status === 'rebut' ? 'selected' : '' }}>Rebut</option>
        <option value="preparacio" {{ $order->status === 'preparacio' ? 'selected' : '' }}>Preparacio</option>
        <option value="recollir en botiga" {{ $order->status === 'recollir en botiga' ? 'selected' : '' }}>Recollir en botiga</option>
        <option value="entregat" {{ $order->status === 'entregat' ? 'selected' : '' }}>Entregat</option>
    </select>
    <button>Guardar</button>
</form>

<a href="{{route('landing')}}">Tornar</a>
@endsection