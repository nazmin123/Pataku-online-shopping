import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='container' style={{margin:"3rem"}}>
           <div>
          <h2>404</h2>
          <h3>UH OH! You are lost.</h3>
          <p>
            The page you are looking for does not exist.But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
          <button type="button" className="btn" style={{backgroundColor :"#369599", color:"white" }}>Go Back to Home </button>
           
          </NavLink>
        </div>
    </div>
  )
}

export default ErrorPage
