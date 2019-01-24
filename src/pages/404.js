import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import warning from '../images/warning.svg';

const NotFoundPage = () => (
  <Layout>
  	<div className="notFound">
	    <SEO title="404: Not found" />
	    <div>
		    <h1>Oops!</h1>
		    <p>That page doesn't exist! Please navigate back to the home page and try again.</p>
		    <Link className="button primary" to="/">Back home</Link>
		</div>
		<div>
		    <img src={warning} alt="404 error" />
		</div>
	</div>
  </Layout>
)

export default NotFoundPage
