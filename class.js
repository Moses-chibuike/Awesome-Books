/* eslint-disable  max-classes-per-file */
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  const book = document.querySelector('.books');
  
  class Display {
    static getBooks() {
      let books;
      if (localStorage.getItem('books') == null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }
  
    static displayBooks() {
      const books = Display.getBooks();
      let display = '';
      books.forEach((book, i) => {
        display += `
            <div class="Add-book">
            <p>"${book.title}" by ${book.author}</p>
            <button class="removeBtn" onclick="Display.removeBook(${i})">Remove</button>
            </div>`;
      });
      book.innerHTML = display;
    }
  
    static addBook() {
      const titleInput = document.querySelector('#first-name').value;
      const authorInput = document.querySelector('#last-name').value;
      if (titleInput !== '' && authorInput !== '') {
        const newBook = new Book(titleInput, authorInput);
        const books = Display.getBooks();
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        this.displayBooks();
      }
    }
  
    static removeBook(id) {
      const books = Display.getBooks();
      const bookIndex = books.findIndex((item, i) => i === id);
      books.splice(bookIndex, 1);
      localStorage.setItem('books', JSON.stringify(books));
      this.displayBooks();
    }
  }
 