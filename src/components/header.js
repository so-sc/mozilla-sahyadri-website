import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
const Header = ({ siteTitle }) => (
  <header className="header"
  >
    <div className="Nav">
      <h1 className="MozSahyadri">
        <Link to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
         Mozilla Sahyadri
        </Link>
      </h1>
    </div>
  </header>
)


Header.defaultProps = {
  siteTitle: ``,
}

export default Header
