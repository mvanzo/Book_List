// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI Class : Handle UI tasks
class UI {
    static displayBooks() {
        // pretend like this is something held in local storage
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3212332'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '3219482'
            }
        ]
        const books = StoredBooks

        books.forEach((book)=> UI.addBookToList(book))

    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `

        list.appendChild(row)
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }

    static clearFields() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

}

// Store Class : Handles Storage

// Event : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

// Event : add a book
document.querySelector('#book-form').addEventListener('submit', (e)=> {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    // Validate
    if (title === '' || author === '' || isbn === '') {
        alert('Please Fill Out All Fields Before Submitting')
    } else {
        // instatiate a book
        const book = new Book(title, author, isbn)
        // console.log(book)
    
        // add book to UI
        UI.addBookToList(book)
    
        // Clear Fields
        UI.clearFields()
    }

})

// Event : remove a book
document.querySelector('#book-list').addEventListener('click', e=> {
    e.preventDefault()
    UI.deleteBook(e.target)
})