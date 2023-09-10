import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


const ImageContainer1 = ({
  cat_id,
  subcat_id,
  sub_subcat_id,
  cat_name,
  subcat_name,
  sub_subcat_name,
}) => {
  return (
    <div className="main"style={{justifyContent:"space-between", display:"flex", flexDirection:"row", width:"67%",height:"auto"}} >
      <div className="image-container" >
        <p style={{ fontSize: "1 rem", marginTop: "75px", marginLeft: "20px" }}>
          <NavLink to="/" style={{ color: "grey", textDecoration: "none" }}>
            {" "}
            Home /
          </NavLink>
          {/* <span style={{ fontWeight: "bold" }}>{location.pathname}</span> */}
          {cat_id && subcat_id && sub_subcat_id ? (
            <>
              <NavLink
                className="mx-1"
                to={`/categories/${cat_id}`}
                state={{ title: cat_name, cat_name: cat_name }}
                style={{ textDecoration: "none", color: "grey" }}
              >
                {cat_name} /
              </NavLink>
              <NavLink
                className="mx-1"
                to={`/sub_categories/${cat_id}/${subcat_id}`}
                state={{ title: subcat_name , cat_name: cat_name, subcat_name: subcat_name }}
                style={{ textDecoration: "none", color: "grey" }}
              >
                {subcat_name} /
              </NavLink>
              {sub_subcat_name}
            </>
          ) : cat_id && subcat_id ? (
            <>
              {" "}
              <NavLink
                className="mx-1"
                to={`/categories/${cat_id}`}
                state={{ title: cat_name , cat_name: cat_name}}
                style={{ textDecoration: "none", color: "grey" }}
              >
                {cat_name} /
              </NavLink>
              {subcat_name}
            </>
          ) : cat_id ? (
            <NavLink
              to={`/categories/${cat_id}`}
              state={{ title: cat_name , cat_name: cat_name}}
              style={{ textDecoration: "none" }}
            >
              {cat_name}
            </NavLink>
          ) : (
            { cat_name }
          )}
        </p>
        </div>
        <div className="image">
          <img src="../sofa.png" width={400} height={150} />
        </div>
     
    </div>
  );
};
ImageContainer1.propTypes = {
  cat_id: PropTypes.string,
  subcat_id: PropTypes.string,
  sub_subcat_id: PropTypes.string,
  cat_name: PropTypes.string,
  subcat_name: PropTypes.string,
  sub_subcat_name: PropTypes.string,
};
export default ImageContainer1;
