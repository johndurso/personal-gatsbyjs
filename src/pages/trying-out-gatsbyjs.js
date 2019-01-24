import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/layout'
import SEO from '../components/seo'

import reactSvg from '../images/react.svg';

const Blog = () => (
  <Layout>
    <SEO title="Blog - Choosing between Flexbox or Grid" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><AniLink cover className="backto" to="/blog" bg="#c4af9c">Back to blog</AniLink></p>
                <h3>Trying out GatsbyJS...</h3>
                <h4>January 11, 2019</h4>
                <p>My New Year's Resolution was to code more. Most of my time in 2018 was spent on regular work which can get exhausting and burn you out! So now that I'm a remote worker, 
                I've vowed to dedicate more time to learning new code-related things. In walks in, GatsbyJS and React!</p>
                <p>GatsbyJS is a <em>static progressive web application generator</em>. Out of the box, it uses React, modern Javascript, and Webpack to manage 
                content, components, and data. Since being released in 2017, their plugins library has been filled with hundreds submissions from contributors across the world. Plugins that allow to to integrate things like Twitter, Font Awesome, Bootstrap, and several CMSs (including Wordpress).</p>
                <p>Gatsby's main language/framework is React. React is currently the most popular JavaScript framework on the market, so it'd be foolish for me to 
                avoid learning it any longer. Luckily, my company made the massive transition from <em>WordPress</em> to <em>Adobe Experience 
                Manager</em>, and AEM uses React for their components.</p>
                <p><img style={{marginTop: `50px`,}} src={reactSvg} /></p>
                <p></p>
                <p><a className="button readMore" href="https://www.gatsbyjs.org/" target="_blank">Browse the GatsbyJS docs</a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog