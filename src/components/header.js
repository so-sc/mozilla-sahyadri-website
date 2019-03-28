import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
const Header = ({ siteTitle }) => (
  <header className="Header"
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
        <ul className="NavList">
        <li><Link to="/events" className="">
          Events
        </Link></li>
        <li><Link to="/members" className="">
          Members
        </Link></li>
        </ul>
    </div>
  </header>
)


Header.defaultProps = {
  siteTitle: ``,
}

export default Header
