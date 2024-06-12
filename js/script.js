document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        // Mengambil nilai dari input
        const nama = document.getElementById('nama').value;
        const nim = document.getElementById('nim').value;
        const prodi = document.getElementById('prodi').value;
        const angkatan = document.getElementById('angkatan').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const ukm = document.querySelector('input[name="ukm"]:checked').value;
        const alamat = document.getElementById('alamat').value;

        // Membuat objek data pendaftaran
        const dataPendaftaran = {
            nama: nama,
            nim: nim,
            prodi: prodi,
            angkatan: angkatan,
            tanggalLahir: tanggalLahir,
            ukm: ukm,
            alamat: alamat
        };

        // Simpan data pendaftaran ke dalam localStorage
        localStorage.setItem('dataPendaftaran', JSON.stringify(dataPendaftaran));

        // Redirect ke halaman home
        window.location.href = 'home.html';
    });
});
