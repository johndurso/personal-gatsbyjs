import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Something great is being built...</h1>
    <p>...come back soon!</p>
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Email: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
    <div>
      <Link className="button primary" to="/">Learn more</Link>
    </div>
  </Layout>
)

export default IndexPage
