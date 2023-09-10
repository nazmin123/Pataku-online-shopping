import React from "react";
import PropTypes from "prop-types";


const FeaturedCategoriesItem = (props) => {
 
 // console.log("subcategories-item", props)
  return (
    <div className="card my-2 mx-2" style={{minWidth:'210px', minHeight:'auto', border:"none"}}>
  <div className="row ">
    <div className="col">
      <img className="img-fluid" src={props.imageUrl}/>
    </div>
    <div className="col-md-7">
        
      
     
        <p className="text-start text mt-0 mb-0 pt-0 pb-0 text-uppercase fw-bold">{props.name}</p>
        {props.items.map((element) => {
          return (
            <div  key={element.itemId}>
              <p  className="text text-muted  text-start mt-0 mb-0 pt-1 pb-0"> {element.itemName}</p>
            </div>
          );
        })}

      


 </div>
  </div>
</div>
  );
};
FeaturedCategoriesItem.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  imageUrl: PropTypes.string,
}
  

export default FeaturedCategoriesItem;
