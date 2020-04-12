import React from 'react';
import book from '../data/books/TheTaleOfPeterRabbit.json'

function Book(props) {

  const titleImgPath = `./img/${book.image}title.png`

  return (
    <div className="columns book">
      <div className="column"/>
      <div className="column">
        <h2>{book.title}</h2>
        <h4>By {book.author}</h4>
        <img src={titleImgPath} alt={props.title}/>
      </div>
      <div className="column"/>
    </div>
  )
}

export default Book;