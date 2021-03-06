import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                { books.map(book => (
                    <BookDetails book={book} key={book.id}/>
                ))}
            </ul>
            <span className="instructions">-Click a book when you finish it.</span>
        </div>
    ) : (
        <div className="empty">No books to be found...</div>
    )
}

export default BookList