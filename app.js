
const { User } = require('./user-management');
const { Book } = require('./books-management');

var firstUser = new User({"email":"john@hexquote.com"});

var book1 = new Book({"title":"Red Mars","author":" kim stanley robinson", "category":"fictional "});

console.log(firstUser);
console.log();
console.log(book1); //instance

