/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
  /**
   * Fungsi untuk download file menggunakan Promise
   * @returns {Promise<string>} - Promise yang akan menyelesaikan nama file
   */
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  };
  
  // Menggunakan Async/Await untuk menjalankan download
  const main = async () => {
    try {
      const result = await download();
      showDownload(result);
    } catch (error) {
      console.error("Terjadi kesalahan saat mendownload file:", error);
    }
  };
  
  main();
  