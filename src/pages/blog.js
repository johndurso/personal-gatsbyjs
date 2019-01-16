import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Latest posts</h1>
  
    <div>
      <Link className="button primary" to="/">Learn more</Link>
    </div>
  </Layout>
)

// export const pageQuery = graphql`
// 	query BlogIndexQuery {
// 	  allMarkdownRemark {
// 	    edges {
// 	      node {
// 	      	id {
// 		        frontmatter {
// 		          path
// 		          title
// 		          date
// 		          author
// 		        }
// 		    }
// 	        excerpt
// 	      }
// 	    }
// 	  }
// 	}
// `

export default BlogPage