import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Something great is being built...</h1>

    <div className="grid-container">
      <div>
        <h2>Modern web tech without the headache</h2>
        <p>Enjoy the power of the latest web technologies – React.js , Webpack , modern JavaScript and CSS and more — all set up and waiting for you to start building.</p>
      </div>
      <div>
        <h2>Bring your own data</h2>
        <p>Gatsby’s rich data plugin ecosystem lets you build sites with the data you want — from one or many sources: Pull data from headless CMSs, SaaS services, APIs, databases, your file system, and more directly into your pages using GraphQL .</p>
      </div>
      <div>
        <h2>Scale the entire internet</h2>
        <p>Gatsby.js is Internet Scale. Forget complicated deploys with databases and servers and their expensive, time-consuming setup costs, maintenance, and scaling fears. Gatsby.js builds your site as “static” files which can be deployed easily on dozens of services.</p>
      </div>
    </div>
    <div>
      <Link className="button primary" to="/">Learn more</Link>
    </div>
  </Layout>
)

export default IndexPage
