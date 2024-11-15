<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
     // Get all resources
     public function index()
     {
         $patients = Patient::all();
 
         if ($patients->isEmpty()) {
             $data = [
                 'message' => 'Data is empty',
                 'data' => []
             ];
             return response()->json($data, 200);
         }
 
         $data = [
             'message' => 'Get all resource',
             'data' => $patients
         ];
         return response()->json($data, 200);
     }
 
     // Add a new resource
     public function store(Request $request)
     {
         $validatedData = $request->validate([
             'name' => 'required|string|max:255',
             'phone' => 'required|string|max:15',
             'address' => 'required|string',
             'status' => 'required|string',
             'in_date_at' => 'nullable|date',
             'out_date_at' => 'nullable|date'
         ]);
 
         $patient = Patient::create($validatedData);
 
         if (!$patient) {
             $data = [
                 'message' => 'Failed to create patient.',
                 'data' => []
             ];
             return response()->json($data, 400);
         }
 
         $data = [
             'message' => 'Reasurce is added successfully.',
             'data' => $patient
         ];
         return response()->json($data, 201);
     }
 
     // Get details of a single resource
     public function show($id)
     {
         $patient = Patient::find($id);
 
         if (!$patient) {
             $data = [
                 'message' => 'Resource not found.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $data = [
             'message' => 'Get detail resource',
             'data' => $patient
         ];
         return response()->json($data, 200);
     }
 
     // Update a resource
     public function update(Request $request, $id)
     {
         $patient = Patient::find($id);
 
         if (!$patient) {
             $data = [
                 'message' => 'Resource not found.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $input = [
             'name' => $request->name ?? $patient->name,
             'phone' => $request->phone ?? $patient->phone,
             'address' => $request->address ?? $patient->address,
             'status' => $request->status ?? $patient->status,
             'in_date_at' => $request->in_date_at ?? $patient->in_date_at,
             'out_date_at' => $request->out_date_at ?? $patient->out_date_at
         ];
 
         $patient->update($input);
 
         $data = [
             'message' => 'Resource is updated successfully.',
             'data' => $patient
         ];
         return response()->json($data, 200);
     }
 
     // Delete a resource
     public function destroy($id)
     {
         $patient = Patient::find($id);
 
         if (!$patient) {
             $data = [
                 'message' => 'Resource not found.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $patient->delete();
 
         $data = [
             'message' => 'Resource deleted is successfully.',
             'data' => []
         ];
         return response()->json($data, 204);
     }
 
     // Search resource by name
     public function search($name)
     {
         $patients = Patient::where('name', 'like', '%' . $name . '%')->get();
 
         if ($patients->isEmpty()) {
             $data = [
                 'message' => 'Resource not found.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $data = [
             'message' => 'Get searched resource',
             'data' => $patients
         ];
         return response()->json($data, 200);
     }
 
     // Get resources by status
     public function positive()
     {
         $patients = Patient::where('status', 'positive')->get();
 
         if ($patients->isEmpty()) {
             $data = [
                 'message' => 'No patients found with positive status.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $data = [
             'message' => 'Get positive resource',
             'data' => $patients
         ];
         return response()->json($data, 200);
     }
 
     public function recovered()
     {
         $patients = Patient::where('status', 'recovered')->get();
 
         if ($patients->isEmpty()) {
             $data = [
                 'message' => 'No patients found with recovered status.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $data = [
             'message' => 'Get recovered resource',
             'data' => $patients
         ];
         return response()->json($data, 200);
     }
 
     public function dead()
     {
         $patients = Patient::where('status', 'dead')->get();
 
         if ($patients->isEmpty()) {
             $data = [
                 'message' => 'No patients found with dead status.',
                 'data' => []
             ];
             return response()->json($data, 404);
         }
 
         $data = [
             'message' => 'Get dead resource',
             'data' => $patients
         ];
         return response()->json($data, 200);
     }
}
