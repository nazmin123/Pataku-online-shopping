import React from "react";
import NewArrivalitem from "./NewArrivalitem";
import PropTypes from "prop-types";
import "../../css/style.css"
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../../css/Arrival.css"
import { useProductContext } from "../../context/productContext";
import { Divider, Box } from "@mui/material";



const NewArrival = () => {
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
  const { newArrivalProducts} = useProductContext();


  const slideLeft = () => {
    var slider = document.getElementById("newArrival_row");
    slider.scrollLeft = slider.scrollLeft - 400;
    
  };
  const slideRight = () => {
    var slider = document.getElementById("newArrival_row");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  return (
      <div className="container"> 
     
      <div className="newArrival-container">
        {/* <Typography variant="h6">New Collections of Arrival</Typography> */}
        <div className=" row">
          <div className="col-3">
          <h4 className="mt-4">New <span>Collections</span> of Arrival</h4>
          </div>
          <div className="col-8 d-flex align-items-center mt-4">
          <Divider/>
          </div>
        </div>
       
        <div className="newArrival-subheading">
        <Typography  variant="subtitle" sx={{color:"#7a7a7a"}}>
          Browse the collection of our new products, You will definitely find
          what you are looking for.
        </Typography>
        <div className="button-container ">
        <Box sx={{ ...commonStyles, border: 1 , marginLeft:0.5, marginRight:0.5}} >
          <button
            type="button"
            className="btn   bg-transparent"
            onClick={slideRight}
          >
          <KeyboardArrowRightIcon/>
          </button>
          </Box>
          <Box sx={{ ...commonStyles, border: 1 }} >
          <button
            type="button"
            className="btn   bg-transparent"
            onClick={slideLeft}
          >
          <KeyboardArrowLeftIcon/>
          </button>
          </Box>
        </div>
        </div>
     
      
        <div style={{height:"100%", maxWidth:"100%", overflowY:"hidden"}}>
          <div id="newArrival_row">
            {newArrivalProducts && newArrivalProducts.map((arrivals) => {
              return (
                <div className="newArrival_items" key={arrivals.productId}>
                  <NewArrivalitem
                   productId={arrivals.productId}
                    name={arrivals.name}
                    price={arrivals.defaultPrice}
                    imageUrl={arrivals.defaultImageUrl}
                    size={arrivals.variants[0].size}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="newArrival_Banner_img ">
          <img src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img3_home2.jpg" />
        </div>
        {/* <div className="newArrival_Banner_img2 ">
          <img src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img3_home2.jpg" />
        </div> */}
      </div>
         
      </div>
  
  );
};
NewArrival.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default NewArrival;
