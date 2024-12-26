<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;

Route::get('/patients', [PatientController::class, 'index']); // Mengambil semua pasien
Route::post('/patients', [PatientController::class, 'store']); // Menambah pasien baru
Route::get('/patients/{id}', [PatientController::class, 'show']); // Mengambil data pasien berdasarkan ID
Route::put('/patients/{id}', [PatientController::class, 'update']); // Mengupdate data pasien berdasarkan ID
Route::delete('/patients/{id}', [PatientController::class, 'destroy']); // Menghapus data pasien berdasarkan ID
Route::get('/patients/search/{name}', [PatientController::class, 'search']); // Mencari pasien berdasarkan nama
Route::get('/patients/status/positive', [PatientController::class, 'positive']); // Mengambil pasien dengan status 'positive'
Route::get('/patients/status/recovered', [PatientController::class, 'recovered']); // Mengambil pasien dengan status 'recovered'
Route::get('/patients/status/dead', [PatientController::class, 'dead']); // Mengambil pasien dengan status 'dead'
