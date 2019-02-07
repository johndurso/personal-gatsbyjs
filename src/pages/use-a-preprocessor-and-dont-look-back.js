import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";


import Layout from '../components/layout'
import SEO from '../components/seo'

import varInUse from '../images/variables.png';
import mix from '../images/mixins.png';
import mixInUse from '../images/mixins-inuse.png';
import nesting from '../images/nesting.png';
import noNesting from '../images/without-nesting.png';


const Blog = () => (
  <Layout>
    <SEO title="Blog - Use a preprocessor and don't look back" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><AniLink cover className="backto" to="/blog" bg="#c4af9c">Back to blog</AniLink></p>
                <h3>Use a preprocessor and don't look back...</h3>
                <h4>February 7, 2018</h4>
                <p>Back in 2014 while I was at my first design job ever, a coworker of mine recommended I get involved in SASS/SCSS 
                as soon as possible. That advice didn't really resonate with me until I started used Ruby on Rails, which pretty much 
                requires you to use a preprocessor. After I forced myself to dive head first into SCSS, I noticed that it's <em>really 
                not much different than Vanilla CSS</em>.</p>
                <p>Learning new syntax instead of an entirely new language is something that made SCSS way easier than I anticipated. There 
                are several aspects of SCSS that shaves so much time off of basic, everyday style coding.</p>
                <p>My favorite advantages of SCSS over CSS:</p>
                <ul>
                	<li style={{padding: `0 30px`, borderLeft: `3px #c4af9c solid`, borderRadius: `0`,}}>
	                	<h4>Variables</h4>
	                	<p>A <em>must-use</em> if you're coding anything that uses a certain color more than once, especially in large-scale websites.</p>
                		<h6>In use:</h6>
                		<img src={varInUse} alt="SCSS Variables" style={{maxWidth: `300px`,}} />
                	</li>
                	<li style={{padding: `0 30px`, borderLeft: `3px #c4af9c solid`, borderRadius: `0`,}}>
                	<h4>Mixins</h4>
                		<p>Having the ability to use <strong>one line of code</strong> multiple times instead of three or four is what DRY (don't repeat yourself) code is all about.</p>
                		<h6>Mixin syntax:</h6>
                		<img src={mix} alt="SCSS Mixins" style={{maxWidth: `250px`,}} />
                		<h6>In use:</h6>
                		<img src={mixInUse} alt="SCSS Mixins in use" style={{maxWidth: `300px`,}} />
                	</li>
                	<li style={{padding: `0 30px`, borderLeft: `3px #c4af9c solid`, borderRadius: `0`,}}>
                		<h4>Nesting</h4>
                		<p>A time saver to say the least! Easier code to read, and manage.</p>
                		<h6>In use:</h6>
                		<img src={nesting} alt="SCSS Nesting in use" style={{maxWidth: `200px`,}} />
                		<h6>Not in use:</h6>
                		<img src={noNesting} alt="SCSS Nesting NOT in use" style={{maxWidth: `200px`,}} />
                	</li>
                </ul>
                <p>These are just basic examples of how moving on from basic vanilla CSS to SASS/SCSS (or another CSS preprocessor langugage like LESS or Stylus) can 
                benefit your day-to-day coding process. The time you save once you get comfortable with SCSS is worth any of the hiccups you deal with when learning it!</p>
                <p>If you're interested in getting started, check out <a href="https://www.youtube.com/watch?v=wz3kElLbEHE" target="_blank">Derek Banas's SCSS tutorial</a> or check out the sass-lang docs.</p>
                <p><a className="button readMore" href="https://sass-lang.com" target="_blank">SASS/SCSS docs</a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog