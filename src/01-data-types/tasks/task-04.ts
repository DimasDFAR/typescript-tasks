/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */


type Book = {
    ISBNnumber: number
    Title: string
    authorName: string
    pages: number
    bookCategory: string
    availableToBorrow: boolean
}

const fantasyBook: Book = {
    ISBNnumber: 9780132350884,
    Title: "The Hidden Kingdom",
    authorName: "James Peterson",
    pages: 318,
    bookCategory: "Fantasy",
    availableToBorrow: true
}

const mysteryBook: Book = {
    ISBNnumber: 9780262033848,
    Title: "The Silent Room",
    authorName: "Emily Carter",
    pages: 276,
    bookCategory: "Mystery",
    availableToBorrow: false
}

const scienceBook: Book = {
    ISBNnumber: 9781491950296,
    Title: "Journey Through Space",
    authorName: "William Harris",
    pages: 194,
    bookCategory: "Science",
    availableToBorrow: true
}

console.log(fantasyBook, mysteryBook, scienceBook)