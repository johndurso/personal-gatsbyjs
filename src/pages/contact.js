import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact me</h1>
    <form
    	name="contact"
    	method="post"
    	data-netlify="true"
    	data-netlify-honeypot="bot-field"
    >

    <input name="name" placeholder="Your name" type="text" /> 
    <input name="email" placeholder="email@domain.com" type="text" />
    <textarea name="message" />
    <button>Submit</button>
    </form>
  </Layout>
)

export default Contact
