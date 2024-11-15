<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('/patients', [PatientController::class, 'index']);
Route::post('/patients', [PatientController::class, 'store']);
Route::get('/patients/{id}', [PatientController::class, 'show']);
Route::put('/patients/{id}', [PatientController::class, 'update']);
Route::delete('/patients/{id}', [PatientController::class, 'destroy']);
Route::get('/patients/search/{name}', [PatientController::class, 'search']);
Route::get('/patients/status/positive', [PatientController::class, 'positive']);
Route::get('/patients/status/recovered', [PatientController::class, 'recovered']);
Route::get('/patients/status/dead', [PatientController::class, 'dead']);
