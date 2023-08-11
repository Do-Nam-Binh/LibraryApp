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
        card.classList.add(i);
        const bookName = document.createElement("div");
        bookName.textContent = myLibrary[i].name;
        const bookAuthor = document.createElement("div");
        bookAuthor.textContent = myLibrary[i].author;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', removeBook);
        
        card.appendChild(bookName);
        card.appendChild(bookAuthor);
        card.appendChild(deleteBtn);
        content.appendChild(card);
    }
    
}

function handleSubmit(e) {
    e.preventDefault();
    addBook(this.bookName.value, this.bookAuthor.value);
}

function removeBook(e){
    myLibrary.splice(parseInt(e.target.parentNode.classList.value[5]), 1);
    displayBooks();
}

const addBookForm = document.querySelector('.addBookForm');
addBookForm.addEventListener('submit',handleSubmit)


const content = document.querySelector('.main-content');