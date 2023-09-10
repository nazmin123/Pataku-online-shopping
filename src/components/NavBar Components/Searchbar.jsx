import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Badge from "@mui/material/Badge";
import { useCartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import CartItemsListDialog from "../Cart Components/CartItemsListDialog";
import "../../css/style.css"


function Searchbar() {
  const { total_item, cart } = useCartContext();
  const [displayContent, setDisplayContent] = useState(false);
  const visible = () => {
    setDisplayContent(true);
  };
  const inVisible = () => {
    setDisplayContent(false);
  };
  return (
    <div>
      <div className="main">
      <NavLink className="nav-link" aria-current="page" to="/">
      <img
          className="logo"
          src="https://demo.posthemes.com/pos_pataku/layout2/img/pataku-2-responsive-prestashop-theme-logo-15338717962.jpg"
          alt="logo"
        />
        </NavLink>
      

        <div className="search">
          <TextField
            id="outlined-basic"
            variant="standard"
            fullWidth
            placeholder="Search entire store here..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="cart">
          <Badge
            badgeContent={4}
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "#369599",
                transform: "translate(-25px, -4px)",
              },
            }}
          >
            <FavoriteBorderOutlinedIcon fontSize="large" />
            <p className="mt-3"> Wishlist </p>
          </Badge>
        </div>

        <div className="cart">
          <NavLink
            to="/cart"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
            onMouseEnter={() => visible()}
          >
            <Badge
              badgeContent={total_item}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "#369599",
                  transform: "translate(-7px, -4px)",
                },
              }}
            >
              <ShoppingCartOutlinedIcon fontSize="large" />

              <p className="mt-3">Cart</p>
            </Badge>
          </NavLink>
        </div>
      </div>
      {displayContent && cart.length>0 && <CartItemsListDialog inVisible={inVisible} />}
    </div>
  );
}

export default Searchbar;
