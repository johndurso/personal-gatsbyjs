import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import './menu.scss';


const Menu = () => {
  return (
    <div>
      <input id="main-menu-checkbox" type="checkbox" />

      <div className="navigation">
        <label for="main-menu-checkbox" className="menu-toggle">
          <span className="sr-only">Open main menu</span>
          <span className="fa fa-bars" ariaHidden="true"></span>
        </label>
        
        <div id="main-menu" role="navigation" className="main-menu" ariaExpanded="false" ariaLabel="Main menu">
          <label for="main-menu-checkbox" class="menu-close">
            <span className="sr-only">Close main menu</span>
            <span className="fa fa-close" ariaHidden="true"></span>
          </label>
          <ul>
            <li><AniLink cover to="/" bg="#c4af9c">Home</AniLink></li>
            <li><AniLink cover to="/about" bg="#c4af9c">About</AniLink></li>
            <li><AniLink cover to="/blog" bg="#c4af9c">Blog</AniLink></li>
            <li><AniLink cover to="/contact" bg="#c4af9c">Contact</AniLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu