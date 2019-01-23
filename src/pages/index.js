import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import developer from '../images/developer.svg';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div className="grid-container">
      <div style={{textAlign: `center`,}}>
        <img style={{maxWidth: `200px`,}} src={developer} />
      </div>
      <div>
        <h2>The web developer you've been searching for!</h2>
        <p>Gatsby’s rich data plugin ecosystem lets you build sites with the data you want — from one or many sources: Pull data from headless CMSs, SaaS services, APIs, databases, your file system, and more directly into your pages using GraphQL.</p>
      </div>
      <div style={{
        background: `#36405f`,
        padding: `15px`,
      }}>
        <h3>Recent posts</h3>
          <div style={{
            padding: `10px`,
          }}>
            <h6 style={{ margin: `0`,}}>January 21, 2019</h6>
            <h4 style={{ margin: `5px 0`,}}>What I've been listening to...</h4>
            <p style={{fontSize: `0.9em`, lineHeight: `20px`,}}>Now that I've been back in my element with coding, successfully dedicating about 2-3 hours per day...</p>
            <p><a className="readMore" href="/what-ive-been-listening-to">Read post</a></p>
          </div>
          <div style={{
            padding: `10px`,
          }}>
            <h6 style={{ margin: `0`,}}>January 11, 2019</h6>
            <h4 style={{ margin: `5px 0`,}}>Trying out GatsbyJS...</h4>
            <p style={{fontSize: `0.9em`, lineHeight: `20px`,}}>My New Year's Resolution was to <strong>code more</strong>. Most of my time in 2018 was spent...</p>
            <p><a className="readMore" href="/trying-out-gatsbyjs">Read post</a></p>
          </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

