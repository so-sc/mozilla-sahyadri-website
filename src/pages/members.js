import React from "react"
import { Link } from "gatsby"
import "../styles/members.css"
import Layout from "../components/layout"
const SecondPage = () => (
  <Layout>
    <h1>Welcome to the members page</h1>
    <p style={{margin:100, textAlign:'center',}}>Here, we have a list of all the Active Mozillians at Sahyadri:</p>
    <div className="MembersContainer">
      <ul className="MembersList">
        <li>
          <div className="MemberCard">
            <p id="member-p">
            <img id="dp" src="https://avatars1.githubusercontent.com/Basavarajeshwari-Ambi" />
            <p id="member-p">Basavarajeshwari Ambi</p>
            <center>Club Captain</center>
            </p>
          </div>

          <div className="MemberCard">
            <p id="member-p">
            <img id="dp" src="https://avatars0.githubusercontent.com/u/22280173?s=460&v=4" />
            <p id="member-p">Nathaniel Ryan M</p>
            <center>Club Vice Captain</center>
            </p>
          </div>

        </li>
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
