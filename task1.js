const books = [
    {
        title: "The Catcher in the Rye",
        author: "J.D Salinger",
        year: 1951,
        genres: ["Fiction","Coming-of-age"]
    },
    {
        title: "To kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genres:["Fiction, Sothern Gothic"]
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genres:["Dystopian","Political Fiction"]
    },
    /* {
        title: "Alices adventures in wonderland",
        author: ["lewis Caroll, Robert Ingpen"],
        year: 2017,
        genres:"adventure"
    } */
];

//Tasks
//Access the Title of the second book in the array and log it to the console
//Access the publication year of the third book in the array and log it to console

let innerBooks= books[1]
console.log(innerBooks);

console.log(innerBooks.title);

//publication year of third book

let book3= books[2]
console.log(innerBooks);

console.log(book3.year);


//access second genre of the 1st book

let book1=books[0]
console.log(book1);

console.log(book1.genres[1]);

//create a new book object representing your favourite book and add it to the books array
 let newBook = {
    title:"Eloquent Javascript, 3rd Edition",
    authors:"Marjin Haverbeke",
    year:2018,
    genres:["non-fiction","technical"],
 };

 //adding the book to the books Array
books[3]= newBook;

//check if newbook is in the books Array
console.log(books);