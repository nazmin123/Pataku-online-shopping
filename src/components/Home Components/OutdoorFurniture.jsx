import React, { useState, useEffect } from "react";
import "../../css/dinning.css";
import {Divider, Box, Typography} from "@mui/material/";

import DinningItem from "./DinningItem";
import PropTypes from "prop-types";
import { useProductContext } from "../../context/productContext";
const OutdoorFurniture = () => {
  const {  dinningTablesProduct,dinningSetsProduct,dinningChairsProduct} = useProductContext();
  const [newDataSet, setNewDataSet] = useState([dinningTablesProduct]);
  const commonStyles = {
   
    p:1,
     color:"#727272",
    width: '8.5rem',
    height: '2rem',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    m:0.5,
    '&:hover': {
      borderColor: '#369599',
      color:"#369599"
     
    },
  };

  const livingChairs = () => {
    setNewDataSet(dinningTablesProduct);
  };
  const sofa = () => {
    setNewDataSet(dinningSetsProduct);
  };
  const storage = () => {
    setNewDataSet(dinningChairsProduct);
  };
  useEffect(() => {
   
    setNewDataSet(dinningTablesProduct);
    // eslint-disable-next-line
}, [dinningTablesProduct])
  return (
    <div className="container">
      <div className="dinning-heading">
        <p style={{ fontSize: "1.5 rem" }}>
          <span style={{ fontWeight: "bold" }}>Outdoor</span> Furniture
        </p>
        <Divider
          sx={{
            marginLeft: "2%",
            marginRight: "2%",
            width: "60%",
           
          }}
        />
        <Box sx={{ ...commonStyles, border: 1}}  onClick={livingChairs}>
             <Typography variant="body2"> Dinning tables</Typography>
          </Box>
          <Box sx={{ ...commonStyles, border: 1}} onClick={sofa} >
             <Typography variant="body2">Dinning sets</Typography>
          </Box>
          <Box sx={{ ...commonStyles, border: 1}}   onClick={storage}>
             <Typography variant="body2">Dinning Chairs</Typography>
          </Box>
 
      </div>
      <div className="dinning-item">
     
      <div className="row">
        {newDataSet.map((element, index) => {
          return (
            <div className="col my-2 col-lg-4 col-md-4" key={index}>
                  { index <6 && <DinningItem
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
          }
            </div>
          );
        })}
      </div>
      
      
      <img src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img5_home2.jpg" style={{marginLeft: '20px', marginBottom: '20px'}}/>
    
      </div>
  
      
    </div>
  );
}
OutdoorFurniture.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
}
export default OutdoorFurniture;
