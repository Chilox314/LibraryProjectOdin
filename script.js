let myLibrary = [];

function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);  
  myLibrary.push(newBook);
}

addBookToLibrary("HP","JKR","300","Read")
addBookToLibrary("HPA","JKR","300","Read")
addBookToLibrary("HPB","JKR","300","Read")
addBookToLibrary("HPC","JKR","300","Read")
addBookToLibrary("HPD","JKR","300","Read")
addBookToLibrary("HPE","JKR","300","Read")
addBookToLibrary("HPF","JKR","300","Read")