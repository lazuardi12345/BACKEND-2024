// app.js

/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 * @hint - Gunakan Destructuring Object
 */
// app.js

// Import fungsi dari FruitController
const { index, store, update, destroy } = require('./controllers/FruitController');

// Fungsi utama
const main = () => {
    console.log("=== Aplikasi Manajemen Buah ===");

    // Menampilkan semua buah
    index();

    // Menambahkan buah baru
    store("Mangga", "Hijau");

    // Menampilkan semua buah setelah penambahan
    console.log("\nSetelah menambahkan buah baru:");
    index();

    // Memperbarui buah pada indeks 1
    update(1, "Jeruk", "Oranye");

    // Menampilkan semua buah setelah pembaruan
    console.log("\nSetelah memperbarui buah:");
    index();

    // Menghapus buah pada indeks 0
    destroy(0);

    // Menampilkan semua buah setelah penghapusan
    console.log("\nSetelah menghapus buah:");
    index();
};

// Jalankan fungsi utama
main();
