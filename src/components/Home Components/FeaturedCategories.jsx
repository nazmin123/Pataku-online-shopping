import React,{useState, useEffect} from 'react';
import { Divider, Box } from "@mui/material/";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FeaturedCategoriesItem from './FeaturedCategoriesItem';
import "../../css/dinning.css"
import axios from "axios";

const FeaturedCategories = () => {
  const commonStyles = {
    bgcolor: "#ebebeb",
    color: "#a3a3a3",
    width: "2rem",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      color: "#ffffff",
      bgcolor: "#369599",
    },
  };
  const [featuredCategories, setFeaturedCategories] = useState([]);

  // api to call for featured categories
  const getBlog = () => {
  axios.get("http://localhost:3000/featuredCategories")
 .then(res => setFeaturedCategories(res.data) )
 .catch(error => console.log(error));
};
useEffect(() => {
 getBlog();

}, []);
  return (
    
        <div className="container">
      <div className="dinning-heading">
        <p style={{ fontSize: "1.5rem" }}>
          <span style={{ fontWeight: "bold" }}>Featured</span> Categories
        </p>
        <Divider
          sx={{
            marginLeft: "1%",
            marginRight: "1%",
            width: "60%",
           
          }}
        />
        <div className='row'>
          <div className='col'>
          <Box sx={{ ...commonStyles, border: 1 }} >
              <KeyboardArrowLeftIcon />
            </Box>
          </div>
          <div className='col'>
          <Box sx={{ ...commonStyles, border: 1 }}>
              <KeyboardArrowRightIcon />
            </Box>
          </div>
        </div>
       
          
      </div>
      <div className="dinning-item">
      <div className="row">
      {featuredCategories && featuredCategories.map((element) => {
          return (
            <div className="col col-md-4" key={element.id}>
              <FeaturedCategoriesItem {...element}/>
            </div>
          );
        })}
      
      </div>
  
      </div>
   
    </div>
  )
}

export default FeaturedCategories