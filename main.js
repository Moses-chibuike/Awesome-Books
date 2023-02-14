const form = document.querySelector('.form');
const titleInput = document.querySelector('#first-name');
const authorInput = document.querySelector('#last-name');
const book = document.querySelector('.books');
let books;

const displayBooks = () => {
  if (localStorage.getItem('books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  let display = '';
  books.forEach((book, i) => {
    display += `
        <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button onclick="removeBook(${i})">Remove</button>
        <hr />
        </div>`;
  });
  book.innerHTML = display;
};

const addBooks = (Title, Author) => {
  if (Title !== '' && Author !== '') {
    books.push({ title: Title, author: Author });
    localStorage.setItem('books', JSON.stringify(books));
  }
  displayBooks();
};

window.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  addBooks(titleValue, authorValue);
});

/* eslint-disable no-unused-vars */
const removeBook = (id) => {
  if (localStorage.getItem('books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  const bookIndex = books.findIndex((item, i) => i === id);
  books.splice(bookIndex, 1);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
};