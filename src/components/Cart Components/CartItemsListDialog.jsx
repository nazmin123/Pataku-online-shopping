import React from 'react'
import CardListItem from './CardListItem'
import { Button, List, ListItem} from "@mui/material";
import PropTypes from "prop-types";
import { useCartContext } from "../../context/cartContext";
import { NavLink } from 'react-router-dom';


const CartItemsListDialog = (props) => {
  const { cart, total_price, shipping_fee } = useCartContext();
 // console.log("cart_size",cart.length)
  
  const handleClick = () => {
    props.inVisible();
};
  return (
    <div className='container '   style={{
      position: "absolute",

      top: "10%",

      right: "5%",

      width: "400px",

      height: "600px",

      background: "transparent",

    

      padding: "10px",

      zIndex: "999",

      flex: "col"
    

    }} onMouseLeave={()=>handleClick()} >
       <List className='col' sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' , maxHeight:250, overflowY:"scroll", overflowX:"hidden"}}>
       {cart && cart.map((element,index) => {
        
        return (
          <ListItem sx={{padding:"0.5"}}  key={index}>
           <CardListItem {...element} />
           </ListItem>
        );
      })}
     
       </List>
       <div className="col" >
            <div className="card" style={{border:"none"}}>
              <div className="card-body ">
                <div className="d-flex justify-content-between">
                  <p className="card-text  m-0 ">
                    <small>
                      <strong> Subtotal</strong>
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
                <div className="d-flex justify-content-between">
                  <p className="card-text m-0 ">
                    <small>
                      <strong>Total (tax excl.)</strong>
                    </small>
                  </p>
                  <p className="card-text text-muted m-0 ">
                    <small>${total_price+shipping_fee}</small>
                  </p>
                </div>
            
             
                <div className="d-flex justify-content-center my-3">
                <NavLink
            to="/cart"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            
            }}
            
          >
                  <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  m: "0.5rem",
                  

                  "&:hover": {
                    backgroundColor: "#369599",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
              CHECKOUT
                
              </Button>
            </NavLink>
                
                </div>
              </div>
            </div>
          </div>
    
    
    </div>
  )
};

CartItemsListDialog.propTypes = {
  inVisible: PropTypes.func
 
};

export default CartItemsListDialog
