import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <b><p style={{textAlign:'center'}}>Official Website of the Mozilla Campus Club at Sahyadri College of Engineering and Management</p></b>
    <p>Lorem Ipsum Dolor blah</p>
    <p>Come, be a part of Mozilla Sahyadri now!</p>
    <Link to="/events">Events</Link>
  </Layout>
)

export default IndexPage
