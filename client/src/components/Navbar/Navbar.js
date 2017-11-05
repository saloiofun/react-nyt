import React from 'react'

const Navbar = () =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4'>
    <a className='navbar-brand' href='/'>NYT-React</a>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbarNav'>
      <div className='navbar-nav ml-auto'>
        <a className='nav-item nav-link active' href='/search'>Search</a>
        <a className='nav-item nav-link' href='/saved'>Saved</a>
      </div>
    </div>
  </nav>

export default Navbar
