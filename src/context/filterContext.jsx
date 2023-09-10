import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";
import PropTypes from "prop-types";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "relevence",
  grid_view: true,
  activeFilter:[],
  priceArray:[],
  filters: {
    brand: "",
    priceRange:"",
},
};

export const FilterContextProvider = ({ children }) => {
  const { products1 } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);


  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
  

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
   // to remove the individual item from cart
   const removeItem = (key) => {
    dispatch({ type: "REMOVE_ACTIVE_FILTER_ITEM", payload: key});
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
   
  }, [state.sorting_value, state.filters]);
  // useEffect(() => {
  //   dispatch({ type: "FILTER_PRODUCTS" });
  //   dispatch({ type: "SORTING_PRODUCTS" });
  // }, [state.sorting_value]);

  const getAllFilterProduct = (product) => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: { products1, product } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
        removeItem,
        getAllFilterProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
FilterContextProvider.propTypes = {
  children: PropTypes.any,
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
