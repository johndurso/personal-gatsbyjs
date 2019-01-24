import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import reactSvg from '../images/react.svg';

const Blog = () => (
  <Layout>
    <SEO title="Blog - Choosing between Flexbox or Grid" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><Link className="backto" to="/blog">Back to blog</Link></p>
                <h3>Trying out GatsbyJS...</h3>
                <h4>January 11, 2019</h4>
                <p>My New Year's Resolution was to code more. Most of my time in 2018 was spent on regular work which can get exhausting and burn you out! So now that I'm a remote worker, 
                I've vowed to dedicate more time to learning new code-related things. In walks in, GatsbyJS and React!</p>
                <p><img style={{marginTop: `50px`,}} src={reactSvg} /></p>
                <p></p>
                <p><a className="button readMore" href="https://www.gatsbyjs.org/" target="_blank">Browse the GatsbyJS docs</a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog