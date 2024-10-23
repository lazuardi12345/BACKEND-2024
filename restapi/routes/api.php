<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

#Methode Get
Route::get('/animals', [AnimalController::class, "index"]);

#Methode Post
Route::post('/animals', [AnimalController::class, 'store']);

#methode put
Route::put('/animals/{id}', [AnimalController::class, 'update']);

#Methode Delet
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);
