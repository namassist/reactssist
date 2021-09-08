var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

let i = 0;
const execute = (time) => {
  readBooksPromise(time, books[i])
    .then(function (sisaWaktu) {
      if (i < books.length) {
        if (sisaWaktu !== 0) {
          i += 1;
          execute(sisaWaktu);
        }
      }
    })
    .catch(function (error) {
      error.message;
    });
};
execute(10000);
