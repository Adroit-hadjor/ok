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


function Japan(){
  
    return(
        <div id="con" className="App">
            <Header
      ccolor="white"
      pcolor="white"
      hcolor="white"
      />
     
     <ProjectDetails 
          company="Japan Travels"
          title="A website for navigation"
          industry="Tourism"
          location="Japan"
          website={<a style={{textDecoration:"none",color:"white"}} className={"myLink"} href="https://www.japan.travel/">visit Site</a>}
          results="A comprehensive artistic platform that didn't exist before"
          whatIs="The Noguchi Museum was founded and designed by internationally renowned American artist Isamu Noguchi (1904–1988) 
          for the display of what he considered to be representative examples of his life’s work. "
            theProblem="The japanese had a good website in place but foreigners with different laguage backgrounds found it difficult to 
            to use the page because the japanese dev team was not used to text and font arrangements of the english letters.Also the homepage needed a touch to help direct user 
            attention to the purpose of  the website rather than having the information brought up in a video on your first point of interaction "
            titleOfRest="The results"
            theRest="As done in my previous projects, I knew the users interaction was the most important.We managed  to evenly distribute 
            all important details about Japan travels and get rid of that first video which compressed of all details of the website.It became much user friendly and we adjusted text to 
            help english tourist reead easily"
           noLongerWorking= {`NB: This project was completed before starting my freelance career. While I had significant input on the project, I was not the sole contributor. I no longer have access to up-to-date statistics.`}
        
          />
      <Footer />
        </div>
    )
}
export default Japan