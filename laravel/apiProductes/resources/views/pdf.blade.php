<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .container{
            width: 500px;
            
        }
    </style>

</head>
<body>
    
    <div class="container">
        <table>
            <tr>
                <th>Producte</th>
                <th>Quantitat</th>
                <th>Preu</th>
            </tr>
            <tr>
                <td>Hamburguesa</td>
                <td>2</td>
                <td>7.99</td>
            </tr>
            <tr>
                <td>Arros Tres Delicies</td>
                <td>1</td>
                <td>9.99</td>
            </tr>
        </table>

        {!! QrCode::generate('hola'); !!}
    </div>

</body>
</html>