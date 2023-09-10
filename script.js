const myLibrary = [
  {
    title: "Red Rising",
    author: "Pierce Brown",
    pages: 382,
    completed: true
  }
];

const form = document.querySelector("form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isBookCompleted = document.querySelector("#completed")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();

  form.reset();
})

function Book(title, author, pages, completed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = completed;
}

function addBookToLibrary() {
  if (bookTitle.value.length === 0 || bookAuthor.value.length === 0 || bookPages.value.length === 0) {
    alert("Please fill in all the fields appropriately.");
    return;
  }

  const book = new Book(bookTitle.value, bookAuthor.value, pages.value, isBookCompleted.checked);
  myLibrary.push(book);
  console.log(myLibrary);
}
