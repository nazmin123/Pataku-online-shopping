import React, { useEffect } from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
import "../../css/product.css";
import { useParams, useLocation } from "react-router-dom";
import ImageContainer1 from "../Other Components/ImageContainer1";

import { useProductContext } from "../../context/productContext";
import { useFilterContext } from "../../context/filterContext";
import ActiveFilter from "./ActiveFilter";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

const ProductComponent = () => {
  const isMatch = useMediaQuery("(max-width:840px)");
  const config = isMatch
    ? {
        display: "flex",
        flexDirection: "column",

        width: "100%",
      }
    : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      };

  const display = isMatch
    ? { display: "none", width: "100%" }
    : { display: "flex" };
  const location = useLocation();
  const name = location.state.title;
  const cat_name = location.state.cat_name;
  const subcat_name = location.state.subcat_name;
  const sub_subcat_name = location.state.sub_subcat_name;
  const { products1 } = useProductContext();

  const {
    getAllFilterProduct,
    activeFilter,
    filters: { brand, priceRange },
  } = useFilterContext();

  const { cat_id, subcat_id, sub_subcat_id } = useParams();

  const categoryCheck = () => {
    if (cat_id && subcat_id && sub_subcat_id) {
      let tempFilterProduct = [...products1];
      tempFilterProduct = tempFilterProduct.filter(
        (product) =>
          product.cat_id === parseInt(cat_id) &&
          product.subcat_id == parseInt(subcat_id) &&
          product.sub_subcat_id === parseInt(sub_subcat_id)
      );
      getAllFilterProduct(tempFilterProduct);
    } else if (cat_id && subcat_id) {
      let tempFilterProduct = [...products1];
      tempFilterProduct = tempFilterProduct.filter(
        (product) =>
          product.cat_id === parseInt(cat_id) &&
          product.subcat_id === parseInt(subcat_id)
      );
      getAllFilterProduct(tempFilterProduct);
    } else if (cat_id) {
      let tempFilterProduct = [...products1];
      tempFilterProduct = tempFilterProduct.filter(
        (product) => product.cat_id === parseInt(cat_id)
      );
      getAllFilterProduct(tempFilterProduct);
    }
  };

  useEffect(() => {
    categoryCheck();
  }, [products1, cat_id, subcat_id, sub_subcat_id, brand, priceRange]);

  return (
    <>
      <div className="image-container">
        <ImageContainer1
          cat_id={cat_id}
          subcat_id={subcat_id}
          sub_subcat_id={sub_subcat_id}
          cat_name={cat_name}
          subcat_name={subcat_name}
          sub_subcat_name={sub_subcat_name}
        />
      </div>

      <div className="container">
        <Box sx={config}>
          <Box sx={display}>
            <FilterSection
              cat_id={cat_id}
              subcat_id={subcat_id}
              sub_subcat_id={sub_subcat_id}
              name={name}
              cat_name={cat_name}
              subcat_name={subcat_name}
              sub_subcat_name={sub_subcat_name}
            />
          </Box>

          <Box>
            <Box>
            <h5>{name}</h5>
            <Sort />
              </Box>
            
            <Box sx={display}>
              {activeFilter.length > 0 && <ActiveFilter />}
            </Box>

            <ProductList />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ProductComponent;
