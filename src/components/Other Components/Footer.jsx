import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer textDecoration" >
      <div className="sb_footer section_padding">
        <div className="sb_footer_links">
          <div className="sb_footer-link-div">
           <h5> Need Help?</h5>
           <div className="text-muted">Call: 1-800-345-6789</div>
           <h5 className="mt-4"> Products & Sales</h5>
           <div className="text-muted">Call: 1-800-345-6789</div>
           <h5 className="mt-4">Check Order Status</h5>
           <div className="text-muted">Click here to check Order Status.</div>
          </div>
          <div className="sb_footer-link-div">
            <h5> Products</h5>
            <a className="textDecoration text-muted" href="/pricedrop" >
              <p>Price Drop</p>
            </a>
            <a  className="textDecoration text-muted" href="/newproducts">
              <p>New Products</p>
            </a>
            <a className="textDecoration text-muted" href="/bestsales">
              <p> Best sales</p>
            </a>
            <a  className="textDecoration text-muted" href="/Contact Us">
              <p> Contact us</p>
            </a>
            <a className="textDecoration text-muted" href="/myaccount">
              <p> My account</p>
            </a>
          </div>
          <div  className="sb_footer-link-div">
            <h5> Our Company</h5>
            <a className="textDecoration text-muted" href="/delivery">
              <p> Delivery</p>
            </a>
            <a className="textDecoration text-muted" href="/legalnotice">
              <p> Legal Notice</p>
            </a>
            <a className="textDecoration text-muted" href="/about">
              <p> About us</p>
            </a>
            <a  className="textDecoration text-muted" href="/contact">
              <p>Contact us</p>
            </a>
            <a  className="textDecoration text-muted" href="/sitemap">
              <p> Sitemap</p>
            </a>
            <a className="textDecoration text-muted" href="/stores">
              <p> Stores</p>
            </a>
          </div>
          <div className="sb_footer-link-div">
            <h5> Newsletter</h5>
            <div>
              <TextField 
                id="outlined-basic"
                variant="standard"
               
             
                placeholder="Your Email address"
                InputProps={{ style: { color: "white" } ,
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon  style={{color:"white"}}/>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <Divider color="#ffffff" sx={{ height: 0.1 }} />
      </div>
      <div className="share">
        <div className="free-app">
          <div className="text"> Free App: </div>
          <div className="os_button">
            <Button
              variant="contained"
              startIcon={<AppleIcon />}
              style={{
                backgroundColor: "#434343",
              }}
            >
              App Store
            </Button>
          </div>
          <div className="os_button">
            <Button
              variant="contained"
              startIcon={<AndroidIcon />}
              style={{
                backgroundColor: "#558000",
              }}
            >
              Google Play
            </Button>
          </div>
        </div>
        
        <div className="follow-us">
          <div className="text">Follow Us:</div>
          <div className="socialmedia">
            <p>
              <IconButton sx={{ color: "#ffffff" }}>
                <TwitterIcon />
                <GoogleIcon />
                <FacebookIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </IconButton>
            </p>
          </div>
        </div>
      
      </div>
      <div className="divider">
        <Divider color="#ffffff" sx={{ height: 0.1 }} />
      </div>
    </div>
  );
};
export default Footer;
