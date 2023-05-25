import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
    <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
      <div className='col mb-3'>
        <a>
          <img src='img/fl_b.jpg' className='bi me-2' width={100} height={100} >

          </img>
        </a>
        <p>A&B-надежный друг</p>

        </div>
        <div className='col mb-3'>

        </div>
        <div className='col mb-4'>
          <h5>Колонка 1</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>надпись</a>
            </li>
          </ul>
        </div>
        <div className='col mb-4'>
          <h5>Колонка 2</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>надпись</a>
            </li>
          </ul>
        </div>

      

    </footer>
    </div>
  )
}

export default Footer
