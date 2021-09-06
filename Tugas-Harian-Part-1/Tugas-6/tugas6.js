// Soal 1
const luasLingkaran = (r) => {
  return (22 / 7) * r * r;
};

const kelilingLingkaran = (r) => {
  return 2 * (22 / 7) * r;
};

console.log("--- Soal 1 ---");
console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));
console.log("");
// Soal 2
const introduce = (...rest) => {
  let [nama, umur, jenisKelamin, pekerjaan] = rest;
  return `Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
};
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log("--- Soal 2 ---");
console.log(perkenalan);
console.log("");

// Soal 3
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

console.log("--- Soal 3 ---");
console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();
console.log("");

// Soal 4
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const { name: phoneName, brand: phoneBrand, year, colors: color } = phone;
const [colorBronze, colorWhite, colorBlack] = color;
console.log("--- Soal 4 ---");
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);
console.log("");

// Soal 5
let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku.warnaSampul = [...buku.warnaSampul, ...warna];
let newBuku = { ...buku, ...dataBukuTambahan };
console.log("--- Soal 5 ---");
console.log(newBuku);
