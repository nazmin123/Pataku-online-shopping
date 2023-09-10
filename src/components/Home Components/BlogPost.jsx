import React, { useState, useEffect } from "react";
import BlogPostItem from "./BlogPostItem";
import { Divider, Box } from "@mui/material/";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "../../css/blog.css";
import axios from "axios";

const BlogPost = () => {
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
  const [blog, setBlog] = useState([]);

  // api to call for blog
  const getBlog = () => {
    axios
      .get("http://localhost:3000/blog")
      .then((res) => setBlog(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getBlog();
  }, []);
  const slideLeft = () => {
    var slider = document.getElementById("blog_row");
    slider.scrollLeft = slider.scrollLeft - 400;
  };
  const slideRight = () => {
    var slider = document.getElementById("blog_row");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  return (
    <div className="container">
      <div className="blog-heading">
        <p style={{ fontSize: "1.5rem" }}>
          <span style={{ fontWeight: "bold" }}>Our</span> Blog
          <span style={{ fontWeight: "bold" }}> Posts</span>
        </p>
        <Divider
          sx={{
            marginLeft: "1%",
            marginRight: "1%",
            width: "60%",
            marginTop: "1%",
          }}
        />
        <div className="row">
          <div className="col">
            <Box sx={{ ...commonStyles, border: 1 }} onClick={slideLeft}>
              <KeyboardArrowLeftIcon />
            </Box>
          </div>
          <div className="col">
            <Box sx={{ ...commonStyles, border: 1 }} onClick={slideRight}>
              <KeyboardArrowRightIcon />
            </Box>
          </div>
        </div>
      </div>
      <div className="blog-heading">
        <div id="blog_row">
          {blog.map((element) => {
            return (
              <div className="col" key={element.id}>
                <BlogPostItem {...element} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
