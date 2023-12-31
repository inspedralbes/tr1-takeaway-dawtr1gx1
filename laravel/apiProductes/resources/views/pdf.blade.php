<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .container{
            width: 100%;
            height: 100%;
            min-height: 600px;
        }

        table{
            width: 100%;
            text-align: center;
            border-radius: 10px;
            border: 1px solid black;
            border-collapse: collapse;
            margin: 0 auto;
        }
        .title th{
            padding-bottom: 15px;
        }
        .ticket tr{
            border: 1px solid black;
        }
        .ticket th{
            padding: 10px 20px;
            border: 1px solid black;
        }
        .ticket td{
            padding: 5px 10px;
            border: 1px solid black;
        }
        .productName{
            width: 60%;
            text-align: left;
        }
        .bottom-line td{
            width: 50%;
        }
        .qr{
            text-align:center;
            margin-top: 40px;
        }
    </style>


</head>
<body>
    
    <div class="container">
        <table>

            <tr class="title">
                <th colspan="2">
                INFORMACIO DE LA COMANDA
                </th>
            </tr>
            <tr class="bottom-line">
                <td>Numero de la comanda: {{ $newOrder->id }}</td>
                <td>Email: {{ $newOrder->mail }}</td>
            </tr>
            <tr class="bottom-line">
                <td>Data de la comanda: {{ $newOrder->created_at }}</td>
            </tr>
        </table>

        <table class="ticket">
            <tr>
                <th>Producte</th>
                <th>Quantitat</th>
                <th>Preu</th>
            </tr>

            @foreach (json_decode($newOrder->jsonOrder, true)['order'] as $item)
                <tr>
                    <td class="productName">{{ $item['itemName'] }}</td>
                    <td>{{ $item['amount'] }}</td>
                    <td>{{ $item['price'] }}€</td>
                </tr>
            @endforeach


            <tr>
                <td></td>
                <td></td>
                <td>{{ $newOrder->totalPrice }}€</td>

            </tr>
        </table>

        <div class="qr">
            <img src="data:image/png;base64,{{ $newOrder['qr'] }}" alt="">
        </div>

    </div>

</body>
</html>

