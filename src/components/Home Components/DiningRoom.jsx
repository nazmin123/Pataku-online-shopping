import React, { useState, useEffect } from "react";
import "../../css/dinning.css";
import { Divider, Box, Typography } from "@mui/material/";
import DinningItem from "./DinningItem";
import PropTypes from "prop-types";
import { useProductContext } from "../../context/productContext";

const DiningRoom = () => {
  const { livingchairs, sofaProduct, storageProduct } = useProductContext();
  const [newDataSet, setNewDataSet] = useState([livingchairs]);
  const commonStyles = {
    m:0.5,
    color: "#727272",
    width: "7.5rem",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      borderColor: "#369599",
      color: "#369599",
    },
  };

  const livingChairs = () => {
    setNewDataSet(livingchairs);
  };
  const sofa = () => {
    setNewDataSet(sofaProduct);
  };
  const storage = () => {
    setNewDataSet(storageProduct);
  };
  useEffect(() => {
    setNewDataSet(livingchairs);
    // eslint-disable-next-line
  }, [livingchairs]);
  return (
    <div className="container">
      <div className="dinning-heading">
        <p style={{ fontSize: "1rem" }}>
          <h5 style={{ fontWeight: "bold" }}>Dining</h5> Room
        </p>

        <Divider
          sx={{
            marginLeft: "2%",
            marginRight: "2%",
            width: "60%",
          }}
        />
          <Box sx={{ ...commonStyles, border: 1 }} onClick={livingChairs}>
              <Typography variant="body2">Living Chairs</Typography>
            </Box>
            <Box sx={{ ...commonStyles, border: 1 }} onClick={sofa}>
              <Typography variant="body2">Sofa</Typography>
            </Box>
            <Box sx={{ ...commonStyles, border: 1 }} onClick={storage}>
              <Typography variant="body2">Storage</Typography>
            </Box>
 
      </div>
      <div className="dinning-item">
      <div className="row me-2">
              {newDataSet.map((element, index) => {
                return (
                  <div className="col col-lg-4 col-md-4 my-1" key={index}>
                    {index < 6 && (
                      <DinningItem
                        productId={element.productId}
                        name={element.name}
                        price={element.defaultPrice}
                        imageUrl={element.defaultImageUrl}
                        newsUrl={element.url}
                        star={element.star}
                        review={element.review}
                        description={element.description}
                        reference={element.reference}
                        variants={element.variants}
                        images={element.images}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            
            <img
              src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img8_home2.jpg"  
              style={{ marginLeft: "50px", marginBottom: "0px", height:"auto" }}
            />
         
        {/* <div className="row">
          <div className="col-8">
            <div className="row">
              {newDataSet.map((element, index) => {
                return (
                  <div className="col-4 my-1" key={index}>
                    {index < 6 && (
                      <DinningItem
                        productId={element.productId}
                        name={element.name}
                        price={element.defaultPrice}
                        imageUrl={element.defaultImageUrl}
                        newsUrl={element.url}
                        star={element.star}
                        review={element.review}
                        description={element.description}
                        reference={element.reference}
                        variants={element.variants}
                        images={element.images}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col">
            <img
              src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img8_home2.jpg"  
              style={{ marginLeft: "0px", marginBottom: "0px" }}
            />
          </div>
        </div> */}
      </div>
      <img
        className="my-3 img-fluid"
        src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img4_home2.jpg" style={{maxWidth:"100%", height:"auto"}}
      />
    </div>
  );
};
DiningRoom.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default DiningRoom;
