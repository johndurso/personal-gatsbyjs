import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import typewriter from '../images/typewriter.svg';


const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="posts">
        <div style={{textAlign: `center`,}}>
            <img style={{maxWidth: `350px`, width: `100%`,}} src={typewriter} />
        </div>
    	<ul>
    		<li>
    		    <h6>January 21, 2019</h6>
    			<h3>What I've been listening to...</h3>
    			<p>Now that I've been back in my element with coding, successfully dedicating about 2-3 hours per day designing my 
                new site (using Gatsby and React), I figured I'd give a look at what I listen to when I'm sitting at my desk 
                for hours at a time!</p>
    			<p><Link className="button readMore" to="/what-ive-been-listening-to">Read more...</Link></p>
    		</li>

    		<li>
    		    <h6>January 11, 2019</h6>
    			<h3>Trying out GatsbyJS...</h3>
    			<p>My New Year's Resolution was to <strong>code more</strong>. Most of my time in 2018 was spent on regular work 
                which can get exhausting and burn you out! So now that I'm a remote worker, I've vowed to dedicate more time to 
                learning new code-related things. In walks in, GatsbyJS and React!</p>
    			<p><Link className="button readMore" to="/trying-out-gatsbyjs">Read more...</Link></p>
    		</li>

    		<li>
    			<h6>December 20, 2018</h6>
    			<h3>Choosing between Flexbox or Grid...</h3>
    			<p>It's almost the new year and I decided it was time for me to dive into the world of native responsive grids
                in CSS. A designer/developer has a choice to make &mdash; Grid or Flexbox. The two are very similar, so you can't 
                really go wrong with either.</p>
    			<p><Link className="button readMore" to="/choosing-between-flexbox-or-grid">Read more...</Link></p>
    		</li>

    		<li>
    			<h6>October 14, 2018</h6>
    			<h3>New site for CHR Commnunications...</h3>
    			<p>I was luckily enough to work directly with CHR's founders, Kathy Hourigan and Chris Colcer, when designing and coding their new site!</p>
    			<p><Link className="button readMore" to="/new-site-for-chr-communications/">Read more...</Link></p>
    		</li>
    	</ul>
    </div>
  </Layout>
)

export default Blog