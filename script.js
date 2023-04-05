
let container = document.querySelector('.container')

let myLibrary = [];

function Book(title,author,pages,read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}
//2nd question
  Book.prototype.toggle = function(){
    if(this.read === "Finished"){
      this.read = "Unfinished"
    }else if(this.read === "Unfinished"){
      this.read = "Finished"
    }
  }
  //
Book.prototype.info = function(){
  let bookInfo = `Title: ${this.title}` + `Author:${this.author}` + `Pages:${this.pages}` + `Read:${this.read}`
  return bookInfo
 }
 let TheAlchimst = new Book ("The Alchemist","Paul something",600,false)


function addBookToLibrary(array) {
 container.innerHTML = ''
  myLibrary.push(array)
  myLibrary.forEach((book)=> {
  
    //book cover
    let bookCard = document.createElement('div')
    bookCard.className = "book-card"

    let bookTitle = document.createElement('div')
    bookTitle.className = 'book-title'
    bookTitle.innerHTML = book.title
    

    let bookAuthor = document.createElement('div')
    bookAuthor.className = 'book-author'
    bookAuthor.innerHTML = `By ${book.author}`

    let bookPages = document.createElement('div')
    bookPages.className = "book-pages"
    bookPages.innerHTML = `${book.pages} pages`

    let bookRead = document.createElement('div')
    bookRead.className = 'book-read'
    bookRead.innerHTML = book.read



   let removeButton = document.createElement("button")
   removeButton.className = "remove-button"
   removeButton.innerHTML = "Remove"
   removeButton.setAttribute('data-id',myLibrary.indexOf(book))
   removeButton.addEventListener('click',()=>{
    container.removeChild(bookCard)
    myLibrary.splice(myLibrary.indexOf(book),1)
   })
     
   let toggleButton = document.createElement("button")
   toggleButton.className = "toggle-button"
   toggleButton.innerHTML = "Change book status"
   toggleButton.addEventListener('click',()=>{
    book.toggle()
    if(bookRead.innerHTML === "Finished"){
      bookRead.innerHTML = "Unfinished"
    }else if(bookRead.innerHTML === "Unfinished"){
      bookRead.innerHTML = "Finished"
    }
   })
    //try to make it look like
    let bookCSS = document.createElement('div')
    bookCSS.className = "pages"
    
    
   
     //
    
     
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(bookRead)
    bookCard.appendChild(toggleButton)
    bookCard.appendChild(removeButton)
    bookCard.appendChild(bookCSS)
    
    container.appendChild(bookCard)
   
   
  })
}



//ADD NEW BOOK
let formContainer = document.querySelector('#form-container')
let addBookButton = document.querySelector('#new-book')

addBookButton.addEventListener('click',()=> {
  formContainer.style.display = "block"
})





let formTitle = document.querySelector("#form-title")
let formAuthor = document.querySelector("#form-author")
let formPages = document.querySelector('#form-number')
let formRead = document.querySelector("#form-checkbox")

let form = document.querySelector("#form")

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(formRead.checked){
    formRead.value = "Finished"
  }else {
    formRead.value = "Unfinished"
  }
  formContainer.style.display = "none"
  addBookToLibrary(new Book(formTitle.value,formAuthor.value,formPages.value,formRead.value))
 
  formTitle.value = ''
  formAuthor.value = ''
  formPages.value = ''
  formRead.value = ''
  formRead.checked = ''

})






