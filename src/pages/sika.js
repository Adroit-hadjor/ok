import React, {useState,useEffect,useRef} from "react";
import Footer from "../components/footer";
import Header from '../components/header';
import { Row, Col ,Container, Card,Form,Button} from 'reactstrap';
import {MyCard} from "../components/Card";
import {FaArrowRight} from 'react-icons/fa';
import ngchi from "../images/doc.jpg";
import ecomm from "../images/shop.jpg";
import nog from "../images/noguchi-svg.png";
import sika from "../images/sika-svg.png";
import japan from "../images/japan-svg.png";
import Fade from "react-reveal";
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectDetails from "../components/projectDetails";


function Sika(){
  
    return(
        <div id="con" className="App">
            <Header
      ccolor="white"
      pcolor="white"
      hcolor="white"
      />
   
   <ProjectDetails 
          company="Sika"
          title="A website that sells phones and accessories"
          industry="Ecommerce"
          location="Ghana"
          website="visit Site"
          results="A comprehensive artistic platform that didn't exist before"
          whatIs=" "
            theProblem="In college my friend and I decided to take our phone selling business online.The goal was simple, the website needed to make it easy for the user to request a cell phone
            and pay through the web with ease. "
            titleOfRest="Fast Pay"
            theRest="It was simple,since most of our customers were from west africa ,we needed to know their most common mode of payment.
            With a little research,we discovered they used mobile money much often.So we searched for api's that had space for mobile money integration and came up with 
            flutterwave. The website managed to increase our customers by 10 percent."
            
            
        
          />
      <Footer />
        </div>
    )
}
export default Sika;