import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getBooks } from '../../services/book_services'

function BookSection({booksList}) {
  console.warn(booksList);
  return (
    <div>
      <h1>
        {booksList.length>0? booksList[0].name : "No Books"}
      </h1>
    </div>
  )
}

export default BookSection