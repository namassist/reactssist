var filterBooksPromise = require("./promise2.js");

// bukunya berwarna dan jumlah halamannya 40
filterBooksPromise(true, 40)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

// bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
async function filterBooksUncolorfull() {
  try {
    const books = await filterBooksPromise(false, 250);
    console.log(books);
  } catch (err) {
    console.log(err);
  }
}

async function filterBooksColorfull() {
  try {
    const books = await filterBooksPromise(true, 30);
    console.log(books);
  } catch (err) {
    console.log(err.message);
  }
}

filterBooksUncolorfull();
filterBooksColorfull();
