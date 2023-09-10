import React from "react";
import Card from "@mui/material/Card";

import Box from "@mui/material/Box";
import BrowseCategories from "./BrowseCategories";
import ImageSlider from "./ImageSlider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ReplayIcon from "@mui/icons-material/Replay";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const SubHome = () => {
  const isMatch = useMediaQuery("(max-width:1000px)");

  // Subset of props, to illustrate the idea.
  const config = isMatch
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }
    : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      };

  const display = isMatch
    ? { display: "none", width: "100%" }
    : { display: "block" };

  return (
    <div style={{ backgroundColor: "#f2f3f7" }}>
      <div className="container  p-3">
        <Card sx={{ display: "flex" }}>
          <Box sx={config}>
            <Box sx={display}>
              <BrowseCategories className="m-3" />
            </Box>
            <Box sx={{ width: "auto" }}>
              <ImageSlider className="my-5" />
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              className="mx-1"
            >
              <img
                className="m-2"
                src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img1_home2.jpg"
              />
              <img
                className="m-2"
                src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img2_home2.jpg"
              />
            </Box>
          </Box>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <LocalShippingIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {" "}
                Free Shipping
              </Typography>
              <Typography variant="subtitle2">
                {" "}
                Free shipping on all US order
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ContactPhoneIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {" "}
                Support 24/7
              </Typography>
              <Typography variant="subtitle2">
                {" "}
                Contact us 24 hours a day
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ReplayIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                100% Money Back
              </Typography>
              <Typography variant="subtitle2">
                You have 30 days to Return
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RedeemIcon />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                Payment Secure
              </Typography>
              <Typography variant="subtitle2">
                We ensure secure payment
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SubHome;
