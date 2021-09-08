var filterBooksPromise = require("./promise2.js");

// bukunya berwarna dan jumlah halamannya 40
filterBooksPromise(true, 40)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err.message);
  });

async function filterBooks() {
  try {
    // bukunya tidak berwarna dan jumlah halamannya 250
    const booksUncolorfull = await filterBooksPromise(false, 250);
    console.log(booksUncolorfull);

    // bukunya berwarna dan jumlah halamannya 30
    const booksColorfull = await filterBooksPromise(true, 30);
    console.log(booksColorfull);
  } catch (err) {
    console.log(err.message);
  }
}

filterBooks();
