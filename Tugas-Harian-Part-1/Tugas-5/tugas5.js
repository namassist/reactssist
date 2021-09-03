// soal 1
function luasPersegiPanjang(p, l) {
  return p * l;
}

function kelilingPersegiPanjang(p, l) {
  return 2 * (p + l);
}

function volumeBalok(p, l, t) {
  return p * l * t;
}

var panjang = 12;
var lebar = 4;
var tinggi = 8;

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log("--- Soal 1 ---");
console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

// soal 2
function introduce(name, age, address, hoby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hoby +
    "!"
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log("--- Soal 2 ---");
console.log(perkenalan);

// soal 3
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
var obj = {};
obj.nama = arrayDaftarPeserta[0];
obj["jenis kelamin"] = arrayDaftarPeserta[1];
obj.hobi = arrayDaftarPeserta[2];
obj["tahun lahir"] = arrayDaftarPeserta[3];

console.log("--- Soal 3 ---");
console.log(obj);

// soal 4
var dataBuah = [
  {
    nama: "Nanas",
    warna: "kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

var filterBuah = dataBuah.filter(function (buah) {
  return !buah.adaBijinya;
});

console.log("--- Soal 4 ---");
console.log(filterBuah);

// soal 5
function tambahDataFilm(paramNama, paramDurasi, paramGenre, paramtahun) {
  return dataFilm.push({
    nama: paramNama,
    durasi: paramDurasi,
    genre: paramGenre,
    tahun: paramtahun,
  });
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log("--- Soal 5 ---");
console.log(dataFilm);
