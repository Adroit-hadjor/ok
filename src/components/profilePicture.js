import React, {useState,useEffect} from "react";
import {Media} from 'reactstrap';
import blue from "../images/blue.jpg";


function ProfilePicture(){
    return(
     
             <Media  object style={{width:"35px",height:"35px",borderRadius:"20px"}} src={blue} />
       
     
    )
}
export default ProfilePicture