import React, { Fragment } from "react";

import NewArrival from "./NewArrival";
import { Box } from "@mui/material";
import DiningRoom from "./DiningRoom";
import OutdoorFurniture from "./OutdoorFurniture";
import FeaturedCategories from "./FeaturedCategories";
import BlogPost from "./BlogPost";
import "../../css/style.css";
import "../../css/home.css";
import SubHome from "./SubHome";

function Home() {
  return (
  

   
    <Box sx={{ width: "100%", height: "100%" }}>
      <Fragment>
 

        <SubHome/>
        <NewArrival />
        <DiningRoom />
        <OutdoorFurniture />
        <FeaturedCategories />
        <BlogPost />
        {/* <div className='banner-box'>
          <div className='rowC'>
          <BrowseCategories/>
        </div>
        <ImageSlider/>
        </div>
        <NewArrival/>
        <DiningRoom/>
        <OutdoorFurniture/>
        <FeaturedCategories/>
        <BlogPost/> */}
      </Fragment>
    </Box>
 
  );
}

export default Home;
