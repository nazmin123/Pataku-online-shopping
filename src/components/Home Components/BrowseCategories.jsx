import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useCategoriesContext } from "../../context/categoriesContext";

import { NavLink } from "react-router-dom";

const BrowseCategories = () => {
  const { categories, sub_categories, sub_sub_categories } =
    useCategoriesContext();

  const [mobileOpen, setMobileOpen] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [hoverWithId, setHoverWithId] = useState();
  const handleCategoryHover1 = (id) => {
    setHoverWithId(id);

  };

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="#000000"
              aria-label="menu"
              sx={{ mr: 2, color: "#000000" }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="#000000" component="div">
              BROWSE CATEGORIES
            </Typography>
           
          </Toolbar>
        
          <ul className="list-group mx-3">
            {mobileOpen &&
              categories &&
              categories.map((category) => {
                const filteredSubCategories = sub_categories.filter(
                  (subCategory) => subCategory.cat_id === category.cat_id
                );

                const hasSubCategories = filteredSubCategories.length > 0;

                return (
                  <div
                    key={category.cat_id}
                    className="category"
                    onMouseEnter={() => handleCategoryHover1(category.cat_id)}
                  >
                    <div>
                      <NavLink
                        to={`/categories/${category.cat_id}`}
                        state={{
                          title: category.name,
                          cat_name: category.name,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <List
                          className="mx-4"
                          sx={{
                            listStyleType: "disc",
                            pl: 1,
                            padding: "0px",
                            color: "black",
                            "&:hover": {
                              color: "#369599",
                            },
                          }}
                        >
                          <ListItem sx={{ display: "list-item" }}>
                            <ListItemText primary={category.name} />

                            <Divider />
                          </ListItem>
                        </List>

                        {/* <ul className="list-group">
                        <li className="list-group-item">{category.name}</li>
                      </ul> */}
                      </NavLink>
                    </div>

                    <div className="line"></div>

                    {/* onHover part "true" && "id which has >0 subcategories"   */}

                    {hasSubCategories && hoverWithId === category.cat_id && (
                      <div
                        style={{
                          position: "absolute",

                          top: "45%",

                          left: "30%",

                          width: "500px",

                          height: "400px",

                          background: "white",

                          border: "1px solid lightgray",

                          padding: "10px",

                          zIndex: "999",
                        }}
                      >
                        {/* subcategories display here */}

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {/* filtering sub-sub-categories */}

                          {filteredSubCategories.map((subCategory, index) => {
                            const filteredSubSubCategories =
                              sub_sub_categories.filter(
                                (subSubCategory) =>
                                  subSubCategory.cat_id ===
                                    subCategory.cat_id &&
                                  subSubCategory.subcat_id ===
                                    subCategory.subcat_id
                              );

                           

                            return (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                                key={index}
                              >
                                <div key={index} style={{ width: "100%"}}>
                                  <NavLink
                                    to={`/sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}`}
                                    state={{
                                      title: subCategory.name,
                                      cat_name: category.name,
                                      subcat_name: subCategory.name,
                                    }}
                                    style={{ textDecoration:"none", color:"black" }}
                                  >
                                    <p style={{fontWeight:"bold"}}>
                                      {/* subcategories display here */}
                                      {/* {subCategory.name}-{subCategory.subcat_id} */}
                                      {subCategory.name}
                                    </p>
                                  </NavLink>

                                  {/* sub-sub-categories display here */}

                                  {filteredSubSubCategories.map(
                                    (subSubCategory, index) => {
                                      return (
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",

                                            flexDirection: "column",
                                          }}
                                        >
                                          <NavLink
                                            to={`/sub_sub_categories/${subSubCategory.cat_id}/${subSubCategory.subcat_id}/${subSubCategory.sub_subcat_id}`}
                                            state={{
                                              title: subSubCategory.name,
                                              subcat_name: subCategory.name,
                                              cat_name: category.name,
                                              sub_subcat_name:
                                                subSubCategory.name,
                                            }}
                                            
                                            style={{
                                              color: "black",
                                              textDecoration: "none",
                                            }}
                                          >
                                         <p>  {subSubCategory.name} </p>  
                                          </NavLink>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>

                                <div></div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </ul>
        </AppBar>
      </Box>
    </>
  );
};
export default BrowseCategories;
