import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@material-ui/core/Container'

const Navigation = ({ loggedIn }) => {
  return (
    <Container>
      <nav className='navbar'>
      <h1>My Weather App</h1>
        <div className='links'>
          <Link to='/'>Log in</Link>
          <Link to='/registration'>Register</Link>
          <Link to='/forecast'>Forecast</Link>
        </div>
      </nav>
    </Container>
  )
}

export default Navigation
