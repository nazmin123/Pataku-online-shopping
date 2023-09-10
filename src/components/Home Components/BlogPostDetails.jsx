import React from 'react'
import ImageContainer from '../Other Components/ImageContainer'
import {useLocation} from 'react-router-dom'
import "../../css/blog.css"


const BlogPostDetails = () => {
    const location = useLocation();
    console.log(location.state)
  return (
<>
<ImageContainer name={"single blog"}/>
<div className='container'>
    
       <div className="card my-2">
  <img src={location.state.imageUrl} className="card-img-top" alt="..." style={{height:"450px"}}/>
  <div className="card-body">
    <h3 className="card-title">{location.state.title}</h3>
    <div className='blog_details'>
        <p className='text-uppercase fw-bold'>{`posted by ${location.state.author}`}</p>
        <div className="vr mx-2" style={{height:"25px"}}></div>
        <p>{location.state.date}</p>
        <div className="vr mx-2" style={{height:"25px"}}></div>
        <p> {location.state.category}</p>
    </div>
    <p className="card-text">{location.state.description}</p>

  </div>
</div>
    </div>
</>
 
  

  )
}

export default BlogPostDetails
