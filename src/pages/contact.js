import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import contact from '../images/contact.svg';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{textAlign: `center`,}}>
        <img style={{maxWidth: `350px`,}} src={contact} />
    </div>
    <h2>Contact me</h2>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default Contact
