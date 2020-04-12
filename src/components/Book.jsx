import React from 'react';
import Page from './Page.jsx'
import book from '../data/books/TheTaleOfPeterRabbit.json'

function Book(props) {

  const titleImgPath = `./img/${book.image}title.png`

  const [page, setPage] = React.useState(0)

  const getPage = () => {
    if (true){
      return (
        <div className="column">
          <h2>{book.title}</h2>
          <h4>By {book.author}</h4>
          <img src={titleImgPath} alt={props.title}/>
          {page}
        </div>
      )
    }
    return <Page page={page}/>
  }

  const prevPage = () => {
    if (page !== 0) { setPage(page-1) }

  }

  const nextPage = () => {
    if (page <= book.text.length) { setPage(page+1) }
  }

  return (
    <div className="columns book">
      <div
        className="column"
        onClick={() => prevPage()}
      />
      { getPage() }
      <div
        className="column"
        onClick={() => nextPage()}
      />
    </div>
  )
}

export default Book;