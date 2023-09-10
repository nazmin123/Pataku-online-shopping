import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BlogPostItem = (props) => {
  const navigate = useNavigate();
  //const [newProps, setNewProps]=useNavigate({});

  // setNewProps[props]
  return (
    <div className="card mx-2 my-2" style={{ width: "27rem", border: "none" }}>
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>

        <div className="hr"></div>
        <button
          className="btn bg-transparent"
          onClick={() => {
            navigate("/singleblog", {
              state: {
                title: props.title,
                description: props.description,
                date: props.date,
                author: props.author,
                category: props.category,
                imageUrl: props.imageUrl,
              },
            });
          }}
        >
          Read More
        </button>
        {/* <Link to="/singleblog"> Read More</Link> */}
      </div>
    </div>
  );
};
BlogPostItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default BlogPostItem;
