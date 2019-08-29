import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <p>
      <img src="https://i.imgur.com/aOidzdc.jpg" height='50%' width='50%' alt="club logo" /><br />
      Official Website of the Mozilla Campus Club at Sahyadri College of Engineering and Management
    </p>
    <div class="col-md-9">
        <h2 id="heads">What is a Mozilla Campus Club?</h2>
        
        <p>
          Mozilla’s mission is to ensure the Internet is a global public resource,
          open and accessible to all. A Mozilla University &amp;
          College Club is a group of students with a passion for technology who meet regularly to advance
          this mission by building and innovating on open source projects that keep the web open.
        </p>
        <p>
          <img src="https://user-images.githubusercontent.com/18684321/47107243-6ce14580-d266-11e8-9c3a-18f0b49013d4.jpg" alt=""/>
          <center>Hacktoberfest Hacknight 2018</center>
        </p>
        <h2 id="heads">What do we do?</h2>
        
        <p>
          At Mozilla Sahyadri, we conduct various Events, Workshops, Talks and Activities for the students
          of our college and beyond. By becoming a member, you will get various opportunities to Host your own events, 
          learn new skills, collaborate with neighbouring mozilla clubs and much more! 
        </p>
        <p>
          <img src="https://instagram.fmaa1-1.fna.fbcdn.net/vp/cb732cb1136aa2292326514547c05e6a/5D8DD659/t51.2885-15/e35/54512955_310220706341135_486292068053662587_n.jpg?_nc_ht=instagram.fmaa1-1.fna.fbcdn.net" alt="What we do"/>
          <center>AR/VR workshop conducted by Mozilla Sahyadri</center>
        </p>

      </div>
    
    <h2 id="heads">Where is Mozilla Sahyadri Located?</h2>
        
        <p>
          The Mozilla Sahyadri Club Room is situated on the second floor, next to the iWave Lab at
          Sahyadri College of Engineering &amp; Management, Adyar, Mangalore, Karnataka, India
        </p>
    <p>
          <img src="https://www.sahyadri.edu.in/images/gallery/Sahyadri-Campus-005.jpg" />
          <center>Sahyadri Campus</center>
    </p>
    
    <p>Come, be a part of Mozilla Sahyadri now!</p>
    <Link to="/events">Join us</Link>
  </Layout>
)

//Uncomment during development
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

export default IndexPage
