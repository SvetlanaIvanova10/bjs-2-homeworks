// Задача №1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5; 
    }

    set state(newState){
        if(newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
        this.type = 'magazine';
	} 
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
	} 
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
	} 
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
	} 
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
	} 
}

//Задача №2. Библиотека

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find((book) => book[type] === value);
        return (findBook)? findBook: null;
    }

    giveBookByName(bookName) {
        let findBook = this.findBookBy('name', bookName);
        if (findBook) {
            let i = this.books.indexOf(findBook);
            this.books.splice(i,1);
            return findBook;
        } else {
            return null;
        }
    }
}

//Задача №3. Журнал успеваемости

class Student {
    constructor(name){
        this.name = name;
        this.marks = {};
    }
  
    addMark(mark, subject) {
        if (mark >= 1 && mark <= 5) {
            if ((Object.keys(this.marks)).includes(subject)) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [mark];
            }
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
    }
    
    getAverageBySubject(subject){
        if (this.marks[subject]) {
            let avg = Number((this.marks[subject].reduce((a, b) => (a + b)) / this.marks[subject].length).toFixed(1));
            console.log(`Средний балл по предмету ${subject} ${avg}`)
            return avg;
        } else {
            console.log("Несуществующий предмет")
        }
    }

    getAverage () {
        let allMarks = Object.values(this.marks).reduce(
            (previousValue, currentValue) => previousValue.concat(currentValue), []);
        let avg = Number((allMarks.reduce((a, b) => (a + b)) / allMarks.length).toFixed(1));
        console.log(`Средний балл по всем предметам ${avg}`)
        return avg;
    }
    
    exclude (reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}