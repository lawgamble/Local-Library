function findAuthorById(authors, id) {
  const authorResult = authors.find((author) => author.id === id); 
  return authorResult;
}

function findBookById(books, id) {
  const bookResult = books.find((book) => book.id === id);
  return bookResult;
}

function partitionBooksByBorrowedStatus(books)  {
 let findA = books.filter((book) => book.borrows[0].returned === false);
 let findB = books.filter((book) => book.borrows[0].returned === true);
 let result = [findA, findB];
 return result;
}

// helper
const findAccount = (accounts, borrower) => {
  let result = accounts.find((account) => borrower.id === account.id); 
  return result; 
}


function getBorrowersForBook(book, accounts) {
 let result = book.borrows.map((borrower) =>{
   let result = findAccount(accounts, borrower) 
     result.returned = borrower.returned
     return result;
 });
  console.log(result);
  return result.filter((borrower, ind) => result.findIndex(item => item.id === borrower.id) === ind);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
