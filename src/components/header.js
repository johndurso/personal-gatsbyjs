import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#36405f`,
      padding: `30px 0`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{
            color: `#c4af9c`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="navigation">
    <Link to="/">Home</Link> 
    {` `}
    <Link to="/about/">About</Link>
    {` `}
    <Link to="/blog/">Blog</Link>
    {` `}
    <Link to="/contact/">Contact</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
