import React from "react";
import Quantity from "../Product Components/Quantity";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../context/cartContext";
import PropTypes from "prop-types";
import "../../css/cart.css";

const CartItem = ({
  productId,
  amount,
  price,
  size,
  name,
  defaultImageUrl,
}) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext();
  return (
    <div>
      <div className="card my-2 " style={{ border: "none" }}>
        <div className="card-body">
          <div className="row  d-flex   justify-content-between m-0 p-0">
            <div className="col-2 m-0 p-0" style={{ minHeight: "100%" }}>
              <img
                src={defaultImageUrl}
                className="img-fluid rounded-start"
                style={{ minHeight: "80%", minWidth: "100%" }}
              />
            </div>
            <div className="col-8 m-0 p-0">
              <div className="cart-item-title">
                <div>
                  <p className="card-text m-0">
                    <small>{name}</small>
                  </p>
                  <p className="card-text text-muted m-0">
                    {" "}
                    <small>${price}</small>
                  </p>
                  <p className="card-text text-muted m-0">
                    <small>Dimenension:{size}</small>
                  </p>
                </div>
                <div className="cart-item-subtitle mx-2 my-2">
                <div>
                  <Quantity
                    amount={amount}
                    setDecrease={() => setDecrease(productId)}
                    setIncrease={() => setIncrease(productId)}
                  />
                </div>

                <div >${price * amount}</div>
                <div  onClick={() => removeItem(productId)}>
                  <DeleteIcon />
                </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  productId: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
  size: PropTypes.string,
  name: PropTypes.string,
  defaultImageUrl: PropTypes.string,
};

export default CartItem;
