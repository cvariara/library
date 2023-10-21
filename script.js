const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [
  {
    title: "Red Rising",
    author: "Pierce Brown",
    pages: 416,
    completed: false,
  },
];

const form = document.querySelector("form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isBookCompleted = document.querySelector("#completed");
const cards = document.querySelector(".cards");

const addBookModal = document.querySelector("#add-book-modal");
const addBookBtn = document.querySelector(".add-book");
const closeModalBtn = document.querySelector(".close-modal");

addBookBtn.addEventListener("click", () => {
  addBookModal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  addBookModal.close();
});

cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-book")) {
    const parent = e.target.parentElement;
    removeBook(parent.dataset.book);
    return;
  }
  if (e.target.classList.contains("toggle-complete")) {
    const parent = e.target.parentElement;
    toggleReadStatus(parent.dataset.book);
    return;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
  displayBooks();

  addBookModal.close();
  form.reset();
});

class Book {
  constructor(title, author, pages, completed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
  }
}

function addBookToLibrary() {
  if (
    bookTitle.value.length === 0 ||
    bookAuthor.value.length === 0 ||
    bookPages.value.length === 0
  ) {
    alert("Please fill in all the fields appropriately.");
    return;
  }

  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    pages.value,
    isBookCompleted.checked
  );
  myLibrary.push(book);
  saveLibraryToLocalStorage();
}

function removeBook(book) {
  myLibrary.splice(book, 1);
  saveLibraryToLocalStorage();
  displayBooks();
}

function toggleReadStatus(bookValue) {
  myLibrary.forEach((book, index) => {
    if (parseInt(bookValue) === index) {
      book.completed = !book.completed;
    }
  });
  saveLibraryToLocalStorage();
  displayBooks();
}

function saveLibraryToLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function displayBooks() {
  cards.innerHTML = "";
  myLibrary.forEach((book, index) => {
    cards.innerHTML += `
      <div class="card" data-book="${index}">
        <div class="title">Title: ${book.title}</div>
        <div class="author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <button class="toggle-complete ${
          book.completed ? "completed" : "not-completed"
        }">
        ${book.completed ? "Have Read" : "Have Not Read"}
        </button>
        <button class="remove-book">Remove Book</button>
      </div>
      `;
  });
}

displayBooks();
