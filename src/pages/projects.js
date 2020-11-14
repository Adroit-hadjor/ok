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


function Project(){
    const [fadeLeft,setfadeLeft]=useState(false);
    const [lastYPos,setlastYPos]=useState(0);
    const [lastNegYPos,setlastNegYPos]=useState(1200);



   useEffect(()=>{

        function handleScroll(){
       
            const yPos = window.scrollY;
            console.log(yPos+" "+lastYPos)
            const isScrollingUp = yPos > lastYPos  || yPos < lastYPos;
          
            setfadeLeft(isScrollingUp);
            if(yPos > 1400 || yPos < 442 ){
                setfadeLeft(false)
                console.log("fade is"+fadeLeft)
            }else{
                setfadeLeft(true)
            }
          /*   console.log(fadeLeft)
            setlastYPos(yPos ); */
           
        }
       window.addEventListener('scroll',handleScroll,false)

       return () =>{
           window.removeEventListener('scroll',handleScroll,false)
       }
   },[fadeLeft])

    
    const explore = useRef(null);
    const noguchi = useRef(null);
    const secnoguchi = useRef(null);
    /* const myRef = useRef(null);
    const myRef = useRef(null);
    const myRef = useRef(null);
    const myRef = useRef(null);
    const myRef = useRef(null); */
    const onScroller = () => {
        setfadeLeft(!fadeLeft);
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const scrollTop = this.explore.current.scrollTop
       console.log(scrollTop)
        
    }

   
    return(
        <div id="con" className="App">
            <Header
      ccolor="white"
      pcolor="#76f842"
      hcolor="white"
      />
      <Row style={{padding:"150px 5vw"}}>
            <Col xs="12" md={{size:5}} lg="5">
               
                <div   style={{paddingBottom:"150px"}}>
                <ScrollAnimation animateIn="fadeInLeft">
                    <h3>
                    Explore my favourite projects. Find something you love.
                    </h3>
               
               <p> With a portfolio of work ranging from small brochure sites to nationwide stores,
                 I've worked on many different types of project. I'm a flexible developer, 
                 with many years of experience in agency and a large number of projects under my belt. 
                 If you're looking for something a bit different, get in touch.</p>
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
      <Footer />
        </div>
    )
}
export default Project