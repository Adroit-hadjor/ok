import React, {useState,useEffect} from "react";
import { Row, Col ,Container, Card,Form,Button} from 'reactstrap';
import Footer from "../components/footer";
import Header from '../components/header';
import {MyInput,MyButton} from "../components/input";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import TimePicker from 'react-time-picker';
import ScrollAnimation from "react-animate-on-scroll";
import emailjs from 'emailjs-com'
import keys from '../components/keys'


function Contact(){
     const [name,setName] = useState('');
     const [email,setemail] = useState('');
     const [message,setmessage] = useState('');
     let target = {
         name:name,
         email:email,
         message:message,
     }
   
    function send(e){
     e.preventDefault();
        emailjs.sendForm('gmail', keys.templateId,e.target, keys.uid)
        .then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        }

    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
      /*   script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script); */
      });

    return(
        <div   className="App">
           <Header
      ccolor="#76f842"
      pcolor="white"
      hcolor="white"
      />
       <ScrollAnimation duration={1}  animateIn="fadeInUp">
          <Row id="con">
              <Col  style={{display:"flex",justifyContent:"center",alignItems:"center",width:"300px",textAlign:"center",padding:"50px 0px 0px 1vw"}}xs ="12">
             
                  <h3>
                  Book a Discovery Call Today!
                  </h3>
               
              </Col>
              <Col   style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"40px 0px 110px 0vw"}}xs ="12">
             
              <p style={{width:"90%",color:"grey",fontFamily:"sans-serif",fontSize:"0.9rem",lineHeight:"1.5rem"}}>We begin by discussing your business and the problems you’re facing, 
                  and only  then will we cover how best those  problems can be resolved.
                   No fuss. No pitch. Just an honest discussion figuring out how I can best help you.
                   </p>
                 
              </Col>
          </Row>
          </ScrollAnimation>
          <Row style={{paddingBottom:"150px"}}>
   
    
      
        
                <div className="calendly-inline-widget" 
                data-url="https://calendly.com/ofoehadjor/website" 
                style={{minWwidth:"300px",width:"100%",height:"750px"}} >

                </div>
        
   
    
    </Row>
    <ScrollAnimation duration={1}  animateIn="fadeInUp">
    <Row style={{textAlign:"center"}}>
        <Col xs="12" style={{paddingBottom:"30px"}}>
    
            <div><h4>Have a question?</h4></div>
          
            </Col>
        <Col xs="12" style={{paddingBottom:"30px"}}> 
        
        <div><p>Get in touch using the form below, or drop me a quick email on ofoehadjor@gmail.com</p></div>
       
        </Col>
        
       
    </Row>
    </ScrollAnimation>
   
        <Form onSubmit={send} style={{display:"flex",justifyContent:"center",paddingBottom:"250px"}}>
            <Row Form style={{maxWidth:"500px"}}>
            <Col xs="12" md={6}>
            <MyInput 
            name={"name"}
            id={"myName"}
            placeholder={"Name "}
            onChange={(e)=>{setName(e.target.value)}}
            />
            </Col>
            <Col xs="12" md={6}>
            <MyInput 
            name={"email"}
            id={"myEmail"}
            placeholder={"Email "}
            type={"email"}
            onChange={(e)=>{setemail(e.target.value)}}
            />
            </Col>
            <Col xs="12" md={"12"}>
            <MyInput 
            name={"message"}
            id={"mymessage"}
            placeholder={"Message "}
            type={"textarea"}
            onChange={(e)=>{setmessage(e.target.value)}}
            />
            </Col>
            <Col x="12" style={{display:"flex",justifyContent:"center"}}>
              
                <MyButton
                className={"newBtn"}
                type={"submit"}
                value="Send"
                />
             
            </Col>
            </Row>

        </Form>
     
   
          <Footer />
        </div>
    )
}
export default Contact