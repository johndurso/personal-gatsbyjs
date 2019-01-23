import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import process from '../images/process.svg';

const About = () => (
  <Layout>
    <SEO title="About" />
    <div style={{textAlign: `center`,}}>
    	<img style={{maxWidth: `350px`, width: `100%`,}}src={process} />
    </div>
    <h2>Welcome to the about page</h2>
    <p>Something great will be here soon!</p>
    <Link className="button primary" to="/">Click here</Link>
  </Layout>
)

export default About
