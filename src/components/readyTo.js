import React, {useState,useEffect,useRef} from "react";
import Footer from "../components/footer";
import Header from '../components/header';
import { Row, Col ,Container, Card,Form,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev,FaArrowDown,FaArrowRight,FaShoppingCart,FaChartLine, FaFunnelDollar,FaUndoAlt} from 'react-icons/fa';
import MyButton from '../components/Button';
import {MyCard,MySubCard} from "../components/Card";
import ngchi from "../images/doc.jpg";
import ecomm from "../images/shop.jpg";
import nog from "../images/noguchi-svg.png";
import sika from "../images/sika-svg.png";
import japan from "../images/japan-svg.png";
import Fade from "react-reveal";
import ScrollAnimation from 'react-animate-on-scroll';


function ReadyTo(){
  
    return(
        <Row className="homePageEnd" >
        {/* give classname and modify padding wrt width ie media queries */}
      <Col className="d-md-flex"   md="12" lg="7">
     
          <Col xs="12" md="6">
          <ScrollAnimation animateIn="fadeInLeft">
             <MySubCard icon={<FaFunnelDollar color="#76f842"size="30"/>} text="Target Content" subtext="Direct your customers to what they want to see." />
             </ScrollAnimation>
             <ScrollAnimation animateIn="fadeInLeft">
             <MySubCard icon={<FaShoppingCart color="#76f842"size="30"/>}text="Make More Sales" subtext="Get more purchases on your online store using upsells, featured products, and much more." />
              </ScrollAnimation>
          </Col>
          <Col xs="12" md="6">
          <ScrollAnimation animateIn="fadeInLeft">
          <MySubCard icon={<FaChartLine color="#76f842"size="30"/>} text="Increase Engagement" subtext="Focused content means your users care more about what you have to say."/>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft">
          <MySubCard icon={<FaUndoAlt color="#76f842"size="30"/>} text="Repeat Customers" subtext="A great initial impression leads to more loyal customers and repeat engagement."/>
         </ScrollAnimation>
          </Col>
       
      </Col>
      <Col  md="12" lg="5">
      <ScrollAnimation animateIn="fadeIn" duration={2}>
                  <h3>Website not working hard enough?</h3>
                 <p>Most websites lose 95% of their potential customers.</p>
                 <p> You've seen it before. You go to a website looking for a product and you're bombarded with pages of information, popups galore, and you still can't find what you need.</p>
                 <p> I work with companies around the world to create user-driven websites. Get more clicks, attract more customers, and increase your sales.</p> 
                 <MyButton
          onClick = {()=> window.location.href='/contact'}
           text="Book Discovery Call &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
           icon ={ <FaArrowRight />}
            />
                 
      </ScrollAnimation>
        </Col>
       
    </Row>
    )
}
export default ReadyTo;