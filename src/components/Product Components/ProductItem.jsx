import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "@emotion/styled";
import { useCartContext } from "../../context/cartContext";
import AddItemToCartDialog from "../Cart Components/AddItemToCartDialog";

const ProductItem = (element) => {
  const [hover, setHover] = useState(false);
  const { addToCart } = useCartContext();
  const [displayContent, setDisplayContent] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };


  const visible = () => {
    setDisplayContent(true);
  };
  const inVisible = () => {
    setDisplayContent(false);
  };
  const Button = styled.button`
  padding: 5px;

  border-radius: 50%;
  border: 1.4px solid #369599;

  &:hover {
    background-color: #369599;
    color: white;
  }
`;

  const { productId, name, defaultPrice, defaultImageUrl,star,review,description,reference,variants,images} = element;
  return (
     <NavLink to={`/singleproduct/${productId}`} style={{textDecoration:"none"}}  state={{ productId, name,reference,star,review,description,variants,images,defaultImageUrl}} >
    <div className="container my-2 mx-2" 
    >
    <div
      className="card"
      style={{ width:"12rem", border: "none" }}
      onMouseEnter={onHover} onMouseLeave={onLeave}
    >
     
     
      <img src={defaultImageUrl} className="card-img-top" alt="..." />
    
     
      <div className="card-img-overlay">
        <span className="badge bg-secondary">New</span>
        { hover &&  <div className="d-flex justify-content-end align-items-end" style={{height:"68%"}}>
          <Button onClick={() => {
                    addToCart(
                      parseInt(productId),
                      1,
                      defaultPrice,
                      variants[0].size,
                      name,
                      defaultImageUrl
                    );
                    visible();
                  }}>
            <ShoppingCartOutlinedIcon />
          </Button>
          </div>
}
     
      </div>
     
      <div className="card-body" >
        <p className="card-text" style={{color:"black"}}>{name}</p>
        <p className="card-text">
          <small className="text-muted">${defaultPrice}</small>
        </p>
      </div>
     
    </div>
    {displayContent && (
          <AddItemToCartDialog
            inVisible={inVisible}
            visible={visible}
            productId={productId}
            size={variants[0].size}
          />
        )}
          
  </div>
  </NavLink>
  )
}

export default ProductItem
