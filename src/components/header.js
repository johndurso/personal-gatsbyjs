import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from '../components/menu'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#36405f`,
      padding: `30px 0`,
    }}
  >
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
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
