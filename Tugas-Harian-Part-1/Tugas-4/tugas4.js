// Soal 1
console.log("--- Soal 1 ---");
console.log("LOOPING PERTAMA");
var i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i + " - I love coding");
  }
  i++;
}

console.log("LOOPING KEDUA");
var i = 20;
while (i >= 1) {
  if (i % 2 == 0) {
    console.log(i + " - I will become a frontend developer");
  }
  i--;
}

// Soal 2
console.log("--- Soal 2 ---");
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 2 == 1) {
    console.log(i + " - I Love Coding");
  } else if (i % 2 == 0) {
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}

// Soal 3
console.log("--- Soal 3 ---");
var output = "";

for (var i = 0; i < 7; i++) {
  for (var j = 0; j <= i; j++) {
    output += "#";
  }
  output += "\n";
}
console.log(output);

// Soal 4
console.log("--- Soal 4 ---");
var kalimat = [
  "aku",
  "saya",
  "sangat",
  "sangat",
  "senang",
  "belajar",
  "javascript",
];
kalimat.shift();
kalimat.splice(1, 1);

var arr = kalimat.join(" ");
console.log('"' + arr + '"');

// Soal 5
console.log("--- Soal 5 ---");
var sayuran = [];
sayuran.push(
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge"
);
var sayurans = sayuran.sort();

for (var i = 0; i < sayurans.length; i++) {
  console.log(i + 1 + ". " + sayurans[i]);
}
