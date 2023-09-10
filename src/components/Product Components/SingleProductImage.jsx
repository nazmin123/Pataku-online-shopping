import React, { useState } from "react";
import { Box,Avatar } from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../../css/singleproduct.css";

const SingleProductImage = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <div className="d-flex align-items-center  justify-content-center" style={{width: "130px", marginBottom:"-15px"}}>
          <Avatar  variant="square" sx={{color:"black", backgroundColor:"white", border: "1.4px solid #efefef"}} onClick={() =>
              (document.getElementById("scrollcontainer").scrollTop -= 100)
            }>
          <KeyboardArrowUpIcon/>
          </Avatar>
          </div>
          <Box
            id={"scrollcontainer"}
            sx={{ width: "150px", height: "400px", overflowY: "hidden" }}
          >
            {images.map((item, index) => (
              <img  className="my-2" key={index} src={item}  style={{ width: 130, height: 100 }} onClick={() => setMainImage(item)} />
            ))}
            ;
          </Box>
          <div className="d-flex align-items-center  justify-content-center" style={{width: "130px", marginTop:"-12px"}}>
          <Avatar  variant="square" sx={{color:"black", backgroundColor:"white", border: "1.4px solid #efefef"}} onClick={() =>
              (document.getElementById("scrollcontainer").scrollTop += 100)
            }>
          <KeyboardArrowDownIcon/>
          </Avatar>
          </div>
         </div>

        <div className="col d-flex align-items-center">
          <Box
            component="img"
            sx={{
              height: 250,
              width: 220,
            }}
            alt="The house from the offer."
            src={mainImage}
          />
        </div>
      </div>
    </div>
  );
};
SingleProductImage.propTypes = {
  images: PropTypes.array,
};

export default SingleProductImage;
