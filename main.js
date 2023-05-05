// Manipulasi objek html
const button = document.getElementById("button");
const hasil = document.getElementById("hasil");

button.addEventListener("click", () => {
  hasil.innerHTML =
    "Tombol berhasil di klik, dalam hitungan ke 3 tombol akan kembali muncul";
  button.style.display = "none";
  console.log("berhasil");

  // Lanjutan kode diatas untuk memunculkan button kembali
  setTimeout(() => {
    button.style.display = "block";
    hasil.style.display = "none";
    button.addEventListener("click", () => {
      //Melakukan pengulangan agar dapat berfungsi terus menerus
      hasil.innerHTML =
        "Tombol berhasil di klik, dalam hitungan ke 3 tombol akan kembali muncul";
      hasil.style.display = "block";
      button.style.display = "none";
      setTimeout(() => {
        button.style.display = "block";
        hasil.style.display = "none";
      }, 3000);
    });
  }, 3000);
});

// Merubah style menggunakan js
const bg = document.getElementById("bg");
const input = document.getElementById("input");

function konfirm() {
  bg.style.backgroundColor = input.value;
}

// Merubah style menggunakan js menggunakan opsi
const input2 = document.getElementById("input2");
const bg2 = document.getElementById("bg2");
const judul2 = document.getElementById("judul2");
const penjelasan2 = document.getElementById("penjelasan2");

function konfirm2() {
  const opsi = select.options.selectedIndex;
  console.log("berhasil");

  switch (opsi) {
    case 1:
      bg2.style.backgroundColor = input2.value;
      break;
    case 2:
      judul2.style.color = input2.value;
      break;
    case 3:
      penjelasan2.style.color = input2.value;
      break;
  }
}

// SESI CONSOLE.LOG
// If else
let x = 10;
let y = 7;

if (x > y) {
  console.log("x lebih besar dari y" + " " + "KODE 1");
} else {
  console.log("x kurang dari y" + " " + "KODE 1");
}

// jikalau kode diatas menggunakan GC
// guard clause if else
function jumlah() {
  let x = 1;
  let y = 7;

  const kecil = "x lebih kecil dari y -" + " " + "KODE 2";
  const besar = "x lebih BESAR dari y +" + " " + "KODE 2";

  if (x < y) {
    return kecil;
  }

  if (x > y) {
    return besar;
  }
}

console.log(jumlah());

// Penghitung diskon
function hitungDiskon(totalBelanja) {
  const diskon = totalBelanja >= 100000 ? totalBelanja * 0.3 : 0;
  return diskon;
}

const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const totalBelanja = parseFloat(form.elements["totalBelanja"].value);

  const nilaiDiskon = hitungDiskon(totalBelanja);

  result.innerHTML = nilaiDiskon
    ? `Anda mendapatkan diskon sebesar Rp${nilaiDiskon}.`
    : "Kalau mau dapat diskon belanja yang banyak BLOG";
});

// CONSOLE LOG
// Array
const array = ["luis", "kevin", "maulana"];
array.push("ucok", "baba");
console.log(array);

let submitForm = document.getElementById("submitForm");
submitForm.addEventListener("click", () => {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let hasilData = [];

  hasilData.push(nama, email, password);

  document.getElementById("resultNama").innerHTML = "Nama: " + hasilData[0];
  document.getElementById("resultEmail").innerHTML = "Email: " + hasilData[1];
  document.getElementById("resultPass").innerHTML = "Password: " + hasilData[2];
});
