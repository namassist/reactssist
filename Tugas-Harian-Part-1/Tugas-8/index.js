var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

let i = 0;
const execute = (time) => {
  readBooks(time, books[i], function (check) {
    if (check !== 0) {
      i += 1;
      execute(check, books[i]);
    }
  });
};
execute(10000);
