import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <div className="footer">
        <p>
            © {new Date().getFullYear()} developed by <a href="https://twitter.com/hivemindjohn">@hivemindjohn</a>
        </p>
  </div>
)

export default Footer