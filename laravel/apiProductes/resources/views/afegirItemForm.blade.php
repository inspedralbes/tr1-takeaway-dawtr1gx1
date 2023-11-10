@extends('adminTemp') 

@section('content')
<h1>Afegir item</h1>
<div class="form-group">
<form action="{{route('pujarItem')}}" method="POST" enctype="multipart/form-data">
    @csrf
    <label for="itemName">Nom de l'objecte</label><br>
    <input type="text" name="itemName" id="itemName" class="form-control" required><br>
    <label for="stock">Stock</label><br>
    <input type="number" name="stock" id="stock" class="form-control" required><br>
    <label for="description">Descripció</label> <br>
    <textarea name="description" id="description" cols="30" rows="10" class="form-control" required></textarea><br>
    <label for="categories">Categoria</label>
    <select name="categories" id="categories" class="form-control" required>
        @foreach($categories as $category)
        <option value="{{$category->id}}">{{$category->description}}</option>
        @endforeach
    </select><br>
    <label for="price">Preu</label><br>
    <input type="number" name="price" id="price" required step="any" class="form-control"><br>
    <input type="file" name="img" id="img" accept="image/jpg, image/jpeg, image/png" required ><br>
    <input type="submit" value="Enviar" class="btn btn-secondary">
    
</form>
<a href="{{route('adminItems')}}" class="btn btn-secondary">Tornar</a>
</div>
@endsection