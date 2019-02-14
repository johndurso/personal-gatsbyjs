import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import './menu.scss';
import open from '../images/menuOpen.svg';
import close from '../images/menuClose.svg';


const Menu = () => {
  return (
    <div>
      <input id="main-menu-checkbox" type="checkbox" />

      <div className="navigation">
        <label for="main-menu-checkbox" className="menu-toggle">
          <span className="sr-only">Open main menu</span>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
        </label>
        
        <div id="main-menu" role="navigation" className="main-menu" ariaExpanded="false" ariaLabel="Main menu">
          <label for="main-menu-checkbox" class="menu-close">
            <span className="sr-only">Close main menu</span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
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