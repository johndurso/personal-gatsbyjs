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
        		<li><AniLink cover to="/" bg="#36405f">Home</AniLink></li>
        		<li><AniLink cover to="/about" bg="#36405f">About</AniLink></li>
        		<li><AniLink cover to="/blog" bg="#36405f">Blog</AniLink></li>
        		<li><AniLink cover to="/contact" bg="#36405f">Contact</AniLink></li>
        	</ul>
        </div>
    </div>
  )
}

export default Menu