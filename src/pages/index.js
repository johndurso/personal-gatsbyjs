import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/layout'
import SEO from '../components/seo'

import developer from '../images/developer.svg';
import bug from '../images/bug.svg';
import monitor from '../images/monitor.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div className="grid-container homePage">
      <div style={{textAlign: `center`,}} className="reveal">
        <img src={developer} className="reveal" />
      </div>
      <div className="reveal">
        <h2>Experienced web design and development</h2>
        <p>I'm a designer and developer who focuses on building high quality, fully optimized, responsive websites for any business, 
        individual, or non-profit.</p>
      </div>
      <div className="reveal">
        <p>Today, if your website isn't built to handle every single style, model, and size device, you're missing out on over half of all traffic on the web. 
        A responsive website that loads quickly on all devices is a <strong>must</strong> in 2019. You'll lose up to 40% of site visitors for 
        every second of time they wait for your content to load (after 4 seconds). Don't miss out on potential customers!</p>
      </div>
      <div>
        <img src={bug} alt="Web Design and Development maintenance" className="reveal" /> <br />
        <img className="mobileHide" src={monitor} alt="Web Design and Development services" className="reveal" />
      </div>
      <div className="reveal">
        <h2>Services</h2>
        <ul>
          <li><strong>Web Design/Development</strong><br />
              Designing and buidling a website that meets your needs.</li>
          <li><strong>SEO/SEM Optimization</strong><br />
              Ensuring you're utilizing the best content in your site to produce strong search engine ranking results.</li>
          <li><strong>General Website Maintenance</strong><br />
              Organizing code, eliminating redundant or unnecessary characters, and minimizing file sizes to promote future under-the-hood accessibility.</li>
          <li><strong>Website Optimization</strong><br />
              Decreasing load time, increasing responsiveness, and generally optimizing site performance.</li>
              <li><strong>SSL Authentication</strong><br />
              Enabling security compatibility with all browsers.<br />
              <sup><strong>* <span style={{ color: `#FF7D7D`,}}>Required</span> for Google Chrome, Mozilla Firefox, and Safari beginning in 2019.</strong></sup></li>
        </ul>
      </div>
      <div className="reveal" style={{
        background: `#49516e`,
        padding: `15px`,
        display: `grid`,
      }}>
        <div style={{
          gridColumn: `1 / span 3`,
          gridRow: `1`,
        }}>
          <h3 style={{ fontSize: `2em`, }}>Recent posts</h3>
        </div>
          <div style={{
            padding: `10px`,
            gridColumn: `1 / span 1`,
            gridRow: `2`,
          }}>
            <h6 style={{ margin: `0`, color: `#c4af9c`,}}>January 21, 2019</h6>
            <h4 style={{ margin: `10px 0`,}}>What I've been listening to...</h4>
            <p style={{fontSize: `0.9em`, lineHeight: `20px`,}}>Now that I've been back in my element with coding, successfully dedicating about 2-3 hours per day...</p>
            <p><AniLink cover className="readMore" to="/what-ive-been-listening-to" bg="#c4af9c">Read post</AniLink></p>
          </div>
          <div style={{
            padding: `10px`,
            gridColumn: `2 / span 1`,
            gridRow: `2`,
          }}>
            <h6 style={{ margin: `0`, color: `#c4af9c`,}}>January 11, 2019</h6>
            <h4 style={{ margin: `10px 0`,}}>Trying out GatsbyJS...</h4>
            <p style={{fontSize: `0.9em`, lineHeight: `20px`,}}>My New Year's Resolution was to <strong>code more</strong>. Most of my time in 2018 was spent...</p>
            <p><AniLink cover className="readMore" to="/trying-out-gatsbyjs" bg="#c4af9c">Read post</AniLink></p>
          </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

