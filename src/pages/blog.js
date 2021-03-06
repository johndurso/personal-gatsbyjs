import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/layout'
import SEO from '../components/seo'

import typewriter from '../images/typewriter.svg';


const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="posts">
        <div>
            <h2>Blog about web development, music, and whatever else</h2>
        </div>
        <div>
        	<ul>
                <li>
                    <h6>February 7, 2019</h6>
                    <h3>Use a preprocessor and don't look back...</h3>
                    <p>Back in 2014 while I was at my first design job ever, a coworker of mine recommended I get involved in SASS/SCSS 
                    as soon as possible. That advice didn't really resonate with me until I started used Ruby on Rails, which pretty much 
                    requires you to use a preprocessor. After I forced myself...</p>
                    <p><AniLink cover className="button readMore" to="/use-a-preprocessor-and-dont-look-back/" bg="#c4af9c">Read more...</AniLink></p>
                </li>

        		<li>
        		    <h6>January 21, 2019</h6>
        			<h3>What I've been listening to...</h3>
        			<p>Now that I've been back in my element with coding, successfully dedicating about 2-3 hours per day designing my 
                    new site (using Gatsby and React), I figured I'd give a look at what I listen to when I'm sitting at my desk 
                    for hours at a time!</p>
        			<p><AniLink cover className="button readMore" to="/what-ive-been-listening-to" bg="#c4af9c">Read more...</AniLink></p>
        		</li>

        		<li>
        		    <h6>January 11, 2019</h6>
        			<h3>Trying out GatsbyJS...</h3>
        			<p>My New Year's Resolution was to <strong>code more</strong>. Most of my time in 2018 was spent on regular work 
                    which can get exhausting and burn you out! So now that I'm a remote worker, I've vowed to dedicate more time to 
                    learning new code-related things. In walks in, GatsbyJS and React!</p>
        			<p><AniLink cover className="button readMore" to="/trying-out-gatsbyjs" bg="#c4af9c">Read more...</AniLink></p>
        		</li>

        		<li>
        			<h6>December 20, 2018</h6>
        			<h3>Choosing between Flexbox or Grid...</h3>
        			<p>It's almost the new year and I decided it was time for me to dive into the world of native responsive grids
                    in CSS. A designer/developer has a choice to make &mdash; Grid or Flexbox. The two are very similar, so you can't 
                    really go wrong with either.</p>
        			<p><AniLink cover className="button readMore" to="/choosing-between-flexbox-or-grid" bg="#c4af9c">Read more...</AniLink></p>
        		</li>

        		<li>
        			<h6>October 14, 2018</h6>
        			<h3>New site for CHR Commnunications...</h3>
        			<p>I was luckily enough to work directly with CHR's founders, Kathy Hourigan and Chris Colcer, when designing and coding their new site!</p>
        			<p><AniLink cover className="button readMore" to="/new-site-for-chr-communications/" bg="#c4af9c">Read more...</AniLink></p>
        		</li>
        	</ul>
        </div>
    </div>
  </Layout>
)

export default Blog