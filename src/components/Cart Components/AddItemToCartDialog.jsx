import * as React from "react";
import {
  Button,
  Dialog,
  Box,
  DialogContent,
  DialogTitle,
  Slide,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import "../../css/cart.css";
import PropTypes from "prop-types";
import { useCartContext } from "../../context/cartContext";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AddItemToCartDialog(props) {
  const { cart, total_item, total_price, shipping_fee } = useCartContext();
  const [amount, setAmount] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [image,setImage]=useState();

 
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  console.log("productId", props.productId);
  useEffect(() => {
    {cart && cart.map((curElem) => {
      if (curElem.productId === props.productId + props.size) {
        setAmount(curElem.amount);
        setPrice(curElem.price);
        setName(curElem.name);
        setImage(curElem.defaultImageUrl);
      }
    });}
  }, []);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    props.inVisible();
  };

  const handleClickOpen = () => {
    props.visible();
  };
  return (
    <div>
      <Dialog
        open={handleClickOpen}
        fullScreen={fullScreen}
        onClose={handleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        sx={{ width: "100%", height: "100%" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ backgroundColor: "#369599", color: "whitesmoke" }}
        >
          Product successfully added to your shopping cart
          <IconButton
            aria-label="close"
            onClick={handleClick}
            sx={{
              color: "whitesmoke",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: "0.5rem",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img
            className="cart-img"
            src={image}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              className="mx-1"
              variant="caption"
              fontWeight="bold"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography
              className="mx-1"
              variant="caption"
              fontWeight="bold"
              gutterBottom
            >
              ${price}
            </Typography>
            <Typography
              className="mx-1"
              variant="caption"
              fontWeight="bold"
              gutterBottom
            >
              Quantity:{amount}
            </Typography>
          </Box>
          <Box>
            <div className="vr" style={{ height: "80%" }}></div>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography className="mx-1" variant="caption" gutterBottom>
              There are {total_item} items in your cart
            </Typography>
            <Typography className="mx-1" variant="caption" gutterBottom>
              <span style={{ fontWeight: "bold" }}> Total Products:</span> $
              {total_price}
            </Typography>
            <Typography className="mx-1" variant="caption" gutterBottom>
              <span style={{ fontWeight: "bold" }}> Total Shipping:</span> $
              {shipping_fee}
            </Typography>
            <Typography className="mx-1" variant="caption" gutterBottom>
              <span style={{ fontWeight: "bold" }}> Taxes:</span> $0.00
            </Typography>
            <Typography className="mx-1" variant="caption" gutterBottom>
              <span style={{ fontWeight: "bold" }}> Total</span> $
              {total_price + shipping_fee}(tax excl.)
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
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
                  fontSize: "10px",

                  width: "150px",
                  "&:hover": {
                    backgroundColor: "#369599",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                PROCEED TO CHECKOUT
              </Button>

          </NavLink>
          <NavLink
            to="/"
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
                  fontSize: "10px",

                  width: "130px",
                  "&:hover": {
                    backgroundColor: "#369599",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
              
                CONTINUE SHOPPING
              </Button>
            </NavLink>
            
         
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
AddItemToCartDialog.propTypes = {
  inVisible: PropTypes.func,
  visible: PropTypes.func,
  productId: PropTypes.string,
  size: PropTypes.string,
};
