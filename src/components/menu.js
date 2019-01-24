import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Image from '../components/image'

import './menu.scss';


const Menu = () => {
  return (
    <div>
        <div class="upTop">
            <div id="menuTrigger">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="navigation"> 
        	<ul id="menuList">
        		<li><AniLink cover to="/" bg="#49516e">Home</AniLink></li>
        		<li><AniLink cover to="/about" bg="#49516e">About</AniLink></li>
        		<li><AniLink cover to="/blog" bg="#49516e">Blog</AniLink></li>
        		<li><AniLink cover to="/contact" bg="#49516e">Contact</AniLink></li>
        	</ul>
        </div>
    </div>
  )
}

export default Menu