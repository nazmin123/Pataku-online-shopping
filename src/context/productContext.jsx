import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import reducer from "../reducer/productReducer";

const productContext1 = createContext();
const initialState = {
  products1: [],
  newArrivalProducts: [],
  livingchairs:[],
  sofaProduct:[],
  storageProduct:[],
  dinningTablesProduct:[],
  dinningSetsProduct:[],
  dinningChairsProduct:[]
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = "http://localhost:3000/products";

  const getProduct = async (url) => {
    try {
      const res = await axios.get(url);
      const product = await res.data;
     // console.log("product context", product);
      dispatch({ type: "SET_API_DATA", payload: product });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(`${api}`);
  }, []);

  return (
    <productContext1.Provider value={{ ...state, getProduct }}>
      {children}
    </productContext1.Provider>
  );
};
ProductProvider.propTypes = {
  children: PropTypes.any,
};

// custom hooks
const useProductContext = () => {
  return useContext(productContext1);
};

export { ProductProvider, productContext1, useProductContext };
