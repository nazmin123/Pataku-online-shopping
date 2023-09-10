import React from 'react'
import ImageContainer  from './ImageContainer'
import  '../../css/blog.css'

function About() {
  return (
    <div>
      <ImageContainer name={"about"}/>
      <div className='container'>
      <h4>About Us</h4>
      <div className='about-us my-2'>
        <div className='about-us-col mx-2'>
          <h6> Our company</h6>
          <p> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</p>
          <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.</p>
        </div>
        <div className='about-us-col mx-2'>
          <h6> Our Team</h6>
          <p> Lorem set sint occaecat cupidatat non</p>
          <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
        </div>
        <div className='about-us-col mx-2'>
          <h6>Testimonials</h6>
          <p> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.</p>
        </div>
      </div>
      </div>
       
    </div>
  )
}

export default About
