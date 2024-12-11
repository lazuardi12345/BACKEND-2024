<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;



class StudentController extends Controller
{
    public function index()
{
    $students = Student::all();

    if ($students->isEmpty()) {
        $data = [
            'message' => 'Student is empty',
            'data' => [],
        ];

        return response()->json($data, 404);
    }

    $data = [
        'message' => 'Get All Students',
        'data' => $students,
    ];

    return response()->json($data, 200);
}


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required',
            'nim'=>'numeric|required',
            'email'=>'email|required',
            'jurusan'=>'required'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $student = Student::create($request->all()); 

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student, 
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id); 
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->update($request->only(['nama', 'nim', 'email', 'jurusan']));

        $data = [
            'message' => 'Student updated successfully',
            'data' => $student,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $student = Student::find($id); 
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted successfully'], 200);
    }
    public function show($id)
{
    $student = Student::find($id); 
    if (!$student) {
        return response()->json(['message' => 'Student not found'], 404);
    }

    $data = [
        'message' => 'Get Student by ID',
        'data' => $student,
    ];

    return response()->json($data, 200);
}
}
