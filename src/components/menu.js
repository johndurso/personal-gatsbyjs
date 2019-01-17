import { Link } from 'gatsby'
import React from 'react'

const Menu = () => {
  return (
    <div class="navigation">
      <Link to="/">Home</Link> <Link to="/about/">About</Link> <Link to="/contact/">Contact</Link>
    </div>
  )
}

export default Menu