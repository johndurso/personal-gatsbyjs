import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import about from '../images/about.svg';
import process from '../images/process.svg';

const About = () => (
  <Layout>
  	<SEO title="About" />
  	<div className="grid-container aboutPage">
	    <div>
	    	<img style={{width: `100%`,}} src={about} />
	    </div>
	    <div>
		    <h2>About John</h2>
		    <p> I am a web designer and front-end web developer with just under 9 years of experience. I spent the early part of my career 
		    with two different small agencies, mainly managing Wordpress sites, building pages with basic HTML/CSS/PHP, along with social media 
		    management and Ruby on Rails development.</p>
		</div>
		<div>
			<h3>Where I'm at today</h3>
		    <p>I'm currently a <em>Web Designer and Front-End Web Developer</em> at <strong>Thomson Reuters</strong>, where I handle large-scale email campaigns, 
		    Wordpress development, and Adobe Experience Manager development. I chose this field because I'm fueled by the constant desire to learn. With the 
		    development world constantly evolving, I like to remain active in courses and reading material relating to all things web. My expertise and main interests 
		    lie in the foundation of the web: HTML, CSS, and Vanilla JavaScript.</p>
		</div>
		<div>
			<h3>Outside of coding</h3>
		    <p>In my free time, when I'm not in the working world, I find myself traveling, learning mixology, gaming , and woodworking.</p>
		    <p>I'm also an avid music fan! I've played the drums in two bands, and toured a little bit. I listen to anything from hardcore punk, to 
		    jazz, to '80s pop.</p>
		    <p>Last, but not least, I'm a <em>big</em> sports fan &mdash; football, baseball, hockey. I rep Detroit sports to a fault.</p>
		</div>
	</div>
  </Layout>
)

export default About
