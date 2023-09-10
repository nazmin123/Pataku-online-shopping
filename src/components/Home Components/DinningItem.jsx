import React from 'react';
import PropTypes from "prop-types";
import "../../css/dinning.css"
import { NavLink } from 'react-router-dom';

const DinningItem = (props) => {
    let {productId,name, price, imageUrl,star,review,description,reference,variants,images} = props;
  return (
    <NavLink  className="mx-1" to={`/singleproduct/${productId}`} style={{textDecoration:"none"}}  state={{ productId, name,reference,star,review,description,variants,images,defaultImageUrl:imageUrl}} >
<div className="card my-2" style={{minWidth:'250px', maxWidth:"400px",minHeight:'auto', border:"none", flex:1}}>
  <div className="row ">
    <div className="col-4 ">
      <img src={imageUrl} className="img-fluid rounded-start"/>
    </div>
    <div className="col-6">
      <div className="card-body">
        
        <p className="card-text" style={{fontSize:'13px', color:"black"}}>{name}</p>
        <p className="card-text"><small className="text-muted">${price}</small></p>
      </div>
    </div>
  </div>
</div>
</NavLink>
  );
}
DinningItem.propTypes = {
  productId:PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    star: PropTypes.number,
    review: PropTypes.number,
    description: PropTypes.string,
    reference:PropTypes.string,
    variants: PropTypes.array,
    images: PropTypes.array
  }
export default DinningItem
