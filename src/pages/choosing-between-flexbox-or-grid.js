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
                <h3>Choosing between Flexbox or Grid...</h3>
                <h4>December 20, 2018</h4>
                <p>It's almost the new year and I decided it was time for me to dive into the world of native responsive grids
                in CSS. A designer/developer has a choice to make &mdash; Grid or Flexbox. The two are very similar, so you can't 
                really go wrong with either.</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p><a className="button readMore" href="https://www.w3schools.com/csS/css3_flexbox.asp" target="_blank">Flexbox docs</a> &nbsp; <a className="button readMore" href="https://www.w3schools.com/csS/css_grid.asp" target="_blank">Grid docs</a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog