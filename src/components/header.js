import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import "../styles/header.css"

const Header = ({ siteTitle }) => {
  const [expanded, setExpanded] = useState(true);

  const onScroll = () => {
    const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (scrollTop >= 50) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="Header"
    >
      <div id="Nav" className={"Nav " + (expanded && 'Expanded')}>
        <h1 className="MozSahyadri">
          <Link
            onClick={()=>{
              setExpanded(false);
            }}
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            mozilla<br /> SAHYADRI
          </Link>
        </h1>
        <ul className="NavList">
          <li>
            <Link
              onClick={()=>{
                setExpanded(false);
              }}
              to="/events"
              className=""
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              onClick={()=>{
                setExpanded(false);
              }}
              to="/members"
              className="">
              Members
            </Link></li>
        </ul>
      </div>
    </header>
  )
};

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;