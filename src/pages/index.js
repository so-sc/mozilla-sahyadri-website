import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <p style={{textAlign:'center', color:'#333'}}>Official Website of the Mozilla Campus Club at Sahyadri College of Engineering and Management</p>
    <div class="col-md-9">
        <h2 id="what-is-a-mozilla-campus-club">What is a Mozilla Campus Club?</h2>
        <p>
          Mozilla’s mission is to ensure the Internet is a global public resource, open and accessible to all. A Mozilla University &amp; College Club is a group of students with a passion for technology who meet regularly to advance this mission by building and innovating on open source projects that keep the web open.
        </p>
      </div>
    <p>Come, be a part of Mozilla Sahyadri now!</p>
    <Link to="/events">Events</Link>
  </Layout>
)

export default IndexPage
