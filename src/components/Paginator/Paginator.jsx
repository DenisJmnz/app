import React from 'react';
import './Paginator.css'

const Paginator = ({currentPage, finalPage, next, prev }) => {

  return (
    <div className="divPaginator">
      <button onClick={(e) => prev()} >ANTERIOR</button>
      <p className="currentPage"> {currentPage} DE {finalPage}</p>
      <button disabled={currentPage === finalPage} onClick={(e) => next()}>SIGUIENTE</button>
    </div>
  )
}

export default Paginator