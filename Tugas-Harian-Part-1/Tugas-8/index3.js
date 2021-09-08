var filterBooksPromise = require("./promise2.js");

// bukunya berwarna dan jumlah halamannya 40
filterBooksPromise(true, 40)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
async function filterBooks() {
  try {
    const booksUncolorfull = await filterBooksPromise(false, 250);
    const booksColorfull = await filterBooksPromise(true, 30);
    console.log(booksUncolorfull);
    console.log(booksColorfull);
  } catch (err) {
    console.log(err.message);
  }
}

filterBooks();
