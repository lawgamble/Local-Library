function totalBooksCount(books) {
   let result = 0;
  for (let items in books){
   result++
  }
  return result;
}

function totalAccountsCount(accounts) {
 let result = 0;
 for (let people in accounts) {
   result++
 }
 return result;
}

function booksBorrowedCount(books) {
  let result = 0;
 for (let items in books) {
  const book = books[items];
  const borrow = book.borrows;
  for (let item in borrow) {
    const itemBorrow = borrow[item].returned;
    if(itemBorrow === false) {
     result++;
   }
  }
 }
 return result;
}

function getMostCommonGenres(books) {
 const genre = books.map((book) => book.genre);
 let result = [];
 let count = {};
 genre.forEach(function (item) {
   count[item] = (count[item] || 0) +1;
 });
 for (let key in count) {
   result.push({
     name: key,
     count: count[key],
   });
 }
 result.sort((a, b) => (a.count < b.count ? 1 : -1));
 return result.slice(0, 5);
}





function getMostPopularBooks(books) {
  let result = [];
  for (item in books){
    const count = books[item].borrows.length;
    result.push({
      name: books[item].title,
      count: count
    });
  }
   result.sort((a, b) => (a.count < b.count ? 1 : -1));
   return result.slice(0, 5);
  }



function getMostPopularAuthors(books, authors){
  let count = {};
  let result = [];
   books.forEach(function(book) {
     const author = authors.find((author) => author.id === book.authorId);
     const authorName = `${author.name.first} ${author.name.last}`;
    if (count.hasOwnProperty(authorName)) {
     count[authorName] = count[authorName] + book.borrows.length;
    } else {
      count[authorName] = book.borrows.length;
    }
   });
   console.log(count);
   for (let key in count){
     result.push({
       name : key,
       count : count[key]
     });
   }
   result.sort((a, b) => (a.count < b.count ? 1 : -1));
   return result.slice(0, 5);
  }



module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
