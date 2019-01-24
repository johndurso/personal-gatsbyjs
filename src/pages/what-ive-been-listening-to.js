import React from 'react'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog - What I've been listening to" />
    <div className="posts postBody">
        <ul>
            <li>
                <p><AniLink cover className="backto" to="/blog" bg="#c4af9c">Back to blog</AniLink></p>
                <h3>What I've been listening to...</h3>
                <h4>January 21, 2019</h4>
                <p>Now that I've been back in my element with coding, successfully dedicating about 2-3 hours per day designing my new site (using Gatsby and React), I figured I'd give a look at what I listen to when I'm sitting at my desk for hours at a time!</p>
                <h4>Parquet Courts</h4>
                <p>I first heard of these four guys from Texas when their song <em>Almost Had To Start A Fight / In And Out Of Patience</em> started while I was playing NHL 19. 
                Immediately Shazamed the song and have had their album <strong>Wide Awake!</strong> on rotation since. I've since gone a little deeper into their discography and 
                discoverd a love for their 2016 album <strong>Human Performance</strong> as well.</p>
                <p><a className="button readMore" href="https://www.youtube.com/watch?v=l-Bka7yNyKA" target="_blank">Check out <em>Parquet Courts</em></a></p>
                <h4>The Beaches</h4>
                <p>Bands like <em>The Beaches</em> don't come very often. They're full of energy, talent, attitude, and... more talent. First heard their song <em>Gold</em> and 
                I found myself obsessed with their album <strong>Late Show</strong>. I saw these ladies back in November 2018 and they were incredible. Even more talented in person.</p>
                <p><a className="button readMore" href="https://www.youtube.com/watch?v=O8RgiH8rfOY" target="_blank">Check out <em>The Beaches</em></a></p>
            </li>
        </ul>
    </div>
  </Layout>
)

export default Blog