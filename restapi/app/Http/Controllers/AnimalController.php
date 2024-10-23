<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Array hewan yang sudah ada
    private $animals = ['Kucing', 'Gajah', 'Ikan'];

    // GET request: Menampilkan semua data hewan
    public function index(Request $request) {
        echo "Menampilkan data animals: <br>";
        foreach ($this->animals as $index => $animal) {
            echo "$index: $animal <br>";
        }
    }

    // POST request: Menambahkan hewan baru
    public function store(Request $request) {
        $name = $request->input('name');
        array_push($this->animals, $name); // Menambah hewan baru (contoh: Ayam)
        echo "Menambahkan hewan baru: $name <br>";
        $this->index($request); // Menampilkan data setelah ditambah
    }

    // PUT request: Mengupdate data hewan berdasarkan ID
    public function update(Request $request, $id) {
        $name = $request->input('name'); // Mengupdate hewan (contoh: Ganti menjadi Jerapah)
        if (isset($this->animals[$id])) {
            $this->animals[$id] = $name;
            echo "Mengupdate hewan dengan ID $id menjadi: $name <br>";
            $this->index($request); // Menampilkan data setelah update
        } else {
            echo "Hewan dengan ID $id tidak ditemukan. <br>";
        }
    }

    // DELETE request: Menghapus data hewan berdasarkan ID
    public function destroy(Request $request, $id) {
        if (isset($this->animals[$id])) {
            unset($this->animals[$id]);
            $this->animals = array_values($this->animals); // Menghapus hewan (contoh: Hapus Ikan)
            echo "Menghapus hewan dengan ID $id <br>";
            $this->index($request); // Menampilkan data setelah dihapus
        } else {
            echo "Hewan dengan ID $id tidak ditemukan. <br>";
        }
    }
}
