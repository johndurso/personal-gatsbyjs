import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import contact from '../images/contact.svg';

const Thanks = () => (
  <Layout>
    <SEO title="Contact" />
    <div>
        <div style={{ textAlign: `center`,}}>
            <h2>Thank you for reaching out!</h2>
            <p style={{fontWeight: `bold`,}}>I'll be in touch with you soon!</p>
        </div>
        <div style={{textAlign: `center`,}}>
            <img style={{maxWidth: `300px`, marginTop: `20px`,}} src={contact} alt="Contact me for Web Design needs" />
        </div>
    </div>
  </Layout>
)

export default Thanks