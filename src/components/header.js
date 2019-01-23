import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from '../components/menu'
import './g-styles.scss';
import 'font-awesome/css/font-awesome.min.css';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div>
      <h1><Link to="/">John Durso</Link></h1>
      <h2>Front-End Web Developer</h2>
      <h3>Detroit, Michigan</h3>
    </div>
    <div>
      <div className="socialShare">
        <div><a href="https://twitter.com/hivemindjohn/" target="_blank"><i className="fa fa-2x fa-twitter"></i></a></div>
        <div><a href="https://linkedin.com/in/johnkyrondurso/"><i className="fa fa-2x fa-linkedin"></i></a></div>
        <div><a href="/contact"><i className="fa fa-2x fa-envelope"></i></a></div>
      </div>
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