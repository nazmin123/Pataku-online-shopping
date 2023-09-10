import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useCategoriesContext } from "../../context/categoriesContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { NavLink } from "react-router-dom";
import "../../css/toolbar.css";

import {
  Box,
  AppBar,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function Toolbar1() {
  const { categories, sub_categories, sub_sub_categories } =
    useCategoriesContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#232323" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" component="div">
            Category
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className="container">
          {mobileOpen &&
            categories &&
            categories.map((category) => {
              const filteredSubCategories = sub_categories.filter(
                (subCategory) => subCategory.cat_id === category.cat_id
              );
              const hasSubCategories = filteredSubCategories.length > 0;
              return (
                <Accordion
                  className="my-20"
                  key={category.cat_id}
                  sx={{
                    backgroundColor: "#232323",
                    color: "white",
                    borderColor: "white",
                    square: false,
                  }}
                >
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    expandIcon={
                      hasSubCategories && (
                        <AddCircleOutlineIcon sx={{ color: "white" }} />
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ color: "#ffffff", borderColor: "white" }}
                  >
                    <NavLink
                      to={`/categories/${category.cat_id}`}
                      state={{ title: category.name, cat_name: category.name }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Typography onClick={handleDrawerToggle}>
                        {category.name}
                      </Typography>
                    </NavLink>
                  </AccordionSummary>
                  <AccordionDetails>
                    {hasSubCategories &&
                      filteredSubCategories.map((subCategory) => {
                        const filteredSubSubCategories =
                          sub_sub_categories.filter(
                            (subSubCategory) =>
                              subSubCategory.cat_id === subCategory.cat_id &&
                              subSubCategory.subcat_id === subCategory.subcat_id
                          );
                        return (
                          <Accordion
                            disableGutters
                            key={subCategory.id}
                            sx={{
                              backgroundColor: "#232323",
                              color: "white",
                              borderColor: "#ffffff",
                            }}
                          >
                            <AccordionSummary
                              sx={{ border: "none" }}
                              expandIcon={
                                <AddCircleOutlineIcon sx={{ color: "white" }} />
                              }
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <NavLink
                                to={`/sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}`}
                                state={{
                                  title: subCategory.name,
                                  cat_name: category.name,
                                  subcat_name: subCategory.name,
                                }}
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <Typography onClick={handleDrawerToggle}>
                                  {subCategory.name}
                                </Typography>
                              </NavLink>
                            </AccordionSummary>
                            <AccordionDetails>
                              {filteredSubSubCategories.map(
                                (subSubCategory, index) => {
                                  return (
                                    <NavLink
                                      key={index}
                                      to={`/sub_sub_categories/${subSubCategory.cat_id}/${subSubCategory.subcat_id}/${subSubCategory.sub_subcat_id}`}
                                      state={{
                                        title: subSubCategory.name,
                                        subcat_name: subCategory.name,
                                        cat_name: category.name,
                                        sub_subcat_name: subSubCategory.name,
                                      }}
                                      style={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        color: "white",
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          color: "white",
                                          "&:hover": {
                                            color: "#369599",
                                          },
                                        }}
                                        onClick={handleDrawerToggle}
                                      >
                                        {subSubCategory.name}
                                      </Typography>
                                    </NavLink>
                                  );
                                }
                              )}
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </div>
      </AppBar>
    </Box>
  );
}
