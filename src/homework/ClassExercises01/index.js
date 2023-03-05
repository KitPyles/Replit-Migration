// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, isbn, pages, checkedOut, discarded = 'No') {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.discarded = discarded;
    }
    checkout(uses = 1) {
        this.checkedOut += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pages, checkedOut, discarded) {
        super(title, author, copyrightDate, isbn, pages, checkedOut, discarded);
    }
    discardDate(currentYear) {
        if ((currentYear - this.copyrightDate) > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pages, checkedOut, discarded) {
        super(title, author, copyrightDate, isbn, pages, checkedOut, discarded);
    }
    discardTimes() {
        if (this.checkedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let pAndP = new Novel ('Pride and Prejudice','Jane Austen',1813,'1111111111111',432,32,'No');
let buildIt = new Manual ('Top Secret Shuttle Building Manual','Redacted',2013,'0000000000000',1147,1,'No')

// Code exercises 4 & 5 here:
buildIt.discardDate(2022);
pAndP.checkout(5);
