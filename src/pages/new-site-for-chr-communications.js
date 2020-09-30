import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/layout'
import SEO from '../components/seo'

const newUpdate = {
    color: '',
    display: 'block',
    backgroundColor: '$sand',
    fontWeight: 'bold',
    fontSize: '1.2em',
    lineHeight: '1.5em',
    margin: '35px 0'
}

const disabled = {
    cursor: 'not-allowed',
    background: '#333',
    textDecoration: 'line-through',
    background: '$gray'
}

const Blog = () => (
  <Layout>
    <SEO title="Blog - New site for CHR Communications" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><AniLink cover className="backto" to="/blog" bg="#c4af9c">Back to blog</AniLink></p>
                <h3>New site for CHR Commnunications...</h3>                
                <h4>October 14, 2018</h4>
                <p className="newUpdate">After 25 years of dedicated service, the wonderful team at CHR Communications have decided to retire! As of June 2019, their website will not be available.</p>
                <p>I was luckily enough to work directly with CHR's founders, Kathy Hourigan and Chris Colcer, when designing and coding their new site!</p>
                <p>For decades, Kathy and Chris have had a successful business throughout Metro Detroit and Metro Charlotte. They've done this without having a website built
                within the last 10+ years. They decided it was time for an update!</p>
                <p>Their past site was built on the content management system <em>Wix</em>, which is fine for those who are just getting off the ground, but these ladies have been making
                a killing for a while. So they contacted me in hopes to get a site done quickly and efficiently.</p>
                <p>Chris provided the copy, and Kathy provided the assets! With all of the necessities to begin working on the site, we got to the drawing board! At first they had no clue
                what they wanted, so I designed and coded a few examples, and we ended up with a responsive single-page site. One page, all the info they need potential clients to know, and 
                contact information for the two of them.</p>
                <p>From start to finish, the entire process took just over a week! They're very happy with the finished product, and I can easily say they were some of my favorite 
                clients to work with.</p>
                <p><a className="button readMore" style={disabled}>Check out their site!</a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog
