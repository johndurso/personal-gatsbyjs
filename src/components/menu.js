import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Menu = () => {
  return (
    <div class="navigation">
      <AniLink cover to="/" bg="#36405f">Home</AniLink> <AniLink cover to="/about/" bg="#36405f">About</AniLink> <AniLink cover to="/contact/" bg="#36405f">Contact</AniLink>
    </div>
  )
}

export default Menu