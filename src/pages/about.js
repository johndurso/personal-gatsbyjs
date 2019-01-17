import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Welcome to the about page</h1>
    <p>Something great will be here soon!</p>
    <Link className="button primary" to="/">Click here</Link>
  </Layout>
)

export default About
