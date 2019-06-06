import React from "react"
import { Link } from "gatsby"
import "../styles/events.css"

import Layout from "../components/layout"
const SecondPage = () => (
  <Layout>
    <h1>Mozilla Sahyadri Events</h1>
    <p>We love conducting Events at Mozilla Sahyadri and have conducted a number of them over the
      past few months, including:</p>
    <div id="events-container">

      <h3>"Step Into a New World!" - AR/VR Workshop</h3>
      <p>This Workshop was an introduction to the world of Web VR/AR, in which,
        participants learnt about the basics of Virtual Reality and Augmented Reality,
        usage of VR Headsets, Tilt Brush, Jump, Blocks,
        3D design and a lot more! We also recruited new members for Mozilla Campus Club: Sahyadri
      </p>
      <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/cb732cb1136aa2292326514547c05e6a/5D8DD659/t51.2885-15/e35/54512955_310220706341135_486292068053662587_n.jpg?_nc_ht=instagram.fmaa1-1.fna.fbcdn.net" alt="VR-AR"/>
      <center>AR/VR workshop conducted by Mozilla Sahyadri</center>

      <h3>Firefox Add-ons Workshop</h3>
      <p>An introduction to the world of Browser Add-Ons, 
        in collaboration with ACM Mozilla Interest Group for Open Source, 
        where participants from different colleges learnt to use, develop their own Browser Add-ons,
        Demo, overview of APIs, Review &amp; publishing Add-Ons to AMO
      </p>   
      <img src="https://adityakaria.github.io/img/blog-post-images/mozilla-workshop.jpeg" alt="Add-ons"/>
      <center>Firefox Add-Ons Workshop conducted by Mozilla Sahyadri in collaboration with mozilla NITK</center>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
