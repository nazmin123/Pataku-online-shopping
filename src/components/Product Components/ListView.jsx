import React  ,{useState} from 'react'
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import "../../css/product.css"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "@emotion/styled";
import { useCartContext } from "../../context/cartContext";
import AddItemToCartDialog from "../Cart Components/AddItemToCartDialog";

const ListView = ({products}) => {
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
 // const { productId, name, star,review,description,reference,variants,images} = products;
  return (
    <>
        <div className='container me-0 mt-3'  onMouseEnter={onHover} onMouseLeave={onLeave}>
       {products.map((element) => {
        return   <NavLink to={`/singleproduct/${element.productId}`} style={{textDecoration:"none"}} key={element.productId} state={{productId:element.productId, name:element.name,reference:element.reference,star:element.star,review:element.review,description:element.description,variants:element.variants,images:element.images,defaultImageUrl:element.defaultImageUrl}} >
<div className="card mb-3" style={{maxWidth: "500px", height:"auto"}}  >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={element.defaultImageUrl} className="img-fluid rounded-start" alt="..."/>
            <div className="card-img-overlay">
        <span className="badge bg-secondary">New</span>
        { hover &&  <div className="d-flex justify-content-start align-items-end" style={{height:"98%"}}>
          <Button onClick={() => {
                    addToCart(
                      parseInt(element.productId),
                      1,
                      element.defaultPrice,
                      element.variants[0].size,
                     element.name,
                     element.defaultImageUrl
                    );
                    visible();
                  }}>
            <ShoppingCartOutlinedIcon />
          </Button>
          </div>
}
     
      </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <h4 className="card-title">${element.defaultPrice}</h4>
              <p className="card-text">{element.description}</p>
            
            </div>
          </div>
        </div>
        {displayContent && (
            <AddItemToCartDialog
              inVisible={inVisible}
              visible={visible}
              productId={element.productId}
              size={element.variants[0].size}
            />
          )}
      </div>
        </NavLink>  
    
    })}
 
    </div>
    </>

   

  )
}
ListView.propTypes ={
    products: PropTypes.array
}


export default ListView;
