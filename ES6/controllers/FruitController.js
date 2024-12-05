// controllers/FruitController.js

/**
 * TODO 3:
 * - Import fruits dari data/fruits.js
 * - Refactor variable ke ES6 variable
 */
// controllers/FruitController.js

// Import file JSON berisi data buah
const fruits = require('../data/fruits');

// Menampilkan semua buah
const index = () => {
    console.log("Daftar buah:");
    fruits.forEach((fruit, index) => {
        console.log(`${index + 1}. ${fruit.name}`);
    });
};

// Menambahkan buah baru
const store = (name,) => {
    const newFruit = { name,};
    fruits.push(newFruit);
    console.log(`Buah ${name} berhasil ditambahkan.`);
};

// Memperbarui buah berdasarkan indeks
const update = (index, name,) => {
    if (index < 0 || index >= fruits.length) {
        console.log("Indeks tidak valid.");
        return;
    }
    fruits[index] = { name,};
    console.log(`Buah pada indeks ${index + 1} berhasil diperbarui.`);
};

// Menghapus buah berdasarkan indeks
const destroy = (index) => {
    if (index < 0 || index >= fruits.length) {
        console.log("Indeks tidak valid.");
        return;
    }
    const deleted = fruits.splice(index, 1);
    console.log(`Buah ${deleted[0].name} berhasil dihapus.`);
};

// Ekspor fungsi sebagai named exports
module.exports = { index, store, update, destroy };
