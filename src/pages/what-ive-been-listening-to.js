import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog - Choosing between Flexbox or Grid" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><Link className="backto" to="/blog">Back to blog</Link></p>
                <h3>What I've been listening to...</h3>
                <h4>January 21, 2019</h4>
                <p>Now that I've been back in my element with coding, successfully dedicating about 2-3 hours per day designing my new site (using Gatsby and React), I figured I'd give a look at what I listen to when I'm sitting at my desk for hours at a time!</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p><a className="button readMore" href="/">Check out <em>Parquet Courts</em></a> &nbsp; <a className="button readMore" href="/">Check out <em>The Beaches</em></a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog