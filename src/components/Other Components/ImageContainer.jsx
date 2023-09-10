import React from 'react'
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";


const ImageContainer = ({name}) => {


  return (
    <>
     <div className="image-container">
     <p  style={{ fontSize: "1 rem" , marginTop:"75px", marginLeft:"20px"}}><NavLink to='/' style={{ color: "grey" ,  textDecoration: "none"}}> Home / </NavLink>
         <span style={{ fontWeight: "bold" }}>{name}</span>
        </p>
      <div className="image">
   <img  src="../sofa.png" width={500} height={200}/>
   </div>
     </div>
    
    
    </>

    
  )
}
ImageContainer.propTypes ={
  name: PropTypes.string
}
export default ImageContainer;


