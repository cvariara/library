const myLibrary = [
  {
    title: "Red Rising",
    author: "Pierce Brown",
    pages: 382,
    completed: true,
  },
  {
    title: "Golden Son",
    author: "Pierce Brown",
    pages: 434,
    completed: false,
  },
  {
    title: "Golden Son",
    author: "Pierce Brown",
    pages: 434,
    completed: true,
  },
  {
    title: "Golden Son",
    author: "Pierce Brown",
    pages: 434,
    completed: false,
  },
];

const form = document.querySelector("form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isBookCompleted = document.querySelector("#completed");
const cards = document.querySelector(".cards");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // const book = {};
  // book.title = e.target.title.value;
  // book.author = e.target.author.value;
  // book.pages = e.target.pages.value;
  // book.completed = e.target.completed.value;
  // console.log(book)

  addBookToLibrary();
  displayBooks();

  form.reset();
});

function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
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
}

function displayBooks(book) {
  // console.log(book);
  cards.innerHTML = "";
  myLibrary.forEach((book) => {
    cards.innerHTML += `
      <div class="card">
        <div class="title">Title: ${book.title}</div>
        <div class="author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <div class="completed">Completed?: ${book.completed ? "Yes" : "No"}</div>
        <button class="remove-book">Remove Book</button>
      </div>
      `;
  })
}


displayBooks();
