import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
const Header = ({ siteTitle }) => (
  <header className="Header"
  >
    <div id="Nav" className="Nav">
      <h1 id="MozSahyadri" className="MozSahyadri">
        <Link to="/"
          style={{
            textDecoration: `none`,
          }}
        >
         mozilla<br /> SAHYADRI
        </Link>
      </h1>
        <ul id="NavList"className="NavList">
        <li><Link to="/events" className="">
          Events
        </Link></li>
        <li><Link to="/members" className="">
          Members
        </Link></li>
        </ul>
    </div>
    <script
  dangerouslySetInnerHTML={{
    __html: `
            // When the user scrolls down 240px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("Nav").style.padding = "1.0rem 3.1875rem";
    document.getElementById("NavList").style.fontSize = "15px";
    document.getElementById("MozSahyadri").style.fontSize = "1.99em";
    document.getElementById("NavList").style.margin = "1.7rem 1.1875rem";
  } else {
    document.getElementById("Nav").style.padding = "9.0rem 15.1875rem";
    document.getElementById("NavList").style.fontSize = "20px";
    document.getElementById("MozSahyadri").style.fontSize = "4.00em";
    document.getElementById("NavList").style.margin = "4rem 1.1875rem";
    
  }
}
        `,
  }}
/>
  </header>
)




Header.defaultProps = {
  siteTitle: ``,
}

export default Header

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //minimized
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("Nav").style.padding = "1.0rem 3.1875rem";
    document.getElementById("NavList").style.fontSize = "calc(0.45em + 0.5vw)";
    document.getElementById("MozSahyadri").style.fontSize = "calc(1.50em + 0.7vw)";
    document.getElementById("NavList").style.margin = "1.7rem 1.1875rem";
  }
  //maximized 
  else {
    document.getElementById("Nav").style.padding = "9.0rem 15.1875rem";
    document.getElementById("NavList").style.fontSize = "calc( 0.5em + 1.0vw)";
    document.getElementById("MozSahyadri").style.fontSize = "calc(3.00em + 2.0vw)";
    document.getElementById("NavList").style.margin = "4rem 1.1875rem";
    
  }
}