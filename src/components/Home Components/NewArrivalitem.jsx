import React,{useState} from "react";
import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCartContext } from "../../context/cartContext";
import AddItemToCartDialog from "../Cart Components/AddItemToCartDialog";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 5px;

  border-radius: 50%;
  border: 1.4px solid #369599;

  &:hover {
    background-color: #369599;
    color: white;
  }
`;
const NewArrivalitem = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  const { addToCart } = useCartContext();
  const [displayContent, setDisplayContent] = useState(false);

  const visible = () => {
    setDisplayContent(true);
  };
  const inVisible = () => {
    setDisplayContent(false);
  };
  let { productId,name, price, imageUrl,size } = props;

  return (
    <div className="container" style={{overflowY:"hidden"}}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}>
      <div
        className="card"
        style={{ maxHeight: "300px", border: "none", minWidth: "200px" }}
      >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-img-overlay" >
          <span className="badge bg-secondary">New</span>
         { hover &&  <div className="d-flex justify-content-end align-items-end" style={{height:"80%"}}>
          <Button onClick={() => {
                    addToCart(
                      parseInt(productId),
                      1,
                      price,
                      size,
                      name,
                      imageUrl
                    );
                    visible();
                  }}>
            <ShoppingCartOutlinedIcon />
          </Button>
          </div>
}
        </div>
        <div className="card-body">
          <p className="card-text">{name}</p>
          <p className="card-text">
            <small className="text-muted">${price}</small>
          </p>
        </div>
      </div>
      {displayContent && (
          <AddItemToCartDialog
            inVisible={inVisible}
            visible={visible}
            productId={productId}
            size={size}
          />
        )}
    </div>
  );
};
NewArrivalitem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  size:PropTypes.string,
  productId:PropTypes.string
};
export default NewArrivalitem;
