import React from 'react'
import { useFilterContext } from "../../context/filterContext";
import PropTypes from "prop-types";
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const { filter_products, grid_view } = useFilterContext();
    

    if(grid_view ===true){
      
        return <GridView products={filter_products} />;
        
    }
    else{
        return <ListView products={filter_products} />; 
    }


}
ProductList.propTypes ={
    productList: PropTypes.array
}

export default ProductList
