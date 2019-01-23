import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from '../components/menu'
import './g-styles.scss';


const Header = ({ siteTitle }) => (
  <div className="header">
    <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{
        marginBottom: `5px`,
        fontWeight: `700`,
      }}
      ><Link to="/">John Durso</Link></h1>
      <h2 style={{
        marginBottom: `0px`,
        padding: `0 10px`,
        fontWeight: `300`,
        fontSize: `1.2em`,
      }}
      >Front-End Web Developer</h2>
      <h3 style={{
        marginBottom: `5px`,
        padding: `0 10px`,
        fontWeight: `100`,
        fontSize: `1em`,
      }}
      >Detroit, Michigan</h3>
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


function menuTrigger(){

}