import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import contact from '../images/contact.svg';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contactForm">
        <div style={{textAlign: `center`,}}>
            <img style={{maxWidth: `350px`, marginTop: `20px`,}} src={contact} />
        </div>
        <h2>Contact me</h2>
        <p style={{fontWeight: `bold`,}}>Whether you want to contact me about building you a site, collaborate, or you want to learn more about 
        web design and/or development, don't hesitate to drop me a message!</p>
        <form name="contact" method="post" data-netlify="true">
          <div className="formName">
            <label>Your Name:<br /><input type="text" name="name" /></label>   
          </div>
          <div className="formEmail">
            <label>Your Email: <br /><input type="email" name="email" /></label>
          </div>
          <div className="formMessage">
            <label>Message: <br /><textarea name="message"></textarea></label>
          </div>
          <div className="formSubmit">
            <button>Send</button>
          </div>
        </form>
    </div>
  </Layout>
)

export default Contact
