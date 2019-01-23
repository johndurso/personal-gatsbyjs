import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="posts">
    	<ul>
    		<li>
    		    <h6>January 21, 2019</h6>
    			<h3>What I've been listening to...</h3>
    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    			Deleniti repudiandae, ratione similique incidunt aspernatur pariatur sed optio quod amet molestiae. 
    			Architecto ad error harum nisi voluptates. Tempora earum soluta culpa cupiditate rem, in laborum aliquid, 
    			inventore adipisci nulla libero optio!</p>
    			<p><Link className="button readMore" to="/">Read more...</Link></p>
    		</li>

    		<li>
    		    <h6>January 11, 2019</h6>
    			<h3>Trying out GatsbyJS...</h3>
    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    			Deleniti repudiandae, ratione similique incidunt aspernatur pariatur sed optio quod amet molestiae. 
    			Architecto ad error harum nisi voluptates. Tempora earum soluta culpa cupiditate rem, in laborum aliquid, 
    			inventore adipisci nulla libero optio!</p>
    			<p><Link className="button readMore" to="/">Read more...</Link></p>
    		</li>

    		<li>
    			<h6>December 20, 2018</h6>
    			<h3>Choosing between Flexbox or Grid...</h3>
    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    			Deleniti repudiandae, ratione similique incidunt aspernatur pariatur sed optio quod amet molestiae. 
    			Architecto ad error harum nisi voluptates. Tempora earum soluta culpa cupiditate rem, in laborum aliquid, 
    			inventore adipisci nulla libero optio!</p>
    			<p><Link className="button readMore" to="/">Read more...</Link></p>
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