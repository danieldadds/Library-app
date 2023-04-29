const bookDisplay = document.getElementById("container");

const addBook = document.getElementById("add-book");

const userSubmit = document.getElementById("submit");

let myLibrary = [];

closeForm();

userSubmit.addEventListener("click", function () {
  let valueName = document.getElementById("name-value").value;
  let valueAuthor = document.getElementById("author-value").value;
  let valuePages = document.getElementById("pages-value").value;
  console.log(valueName);

  addBookToLibrary(valueName, valueAuthor, valuePages);
  displayBook();
});

function Book(name, author, pages) {
  this.bookName = name;
  this.bookAuthor = author;
  this.bookPages = pages;
}

function addBookToLibrary(name, author, pages) {
  //   let name = prompt("book name?");
  //   let author = prompt("author?");
  //   let pages = prompt("pages?");

  const newBook = new Book(name, author, pages);

  myLibrary.push(newBook);
}

function displayBook() {
  for (let index = 0; index < myLibrary.length; index++) {
    const newCard = document.createElement("div");

    newCard.setAttribute("id", "card");

    const bookTitle = document.createElement("h1");
    const titleNode = document.createTextNode(myLibrary[index].bookName);

    bookDisplay.appendChild(newCard);
    bookTitle.appendChild(titleNode);

    newCard.appendChild(bookTitle);

    const bookAuthor = document.createElement("h2");
    const authorNode = document.createTextNode(
      "Author: " + myLibrary[index].bookAuthor
    );

    bookAuthor.appendChild(authorNode);

    newCard.appendChild(bookAuthor);

    const bookPages = document.createElement("h2");
    const pagesNode = document.createTextNode(
      "Pages: " + myLibrary[index].bookPages
    );

    bookPages.appendChild(pagesNode);

    newCard.appendChild(bookPages);
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// const testBook = new Book("test name", "test auth", "433");
// myLibrary.push(testBook);
// displayBook();
