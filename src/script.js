function connectToDb(number, connect) {
  if (number === 1) {
    connect();
  }
}

function getBook(bookId) {
  return new Promise((resolve, reject) => {
    if(bookId === 1) {
      resolve({ id: 1, title: "Book 1" });
    } else {
      reject({ errorMessage:"invalid id" });
    }
  });
}

module.exports = { connectToDb, getBook };
