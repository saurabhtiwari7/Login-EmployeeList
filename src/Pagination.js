import React from 'react'

function Pagination({totalPosts, postsPerPage, paginate}) {

const pageNumbers = [];

for(let i = 0; i<= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i+1);
}
    
    return (
        <>
              <nav>
  <ul className="pagination">
  { pageNumbers.map(number => (
    <li key={number} id={number} className="page-item">
    <a onClick={() => paginate(number)} href='!#' className="page-link" >
    {number}
    </a>
    </li>
  ))
  }

 
  </ul>
</nav>
        </>
    )
}

export default Pagination
