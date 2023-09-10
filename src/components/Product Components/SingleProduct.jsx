import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SingleProductImage from "./SingleProductImage";
import Star from "./Star";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Divider, Button } from "@mui/material";

import ImageContainer from "../Other Components/ImageContainer";
import { useCartContext } from "../../context/cartContext";
import Quantity from "./Quantity";
import AddItemToCartDialog from "../Cart Components/AddItemToCartDialog";

const SingleProduct = () => {
  const [displayContent, setDisplayContent] = useState(false);
  const visible = () => {
    setDisplayContent(true);
  };
  const inVisible = () => {
    setDisplayContent(false);
  };

  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  const location = useLocation();

  const productId = location.state.productId;
  const name = location.state.name;
  const reference = location.state.reference;
  const star = location.state.star;
  const review = location.state.review;
  const description = location.state.description;
  const variants = location.state.variants;
  const images = location.state.images;
  const defaultImageUrl = location.state.defaultImageUrl;
  const [price, setPrice] = useState(variants[0].price);
  const [size, setSize] = useState(variants[0].size);
  const handleChange = (event) => {
    const position = event.target.value;

    setSize(position);
    //setPrice(variants[position].price);
  };
  const handleClick = (event, index) => {
    setPrice(variants[index].price);
  };

  return (
    <>
      <ImageContainer name={name} />

      <div className="container">
        <div className="row">
          <div className="col my-3 d-flex align-items-center">
            <SingleProductImage images={images} />
          </div>
          <div className="col my-2">
            <h5 className="my-2">{name}</h5>

            <div className=" text-muted my-2">Reference:{reference}</div>
            <div className="row ">
              <div className="my-2">
                <Star star={star} />{" "}
              </div>
              <div className=" text-muted my-2">Read Reviews({review})</div>
            </div>
            <h4 className="text-muted my-2">${price}</h4>
            <div className=" font-weight-light my-2">{description}</div>
            <div className="my-2">
              <Divider />
            </div>
            <div className="mt-4">Dimensions</div>
            <div className="mb-2">
              <FormControl sx={{ m: 1, minWidth: 130 }}>
                <Select value={size} onChange={handleChange}>
                  {variants.map((element, index) => {
                    return (
                      <MenuItem
                        key={index}
                        value={element.size}
                        onClick={(event) => handleClick(event, index)}
                      >
                        {element.size}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div>Quantity</div>
            <div className="row">
              <div className="col-2">
                <Quantity
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
              </div>
              <div className="col-8 d-flex   align-items-center">
                <Button
                  variant="contained"
                  sx={{backgroundColor:'#000000',
                  '&:hover': {
                    backgroundColor: '#369599'
                  
                  },
                }}
                  onClick={() => {
                    addToCart(
                      parseInt(productId),
                      amount,
                      price,
                      size,
                      name,
                      defaultImageUrl
                    );
                    visible();
                  }}
                >
                  +Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        {displayContent && (
          <AddItemToCartDialog
            inVisible={inVisible}
            visible={visible}
            productId={productId}
            size={size}
          />
        )}
      </div>
    </>
  );
};

export default SingleProduct;
