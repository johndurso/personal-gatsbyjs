import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from '../components/menu'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import './g-styles.scss';
import 'font-awesome/css/font-awesome.min.css';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div>
      <h1><AniLink cover to="/" bg="#c4af9c">John Durso</AniLink></h1>
      <h2>Front-End Web Developer</h2>
      <h3>Detroit, Michigan</h3>
    </div>
    <div>
      <div className="socialShare">
        <div><a href="https://twitter.com/johndursodev/" target="_blank"><i className="fa fa-2x fa-twitter"></i></a></div>
        <div><a href="https://linkedin.com/in/johnkyrondurso/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a></div>
        <div><AniLink cover to="/contact" bg="#c4af9c"><i className="fa fa-2x fa-envelope"></i></AniLink></div>
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