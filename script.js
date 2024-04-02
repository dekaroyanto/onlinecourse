let validasicuy = (event) => {
  event.preventDefault();
  let tinggi = parseFloat(document.getElementById("tinggiInput").value);
  let berat = parseFloat(document.getElementById("beratInput").value);
  let cowo = document.getElementById("cowo").checked;
  let cewe = document.getElementById("cewe").checked;

  if (!tinggi || !berat || (!cowo && !cewe)) {
    alert("Lengkapi data untuk menghitung BMI.");
    return false;
  }
  calculateBMI();
  document.getElementById("downloadhasil").style.display = "block";
  document.getElementById("konsultasi").style.display = "block";
  document.getElementById("registrasi").style.display = "block";
  document.getElementById("boxhasilpenyakit").style.display = "block";
  return false;
};

let calculateBMI = () => {
  let tinggi = parseFloat(document.getElementById("tinggiInput").value);
  let berat = parseFloat(document.getElementById("beratInput").value);
  let cowo = document.getElementById("cowo").checked;
  let cewe = document.getElementById("cewe").checked;
  let gender = cowo ? "Pria" : "Wanita";
  let bmi = berat / (tinggi / 100) ** 2;

  let kategori = "";
  let keterangan = "";
  let penjelasan = "";
  let penjelasanlagi = "";
  let perhatian = "";
  let penyakit = "";
  let penyakit1 = "";
  let penyakit2 = "";
  let penyakit3 = "";
  if (bmi < 18.5) {
    kategori = "Kekurangan Berat Badan";
    keterangan = "Anda kekurangan berat badan";
    penjelasan = "Hasil BMI kurang dari 18.5";
    penjelasanlagi =
      "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk menaikan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal";
    perhatian =
      "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    penyakit = "Beberapa penyakit yang berasal dari kekurangan berat badan";
    penyakit1 = "Penurunan Sistem Kekebalan Tubuh";
    penyakit2 = "Osteoporosis";
    penyakit3 = "Gangguan Kardiovaskular";
  } else if (bmi < 25) {
    kategori = "Normal (Ideal)";
    keterangan = "Berat badan anda normal";
  } else if (bmi < 30) {
    kategori = "Kelebihan Berat Badan";
    keterangan = "Anda memiliki berat badan berlebih";
  } else {
    kategori = "Kegemukan (Obesitas)";
    keterangan = "Anda mengalami kegemukan (obesitas)";
  }

  let hasilcuy = document.getElementById("hasilkategori");
  hasilcuy.innerHTML = `${kategori} - ${gender}`;

  let perhitungan = document.getElementById("hasilperhitungan");
  perhitungan.innerHTML = bmi.toFixed(2);

  let keterangancuy = document.getElementById("hasilketerangan");
  keterangancuy.innerHTML = keterangan;

  let penjelasancuy = document.getElementById("hasilpenjelasan");
  penjelasancuy.innerHTML = penjelasan;

  let penjelasanlagicuy = document.getElementById("hasilpenjelasanlagi");
  penjelasanlagicuy.innerHTML = penjelasanlagi;

  let perhatiancuy = document.getElementById("hasilperhatian");
  perhatiancuy.innerHTML = perhatian;

  let penyakitcuy = document.getElementById("hasilpenyakit");
  penyakitcuy.innerHTML = penyakit;

  let penyakitcuy1 = document.getElementById("hasilpenyakit1");
  penyakitcuy1.innerHTML = penyakit1;
  let penyakitcuy2 = document.getElementById("hasilpenyakit2");
  penyakitcuy2.innerHTML = penyakit2;
  let penyakitcuy3 = document.getElementById("hasilpenyakit3");
  penyakitcuy3.innerHTML = penyakit3;
};

let downloadcuy = () => {
  alert("Hasil sudah di download cuy");
};

let konsultasicuy = () => {
  alert("Konsultasi sedang di proses...");
};

let registrasicuy = () => {
  alert("Anda sudah melakukan registrasi");
};
