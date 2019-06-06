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
            // When the user scrolls down 100px from the top of the document, resize the navbar's padding and the logo's font size
            window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //minimized
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("Nav").style.padding = "0.2vw";
    document.getElementById("NavList").style.fontSize = "calc(0.10em + 1.0vw)";
    document.getElementById("MozSahyadri").style.fontSize = "calc(0.25em + 3.0vw)";
    document.getElementById("NavList").style.margin = "4.8vw 0vw";
    document.getElementById("MozSahyadri").style.margin = "calc(0.4em + 0.8vw) 0vw";  
  }
  //maximized 
  else {
    document.getElementById("Nav").style.padding = "calc(5.0rem + 10.0vw)";
    document.getElementById("NavList").style.fontSize = "calc( 0.3em + 1.2vw)";
    document.getElementById("MozSahyadri").style.fontSize = "calc(0.80em + 5.0vw)";
    document.getElementById("NavList").style.margin = "7vw 0vw";
    document.getElementById("MozSahyadri").style.margin = "1.5vw 0vw";  
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

//Uncomment during development
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   //minimized
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("Nav").style.padding = "0.2vw";
//     document.getElementById("NavList").style.fontSize = "calc(0.10em + 1.0vw)";
//     document.getElementById("MozSahyadri").style.fontSize = "calc(0.25em + 3.0vw)";
//     document.getElementById("NavList").style.margin = "4.8vw 0vw";
//     document.getElementById("MozSahyadri").style.margin = "calc(0.4em + 0.8vw) 0vw";  
//   }
//   //maximized 
//   else {
//     document.getElementById("Nav").style.padding = "calc(5.0rem + 10.0vw)";
//     document.getElementById("NavList").style.fontSize = "calc( 0.3em + 1.2vw)";
//     document.getElementById("MozSahyadri").style.fontSize = "calc(0.80em + 5.0vw)";
//     document.getElementById("NavList").style.margin = "7vw 0vw";
//     document.getElementById("MozSahyadri").style.margin = "1.5vw 0vw";  
//   }
// } 