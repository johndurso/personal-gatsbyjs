import { Link } from 'gatsby'
import React from 'react'
import './layout.scss'


const Footer = () => (
  <div className="footer">
        <p>
            © {new Date().getFullYear()} developed by <a className="exLink" href="https://twitter.com/johndursodev" target="_blank">@johndursodev</a>
        </p>
  </div>
)

export default Footer