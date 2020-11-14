import React, {useState,useRef} from "react";
import { Row, Col ,Container} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev,FaArrowDown,FaArrowRight,FaShoppingCart,FaChartLine, FaFunnelDollar,FaUndoAlt} from 'react-icons/fa';
import MyButton from '../components/Button';
import {history} from 'react-router-dom';
import {MyCard,MySubCard} from "../components/Card";
import ngchi from "../images/doc.jpg";
import ecomm from "../images/shop.jpg";
import Header from '../components/header';
import Footer from "../components/footer";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ScrollAnimation from 'react-animate-on-scroll';
import nog from "../images/noguchi-svg.png";
import sika from "../images/sika-svg.png";
import japan from "../images/japan-svg.png";
import ReadyTo from "../components/readyTo";




function Homepage(...props) {
    
    const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" })  
  return (
  
    <div  className="App">
       
      <Header
      ccolor="white"
      pcolor="white"
      hcolor="#76f842"
      />
        <Row className={"d-lg-inline"} style={{paddingBottom:"250px"}}>
            <Col className={"d-md-none"}  xs="12" >
            <ScrollAnimation duration={3} animateIn="fadeInLeft">
            <div className={"header"}>O.K. Hadjor</div> 
            </ScrollAnimation>
            </Col>
           <Row style={{width:'100%',display:"flex",justifyContent:"center",alignItems:"center"}} className="topRow d-lg-none">
               <p style={{width:"450px",}}>
           <p style={{paddingBottom:"2rem",textAlign:'left'}}>
            <Col xs="12" className="title">UX Consultant &amp; Website Specialist </Col>
            <Col xs="12" className="title">in Accra, GH.</Col>
            </p>
      
            <Col xs="12"  className="topText">
            Websites only have to do one thing well. Show the user what they want, when they want it. Most websites are awful at this because creating a great website is really hard. Many pieces have to come together perfectly and even a small update can cause catastrophic knock-on effects, and you probably won't even notice.
            </Col>
            <Col xs="12" style={{padding:"20px 15px",textAlign:'justify'}}>
               I create websites with one goal,get your attention and keep it
            </Col>
     
            <Col>
            <MyButton
             onClick = {()=>{executeScroll()}}
             text="See how I do it &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
             icon ={ <FaArrowDown />}
              />
              </Col>
              </p>
              </Row>
            
       
      
        <Col xs="12" className="d-lg-none"  style={{padding:"100px 10vw"}}>
            <div className="groupIcons">
                <div className="subGroup">
           <a className="myLink_icons" href="https://twitter.com/__hadzor"><FaTwitter /></a> 
            <a className="myLink_icons" href="https://github.com/Adroit-hadjor"> <FaGithub /> </a>
            <a className="myLink_icons" href="https://www.instagram.com/ofoe.i/"> <FaInstagram /> </a>
            <a className="myLink_icons" href="https://www.linkedin.com/in/ofoe-hadjor-b2872a1a0"> <FaLinkedinIn /> </a>
            <a className="myLink_icons" href="https://dev.to/__hadzor"> <FaDev /> </a>
            </div>
            </div>
            </Col>
            </Row>
            <Row className={"d-none d-lg-flex"} style={{paddingBottom:"20px"}}>
            <Col xs="6" >
            <div className="sub" >
           <a className="myLink_icons" href="https://twitter.com/__hadzor"><FaTwitter size={25}/></a> 
            <a className="myLink_icons" href="https://github.com/Adroit-hadjor"> <FaGithub size={25}/> </a>
            <a className="myLink_icons" href="https://www.instagram.com/ofoe.i/"> <FaInstagram size={25}/> </a>
            <a className="myLink_icons" href="https://www.linkedin.com/in/ofoe-hadjor-b2872a1a0"> <FaLinkedinIn size={25}/> </a>
            <a className="myLink_icons" href="https://dev.to/__hadzor"> <FaDev size={25}/> </a>
            </div>
            </Col>
            <Col xs="6" className={"rightHeader"} >
            <p style={{width:"400px"}}>
           <p style={{paddingBottom:"2rem",textAlign:'left'}}>
            <Col xs="12" className="title">UX Consultant &amp; Website Specialist </Col>
            <Col xs="12" className="title">in Accra, GH.</Col>
            </p>
      
            <Col xs="12"  className="topText">
            Websites only have to do one thing well. Show the user what they want, when they want it. Most websites are awful at this because creating a great website is really hard. Many pieces have to come together perfectly and even a small update can cause catastrophic knock-on effects, and you probably won't even notice.
            </Col>
            <Col xs="12" style={{padding:"20px 15px",textAlign:'justify'}}>
               I create websites with one goal,get your attention and keep it
            </Col>
     
        <Col style={{zIndex:"9000"}}>
  
        <MyButton
             onClick = {()=>{executeScroll()}}
             text="See how I do it &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
             icon ={ <FaArrowDown />}
              />
        </Col>
          
          
              </p>
            </Col>
            </Row>
           
        <Row>
        <Col className={"d-none d-md-inline"}  xs="12" >
        <ScrollAnimation animateIn="fadeInLeft" duration={3}>
            <div className={"headerSec"}>O.K Hadjor</div> 
            </ScrollAnimation>
            </Col>
        </Row>
   
      
        <Row style={{padding:"100px 5vw"}}>
            <Col xs="12" md={{size:5}} lg="5">
               
                <div ref={myRef}  style={{paddingBottom:"150px"}}>
                <ScrollAnimation animateIn="fadeInLeft">
                    <h3 >
                    Projects
                    </h3>
               
               <p>  With my experience in working with agencies, I've built many websites, large and small.
             I've learned how your users think and what you can do to encourage them in the right direction.
             Whether you're looking for a review of your user experience or an entire website build, I can help you.</p>
             <MyButton
             onClick = {()=> window.location.href='/project'}
             text="How I have helped others &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
             icon = {<FaArrowRight />}
              />
                 </ScrollAnimation>
                </div>
             
                <div style={{paddingBottom:"150px"}}> 
                <ScrollAnimation duration={2}  animateIn="fadeInUp">
                 <MyCard 
                text="Japan "
                subtext="Tourism"
                icon= {<FaArrowRight />}
                bgImg = {japan}
                onClick = {()=> window.location.href='/japan'}
                />
                 </ScrollAnimation>
                </div>
               
            </Col>
            <Col xs="12" md={{size:5,offset:2}} lg={{size:5,offset:2}}>
                <div style={{paddingBottom:"150px"}}> 
                <ScrollAnimation duration={2}  animateIn="fadeInUp">
                 <MyCard 
                text="Noguchi"
                subtext="Museum"
                icon= {<FaArrowRight />}
                bgImg = {nog}
                onClick = {()=> window.location.href='/noguchi'}
                />
                 </ScrollAnimation>
                </div>
                <div   style={{paddingBottom:"150px"}}>
                <ScrollAnimation duration={2}  animateIn="fadeInUp">
                <MyCard 
                text="SikaStreet"
                subtext="Ecommerce"
                icon= {<FaArrowRight />}
                bgImg = {sika}
                onClick = {()=> window.location.href='/sika'}
                />
                </ScrollAnimation>
                </div>
            </Col>
      </Row>
    <ReadyTo />
     <Footer />
 
    </div>
 
  );
}

export default Homepage;
