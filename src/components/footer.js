import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <div>
    <div
      style={{
        width: `100%`,
        background: `#36405f`,
        padding: `35px 0 10px 0`,
        color: `#fff`,
      }}
    >
      <div style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
        }}
      >
        <p>
            © {new Date().getFullYear()} developed by <a href="https://twitter.com/hivemindjohn">@hivemindjohn</a>
        </p>
      </div>
    </div>
  </div>
)

export default Footer