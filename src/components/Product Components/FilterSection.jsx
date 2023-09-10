import React, { useEffect, useState } from "react";
import "../../css/product.css";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { useFilterContext } from "../../context/filterContext";
import { useCategoriesContext } from "../../context/categoriesContext";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";

import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const calculateRangesAndOccurence = (arr) => {
  const rangeMap = new Map();

  arr.sort((a, b) => a - b);

  let start = arr[0];
  let end = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - end <= 1) {
      end = arr[i];
      count++;
    } else {
      const range = `${Math.floor(start)}-${Math.ceil(end)}`;
      rangeMap.set(range, count);
      start = arr[i];
      end = arr[i];
      count = 1;
    }
  }
  const range = `${Math.floor(start)}-${Math.ceil(end)}`;
  rangeMap.set(range, count);

  return rangeMap;
};

const FilterSection = ({
  cat_id,
  subcat_id,
  sub_subcat_id,
  name,
  cat_name,
  subcat_name,
}) => {
  //const [activeFilter, setActiveFilter]=useState([]);

  const [tempCategoriesFilterProduct, setCategoriesTempFilterProduct] =
    useState([]);
  const [tempSubCategoriesFilterProduct, setSubCategoriesTempFilterProduct] =
    useState([]);

  const {
    filters: { brand, priceRange },
    updateFilterValue,
    filter_products,
    clearFilters,
    priceArray,
    activeFilter,
  } = useFilterContext();
  
  console.log("active filter",activeFilter)

  const { sub_categories, sub_sub_categories } = useCategoriesContext();

  const rangeOccurences = calculateRangesAndOccurence(priceArray);

  useEffect(() => {
    if (cat_id && subcat_id && sub_subcat_id) {
      setSubCategoriesTempFilterProduct([]);
      setCategoriesTempFilterProduct([]);
    } else if (cat_id && subcat_id) {
      const subFilter = sub_sub_categories.filter(
        (subSubCategory) =>
          subSubCategory.cat_id === parseInt(cat_id) &&
          subSubCategory.subcat_id === parseInt(subcat_id)
      );
      setSubCategoriesTempFilterProduct(subFilter);
    } else if (cat_id) {
      const filter = sub_categories.filter(
        (subCategory) => subCategory.cat_id === parseInt(cat_id)
      );
      setCategoriesTempFilterProduct(filter);
    }
  }, [cat_id, subcat_id, sub_subcat_id]);

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = [...new Set(newVal)]);
  };
  const brandData = getUniqueData(filter_products, "brand");

  return (
    <div className="container my-2">
      <div className="Categories my-3">
        <div className="card" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
          {cat_id && subcat_id
            ? tempSubCategoriesFilterProduct &&
              tempSubCategoriesFilterProduct.map((subSubCategory, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/sub_sub_categories/${subSubCategory.cat_id}/${subSubCategory.subcat_id}/${subSubCategory.sub_subcat_id}`}
                    state={{
                      title: subSubCategory.name,
                      subcat_name: subcat_name,
                      cat_name: cat_name,
                      sub_subcat_name: subSubCategory.name,
                    }}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        "&:hover": {
                          color: "#369599",
                        },
                      }}
                      className="card-text ms-3 mb-2"
                    >
                      {" "}
                      {subSubCategory.name}{" "}
                    </Typography>
                  </NavLink>
                );
              })
            : tempCategoriesFilterProduct &&
              tempCategoriesFilterProduct.map((subCategory, index) => {
                const filteredSubSubCategories = sub_sub_categories.filter(
                  (subSubCategory) =>
                    subSubCategory.cat_id === subCategory.cat_id &&
                    subSubCategory.subcat_id === subCategory.subcat_id
                );
                return (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<AddIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <NavLink
                        to={`/sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}`}
                        state={{
                          title: subCategory.name,
                          subcat_name: subCategory.name,
                          cat_name: cat_name,
                        }}
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            "&:hover": {
                              color: "#369599",
                            },
                          }}
                        >
                          {subCategory.name}
                        </Typography>
                      </NavLink>
                    </AccordionSummary>
                    <AccordionDetails>
                      {filteredSubSubCategories.map((subSubCategory, index) => {
                        return (
                          <NavLink
                            key={index}
                            to={`/sub_sub_categories/${subSubCategory.cat_id}/${subSubCategory.subcat_id}/${subSubCategory.sub_subcat_id}`}
                            state={{
                              title: subSubCategory.name,
                              subcat_name: subcat_name,
                              cat_name: cat_name,
                              sub_subcat_name: subSubCategory.name,
                            }}
                            style={{
                              textDecoration: "none",
                              cursor: "pointer",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                "&:hover": {
                                  color: "#369599",
                                },
                              }}
                            >
                              {subSubCategory.name}
                            </Typography>
                          </NavLink>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
        </div>
      </div>
      <div className="Filter">
        <div className="card" style={{ width: "16rem" }}>
          <div className="card-body">
            <h5 className="card-title">Filter By</h5>
            <Button
              variant="contained"
              startIcon={<ClearIcon />}
              onClick={clearFilters}
              style={{ backgroundColor: "#369599" }}
            >
              clear all
            </Button>

            { activeFilter.length>0 ? activeFilter.map((active, index) => {
              return (
                <div key={index}>
                  {active.key === "brand" ? (
                    " "
                  ) : (
                    <div className="brand-name">
                      <h5 className="card-text">Brand</h5>

                      <div className="card-text">
                        {brandData.map((curElem, index) => {
                          return (
                            <div
                              className={`${
                                curElem === brand ? "active" : ""
                              } form-check`}
                              key={index}
                              onChange={updateFilterValue}
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                name="brand"
                                id="flexRadioDefault1"
                                value={curElem}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                {curElem}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }): (         <div className="brand-name">
            <h5 className="card-text">Brand</h5>

            <div className="card-text">
              {brandData.map((curElem, index) => {
                return (
                  <div
                    className={`${
                      curElem === brand ? "active" : ""
                    } form-check`}
                    key={index}
                    onChange={updateFilterValue}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="brand"
                      id="flexRadioDefault1"
                      value={curElem}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {curElem}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>) }

          
          { activeFilter.length>0 ? activeFilter.map((active, index) => {
              return (
                <div key={index}>
                  {active.key === "priceRange" ? (
                    " "
                  ) : (
                    <div className="price-range">
                    <h5 className="card-text">Price</h5>
      
                    {Array.from(rangeOccurences.entries()).map(([range, count]) => {
                      return (
                        <div
                          className={`${
                            range === priceRange ? "active" : ""
                          } form-check`}
                          key={range}
                          onChange={updateFilterValue}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="priceRange"
                            id="flexRadioDefault2"
                            value={range}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            {range}({count})
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  )}
                </div>
              );
            }): (            <div className="price-range">
            <h5 className="card-text">Price</h5>

            {Array.from(rangeOccurences.entries()).map(([range, count]) => {
              return (
                <div
                  className={`${
                    range === priceRange ? "active" : ""
                  } form-check`}
                  key={range}
                  onChange={updateFilterValue}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="priceRange"
                    id="flexRadioDefault2"
                    value={range}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    {range}({count})
                  </label>
                </div>
              );
            })}
          </div>) }
            {/* <div className="price-range">
              <h5 className="card-text">Price</h5>

              {Array.from(rangeOccurences.entries()).map(([range, count]) => {
                return (
                  <div
                    className={`${
                      range === priceRange ? "active" : ""
                    } form-check`}
                    key={range}
                    onChange={updateFilterValue}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="priceRange"
                      id="flexRadioDefault2"
                      value={range}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      {range}({count})
                    </label>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
      <img
        className="my-3"
        src="https://demo.posthemes.com/pos_pataku/layout2/modules/ps_advertising/img/fixtures/advertising.jpg"
      />
    </div>
  );
};
FilterSection.propTypes = {
  cat_id: PropTypes.string,
  subcat_id: PropTypes.string,
  sub_subcat_id: PropTypes.string,
  name: PropTypes.string,
  cat_name: PropTypes.string,
  subcat_name: PropTypes.string,
  sub_subcat_name: PropTypes.string,
};

export default FilterSection;
