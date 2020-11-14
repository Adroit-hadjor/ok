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
import ProjectDetails from '../components/projectDetails';


function Noguchi(){
  
    return(
        <div id="con" className="App">
            <Header
      ccolor="white"
      pcolor="white"
      hcolor="white"
      />
          <ProjectDetails 
          company="Noguchi"
          title="A new site for a new identity"
          industry="Art"
          location="Japan &amp; New York"
          website={<a style={{textDecoration:"none",color:"white"}} className={"myLink"} href="https://www.noguchi.org/">visit Site</a>}
          results="A comprehensive artistic platform that didn't exist before"
          whatIs="The Noguchi Museum was founded and designed by internationally renowned American artist Isamu Noguchi (1904–1988) 
          for the display of what he considered to be representative examples of his life’s work. "
            theProblem="The noguchi museum was gaining popularity and needed a way to get information to it's users
            that were miles away so they have an idea of what the museum looked like.The noguchi website had a great backend but lacked the 
            artwork feel to it's website.The website had the pictures posted with no good labeling, users were just bombarded with images. "
            titleOfRest="Stand out from the crowd"
            theRest="As developers, we knew our major role was to improve the engagement of users with our website and making it easy to 
            get the information needed.
            Being able to focus the website in a way which meant it could be used without having to have previous context was crucial. There was only so much which could be done through networking and, as direct marketing is expensive for a small company. There were other more efficient marketing methods which could have been utilised.
            Other means of marketing, like SEO and online advertising can drive traffic to the website
             but the website has to be engaging in order to keep visitors' attention. 
             Before money could be spent on other marketing techniques, the website had to be improved."
             titleOfLast="The Results"
             theLast="After improving the website, Noguchi was increased from a wider variety of marketing channels.The number of visits to the page increased
             allowing noguchi to break the barrier of lack of communication between Noguchi and it's potential customers"
             noLongerWorking= {`NB: This project was completed before starting my freelance career. While I had significant input on the project, I was not the sole contributor. I no longer have access to up-to-date statistics.`}
          />
      <Footer />
        </div>
    )
}
export default Noguchi