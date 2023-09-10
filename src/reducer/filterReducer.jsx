const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      let { product } = action.payload;
      let priceArr = product.map((curElem) => curElem.defaultPrice);

      //console.log("LOAD_FILTER_PRODUCTS", product, product);
      return {
        ...state,
        filter_products: [...product],
        all_products: [...product],
        priceArray: priceArr,
       
      };
    }

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE": {
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sort_value);
      return {
        ...state,
        sorting_value: action.payload,
      };
    }
    case "SORTING_PRODUCTS": {
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.defaultPrice - b.defaultPrice;
        }

        if (sorting_value === "highest") {
          return b.defaultPrice - a.defaultPrice;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      if (sorting_value === "relevence") {
        newSortData = tempSortProduct;
      } else {
        newSortData = tempSortProduct.sort(sortingProducts);
      }

      return {
        ...state,
        filter_products: newSortData,
      };
    }

    case "UPDATE_FILTERS_VALUE": {
      const { name, value } = action.payload;
      let active={
        key: name,
        value: value
      }
      console.log("active",active)

      return {
        ...state,
        activeFilter: [...state.activeFilter, active],
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "REMOVE_ACTIVE_FILTER_ITEM":{
      const {brand, priceRange}= state.filters;
      console.log("REMOVE_ACTIVE_FILTER_ITEM", brand, priceRange)
      let brandItem = brand;
      let priceItem=priceRange
      let updatedFilter = state.activeFilter.filter(
        (curItem) => curItem.value !== action.payload
      );
       if(action.payload===brand){
        console.log("true or false",action.payload===brand)
        brandItem=""
       }
       

        if(action.payload===priceRange){
          priceItem=""
        }
        
      //console.log("remove item", updatedCart);
      return {
        ...state,
        activeFilter: updatedFilter,
        filters:{
         
          brand: brandItem,
          priceRange: priceItem
        }
      };
    }
    case "CLEAR_FILTERS":
      return {
        ...state,
        activeFilter: [],
        filters: {
          ...state.filters,
          brand: "",
          priceRange:""
        },
      };

    case "FILTER_PRODUCTS": {
      // let { all_products } = state;
      // let tempFilterProduct = [...all_products];
      let {filter_products } = state;
      let tempFilterProduct = [...filter_products];

      const { brand,priceRange } = state.filters;


      if (brand !== "") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.brand === brand
        );
      }

      if(priceRange !== ""){
        const myArray = priceRange.split("-");
        const minPrice = myArray[0]
        const maxPrice= myArray[1]
       
        
        tempFilterProduct = tempFilterProduct.filter(
                       (curElem) => curElem.defaultPrice > Number(minPrice) && curElem.defaultPrice < Number(maxPrice)
    );
        
      }
      let priceArr = tempFilterProduct.map((curElem) => curElem.defaultPrice);
   

      return {
        ...state,
        filter_products: tempFilterProduct,
        priceArray: priceArr
      
      };
    }
    // to clear the filter

    default:
      return state;
  }
};

export default filterReducer;
