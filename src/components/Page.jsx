import React from 'react';

function Page(props) {
  const page = props.page
  const book = props.book

  const imageNum = page + 1 > 9 ? page + 1: "0" + (page +1)
  const imagePath = `./img/${book.image}${imageNum}.png`

  return (
    <div
      className="columns is-vcentered"
    >
      <div
        className="column"
      >
        <img src={imagePath} alt=""/>
        {page}
      </div>
      <div
        className="column"
      >
        <p>{book.text[page -1]}</p>
      </div>
    </div>
  )
}
export default Page;