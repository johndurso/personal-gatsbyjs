import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";


import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog - Choosing between Flexbox or Grid" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><AniLink cover className="backto" to="/blog" bg="#c4af9c">Back to blog</AniLink></p>
                <h3>Choosing between Flexbox or Grid...</h3>
                <h4>December 20, 2018</h4>
                <p>It's almost the new year and I decided it was time for me to dive into the world of native responsive grids
                in CSS. A designer/developer has a choice to make &mdash; Grid or Flexbox. The two are very similar, so you can't 
                really go wrong with either.</p>
                <p style={{fontWeight: `bold`,}}>For my site redesign, I went with <em>CSS Grid</em>.</p>
                <p>I found the syntax to be just a little easier to follow than flexbox's. However, both 
                options have the reorder feature, which is a huge perk for mobile design. No more creating 
                two entirely different blocks of content to order them properly, and no more messy div classes.</p>
                <p>Although I chose Grid for my <em>personal</em> website, the company I work for is using Flexbox 
                inside Adobe Experience Manager, so I'm fortunate enough to work with both Grid and Flexbox.</p>
                <p><a className="button readMore" href="https://www.w3schools.com/csS/css3_flexbox.asp" target="_blank">Flexbox docs</a> &nbsp; <a className="button readMore" href="https://www.w3schools.com/csS/css_grid.asp" target="_blank">Grid docs</a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog