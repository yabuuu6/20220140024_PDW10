document.addEventListener('DOMContentLoaded', function() {
    // Ambil data pendaftaran dari localStorage
    let dataPendaftaran = JSON.parse(localStorage.getItem('dataPendaftaran'));

    // Tampilkan data pendaftaran di halaman home
    if (dataPendaftaran) {
        document.getElementById('nama').textContent = dataPendaftaran.nama;
        document.getElementById('nim').textContent = dataPendaftaran.nim;
        document.getElementById('prodi').textContent = dataPendaftaran.prodi;
        document.getElementById('angkatan').textContent = dataPendaftaran.angkatan;
        document.getElementById('tanggalLahir').textContent = dataPendaftaran.tanggalLahir;
        document.getElementById('ukm').textContent = dataPendaftaran.ukm;
        document.getElementById('alamat').textContent = dataPendaftaran.alamat;
    } else {
        console.error("Data pendaftaran tidak ditemukan.");
    }
});
