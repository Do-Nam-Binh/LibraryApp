let myLibrary = [];

function Book(name, author){
    this.name = name;
    this.author = author;
}

function addBook(name, author){
    let book = new Book(name, author);
    myLibrary.push(book);
    displayBooks();
}

function displayBooks(){

    content.innerHTML= '';

    for(let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        const bookName = document.createElement("div");
        bookName.textContent = myLibrary[i].name;
        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = myLibrary[i].author;
        card.appendChild(bookName);
        card.appendChild(bookAuthor);
    
        content.appendChild(card);
    }
    
}

const content = document.querySelector('.main-content');