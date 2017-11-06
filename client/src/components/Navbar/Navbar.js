import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4'>
    <Link className='navbar-brand' to='/'>NYT-React</Link>
    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbarNav'>
      <div className='navbar-nav ml-auto'>
        <Link to='/search'
          className={
            window.location.pathname === '/' ||
            window.location.pathname === '/search'
              ? 'nav-item nav-link active'
              : 'nav-item nav-link'
          }
        >Search</Link>
        <Link to='/saved'
          className={
            window.location.pathname === '/saved'
              ? 'nav-item nav-link active'
              : 'nav-item nav-link'
        }>Saved Articles</Link>
      </div>
    </div>
  </nav>

export default Navbar
