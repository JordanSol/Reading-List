import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <li className="book-details" onClick={() => {
            setTimeout(() => dispatch({type: 'REMOVE_BOOK', id: book.id}), 100)
        }}>
            <div className="title-text">{book.title}</div>
            <div className="author-text">-{ book.author}</div>
        </li>
    )
}

export default BookDetails