import React from "react";
import "../../css/style.css";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

function Navbar() {
 
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container">
              <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <li className="nav-item  ">
                  <NavLink className="nav-link active" aria-current="page" to="/" >
                  <Typography variant="h6" 
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        "&:hover": {
                          color: "black",
                          },
                        "&:active":{
                          color: "black",
                        },
                      
                        marginRight:"2rem"
                      }}
                    >Home</Typography>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                 
                    <Typography variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        "&:hover": {
                        color: "black",
                        },
                        marginRight:"2rem"
                      }}
                    >
                      About
                    </Typography>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/delivery">
                    
                  <Typography variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        "&:hover": {
                        color: "black",
                        },
                        marginRight:"2rem"
                      }}
                    >Delivery</Typography>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/legalnotice">
                    
                  <Typography variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        "&:hover": {
                        color: "black",
                        },
                      }}
                    >Legal Notice</Typography>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
