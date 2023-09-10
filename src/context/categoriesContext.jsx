import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import reducer from "../reducer/categoriesReducer";

const CategoriesContext = createContext();

const initialState = {
    categories: [],
    sub_categories: [],
    sub_sub_categories: []
  };

  export const CategoriesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const host="http://localhost:3000";


    const getCategories = () => {
        axios.get(`${host}/categories`)
        .then(res =>  dispatch({ type: "SET_CATEGORIES_API_DATA", payload: res.data }) )
        .catch(error => console.log(error));
       
    
     };
       // api to call for categories
       const getSubCategories = () => {
      
             axios.get(`${host}/sub_categories`)
           .then(res =>  dispatch({ type: "SET_SUB_CATEGORIES_API_DATA", payload: res.data }) )
           .catch(error => console.log(error));
         };
          // api to call for categories
       const getSubSubCategories =  () => {
           axios.get(`${host}/sub_sub_categories`)
           .then(res =>  dispatch({ type: "SET_SUB_SUB_CATEGORIES_API_DATA", payload: res.data }))
           .catch(error => console.log(error));
         };
         useEffect(() => {
           getCategories();
           getSubCategories();
           getSubSubCategories()
         }, []);
    return (
        <CategoriesContext.Provider
          value={{
            ...state
          
          }}
        >
          {children}
        </ CategoriesContext.Provider>
      );
  };
  CategoriesContextProvider.propTypes = {
    children: PropTypes.any,
  };
  export const useCategoriesContext = () => {
    return useContext(CategoriesContext);
  };