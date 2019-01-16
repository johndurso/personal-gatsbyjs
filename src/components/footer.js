import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: `#000`,
      padding: `30px 0`,
      marginBottom: `1.45rem`,
      color: `#fff`,
    }}
  >
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
          © {new Date().getFullYear()}, Built by <a href="https://twitter.com/hivemindjohn">@hivemindjohn</a> with <a href="https://www.gatsbyjs.org">GatsbyJS</a>
      </h1>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer