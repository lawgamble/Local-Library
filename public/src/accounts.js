function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last > accB.name.last ? 1 : -1);
}

function numberOfBorrows(account, books)  {
  let result = [];
  const list = books.map((book) => book.borrows);
  let array = list.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  const filtered = array.filter((arr) => arr.id === account.id)
    return filtered.length;
  }


 

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let book = books.find((book) => account.id === book.borrows[0].id && book.borrows[0].returned === false );
  let author = authors.find((author) => book.authorId === author.id);
  let objResult = {...book, author};
  result.push(objResult);
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
