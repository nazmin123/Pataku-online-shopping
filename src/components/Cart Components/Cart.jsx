import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Divider } from "@mui/material";
import CartItem from "./CartItem";
import "../../css/cart.css"
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, total_item, total_price, shipping_fee } = useCartContext();
  console.log("cart", cart);
  return (
    
      <div className="container">
        <div className="main-container ">
          
            <div className="shopping-cart me-3 my-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">SHOPPING CART</h4>
                  <Divider />
                  {cart &&
                    cart.map((curElem) => {
                      return <CartItem key={curElem.productId} {...curElem} />;
                    })}
                </div>
              </div>
            </div>
        
       
          <div className="checkout my-4">
            <div className="card">
              <div className="card-body ">
                <div className="d-flex justify-content-between">
                  <p className="card-text  m-0 ">
                    <small>
                      <strong>{total_item} items</strong>
                    </small>
                  </p>
                  <p className="card-text text-muted m-0 ">
                    <small>${total_price}</small>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card-text m-0 ">
                    <small>
                      <strong>shipping</strong>
                    </small>
                  </p>
                  <p className="card-text text-muted m-0 ">
                    <small>${shipping_fee}</small>
                  </p>
                </div>
                <div className="my-2">
                  <Divider />
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card-text m-0 ">
                    <small>
                      <strong>Total (tax excl.)</strong>
                    </small>
                  </p>
                  <p className="card-text text-muted m-0 ">
                    <small>${shipping_fee + total_price}</small>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card-text  m-0 ">
                    <small>
                      <strong>Taxes</strong>
                    </small>
                  </p>
                  <p className="card-text text-muted m-0 ">
                    <small>$0.00</small>
                  </p>
                </div>
                <div className="my-2">
                  <Divider />
                </div>
                <div className="d-flex justify-content-center my-3">
                  <NavLink to="/checkout">
                  <button
                    type="button"
                    className="btn btn-primary border-0"
                    style={{ backgroundColor: "#369599" }}
                  >
                    PROCEED TO CHECKOUT
                  </button>
                  </NavLink>
                 
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
     
  );
};

export default Cart;
