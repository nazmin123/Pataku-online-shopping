const cartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { productId, amount, price, size, name, defaultImageUrl } =
      action.payload;
  
    let existingProduct = state.cart && state.cart.find(
      (curItem) => curItem.productId === productId + size
    );
    //console.log("existing product",existingProduct)

    if (existingProduct !=null && existingProduct) {
      let updatedProduct = state.cart && state.cart.map((curElem) => {
        if (curElem.productId === productId + size) {
          let newAmount = curElem.amount + amount;

          return {
            ...curElem,
            amount: newAmount,

          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        productId: productId + size,
        amount,
        price,
        size,
        name,
        defaultImageUrl,
      };
     // console.log("cartProduct",cartProduct)

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
    // to set the increment and decrement
    if (action.type === "SET_DECREMENT") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.productId === action.payload) {
          let decAmount = curElem.amount - 1;
  
          if (decAmount <= 1) {
            decAmount = 1;
          }
  
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "SET_INCREMENT") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.productId === action.payload) {
          let incAmount = curElem.amount + 1;
  
        
  
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart && state.cart.filter(
      (curItem) => curItem.productId !== action.payload
    );
    //console.log("remove item", updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if(action.type === "REMOVE_ALL_ITEM"){
    
    const cartItems = localStorage.getItem('patakuCart')
  ? JSON.parse(localStorage.getItem('patakuCart'))
  : [];

  console.log("patakuCart",cartItems)

    return {
      ...state,
       total_item: "",
      total_price: "",
      cart:cartItems
    };
  
  }
    if (action.type === "CART_TOTAL_ITEM") {
      //console.log("CART_TOTAL_ITEM", state.cart)
         let updatedItemVal =  state.cart &&  state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };

  }
    if (action.type === "CART_TOTAL_PRICE") {
    let total_price =  state.cart && state.cart?.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }


};
export default cartReducer;
