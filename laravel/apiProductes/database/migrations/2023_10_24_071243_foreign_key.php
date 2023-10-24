<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table("items", function (Blueprint $table) {
            $table->unsignedBigInteger('itemCategory');
            $table->foreign('itemCategory')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down():void
    {
        Schema::dropIfExists('items');
    }
};
