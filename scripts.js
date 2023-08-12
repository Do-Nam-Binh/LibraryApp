let myLibrary = [];

function Book(name, author, status){
    this.name = name;
    this.author = author;
    this.status = status;

    this.toggleReadStatus= function(){
        if(this.status == 'read'){
            this.status = 'notRead';
        }else{
            this.status = 'read';
        }
    }

}

function addBook(name, author, status){
    let book = new Book(name, author, status);
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

        const bookStatus = document.createElement("button");
        bookStatus.classList.add('statusBtn')
        if(myLibrary[i].status == 'read'){
            bookStatus.textContent = 'Read';
        }else{
            bookStatus.textContent = 'Not read';
        }
        bookStatus.addEventListener('click', changeStatus);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', removeBook);
        
        card.appendChild(bookName);
        card.appendChild(bookAuthor);
        card.appendChild(bookStatus);
        card.appendChild(deleteBtn);
        content.appendChild(card);
    }
    
}

function handleSubmit(e) {
    e.preventDefault();
    addBook(this.bookName.value, this.bookAuthor.value, this.readStatus.value);
}

function removeBook(e){
    myLibrary.splice(parseInt(e.target.parentNode.classList.value[5]), 1);
    displayBooks();
}

function changeStatus(e){
    if(this.textContent == 'Read'){
        this.textContent = 'Not read';
    }else{
        this.textContent = 'Read';
    }
    console.log(e.target.parentNode.classList.value[5]);
    myLibrary[parseInt(e.target.parentNode.classList.value[5])].toggleReadStatus();
}

const addBookForm = document.querySelector('.addBookForm');
addBookForm.addEventListener('submit',handleSubmit)


const content = document.querySelector('.main-content');