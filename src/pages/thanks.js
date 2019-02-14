import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import contact from '../images/contact.svg';

const Thanks = () => (
  <Layout>
    <SEO title="Thank you!" />
    <div style={{marginTop: `40px`, }}>
        <div style={{ textAlign: `center`,}}>
            <h2>Thank you for reaching out!</h2>
            <p style={{fontWeight: `bold`,}}>In the meantime, follow me on <a className="exLink" href="https://twitter.com/johndursodev" target="_blank">Twitter</a> or connect with me on <a className="exLink" href="https://linkedin.com/in/johnkyrondurso/" target="_blank">LinkedIn</a>!</p>
        </div>
        <div style={{textAlign: `center`,}}>
            <img style={{maxWidth: `300px`, marginTop: `20px`,}} src={contact} alt="Contact me for Web Design needs" />
        </div>
    </div>
  </Layout>
)

export default Thanks