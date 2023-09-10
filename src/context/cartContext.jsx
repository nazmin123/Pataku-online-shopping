import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";
import PropTypes from "prop-types";
import axios from "axios";

const CartContext = createContext();
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("patakuCart");
 // console.log("patakuCart", localCartData)
  if (localCartData === null || localCartData === undefined) {
    console.log("returning empty array", localCartData)
    return [];
  } else {
    return   JSON.parse(localCartData);
  }
   
};
const initialState = {
  // cart: [],
  cart: getLocalCartData(),
 // cart: [],
  total_item: "",
  total_price: "",
  shipping_fee: 7,
};

const CartProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (productId, amount, price, size, name,defaultImageUrl) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { productId, amount, price, size, name ,defaultImageUrl},
    });
  };
    // increment and decrement the product

    const setDecrease = (productId) => {
      dispatch({ type: "SET_DECREMENT", payload: productId});
    };
  
    const setIncrease = (productId) => {
      dispatch({ type: "SET_INCREMENT", payload: productId });
    };
    // to remove the individual item from cart
    const removeItem = (id) => {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    //to get cart item

    const removeAllItem=()=>{
      dispatch({type:"REMOVE_ALL_ITEM"})
    };


useEffect(() => {
   dispatch({ type: "CART_TOTAL_ITEM" });
  dispatch({ type: "CART_TOTAL_PRICE" });
 

  localStorage.setItem("patakuCart", JSON.stringify(state.cart));
}, [state.cart]);
// useEffect(() => {
//  localStorage.clear();


// }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        removeAllItem,
        setDecrease,
        setIncrease

      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

CartProvider.propTypes = {
  children: PropTypes.any,
};
