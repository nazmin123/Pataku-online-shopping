import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Badge,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useCartContext } from '../../context/cartContext';

const CardListItem = (props) => {
  const { removeItem} = useCartContext();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Card sx={{ display: "flex", border: "none", width: "350px" }}>
        <div style={{ position: "relative", alignContent: "center" }}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: "100%" }}
            image={props.defaultImageUrl}
            alt="Live from space album cover"
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 5,
              left: "20%",
              transform: "translateX(-50%)",
            }}
          >
            {" "}
            <Badge
              badgeContent={`${props.amount}x`}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "#369599",
                },
              }}
            />
          </div>
        </div>
        <div>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography
                variant="caption"
                
                component="div"
                fontWeight="bold"
              >
                {props.name}
              </Typography>
              <Typography component="div" variant="caption" color="#369599">
                ${props.price}
              </Typography>
              <Typography component="div" variant="caption" color="text.secondary">
                Dimension: {props.size}
              </Typography>
            </CardContent>
          </Box>
        </div>
        <IconButton onClick={() => removeItem(props.productId)}>
          <CloseIcon />
        </IconButton>
      </Card>
      <div>
        <Divider variant="middle" sx={{ m: 1 }} />
      </div>
    </div>
  );
};
CardListItem.propTypes = {
  productId: PropTypes.string,
  name: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
  size: PropTypes.string,
  defaultImageUrl:PropTypes.string
};

export default CardListItem;
