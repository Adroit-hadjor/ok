import React from "react";
import { Row, Col ,Container, Input,FormGroup,Label,} from 'reactstrap';


const MyInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
  
   id,
       ...props
     }) => {
        
    return(
       <React.Fragment>
             <FormGroup style={{paddingBottom:"50px"}}>
            <Label for={id}>{label}</Label>
            <Input  onChange={onChange} style={{border:"0px" ,borderBottom:"1px solid grey ",backgroundColor:"black"}} type={type} name={name} id={id} placeholder={placeholder} className={className}/>
          </FormGroup>
       </React.Fragment>
    )
}
const MyButton = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,

 id,
     ...props
   }) => {
      
  return(
     <React.Fragment>
           <FormGroup>
          <Label for={id}>{label}</Label>
          <Input value={value}   style={{border:"1px solid grey",color:"white",width:"200px" ,borderBottom:"1px solid grey ",backgroundColor:"black"}} type={type} name={name} id={id} placeholder={placeholder} className={className}/>
        </FormGroup>
     </React.Fragment>
  )
}
export  {MyInput,MyButton}