<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "db_kontak");

// Cek koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Ambil data dari form
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Query insert data
$sql = "INSERT INTO kontak (fullname, email, phone, message) VALUES ('$fullname', '$email', '$phone', '$message')";

// Cek dan tampilkan alert sukses
if (mysqli_query($koneksi, $sql)) {
    echo "<script>alert('Data berhasil disimpan!'); window.location.href='index.html';</script>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($koneksi);
}

// Tutup koneksi
mysqli_close($koneksi);
?>
