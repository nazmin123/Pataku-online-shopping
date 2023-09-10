import React from "react";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useCartContext } from "../../context/cartContext";
import "../../css/cart.css";
import PropTypes from "prop-types";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Checkout = (props) => {
  const handleUpClick = () => {
    localStorage.clear();
    props.showAlert("Ordered Placed Successfully!", "success");
  };

  const { removeAllItem, total_item, total_price, shipping_fee } =
    useCartContext();

  const [addressEnable, setAddressEnable] = useState(true);
  const addressVisibility = () => {
    // firstName && lastName && email && setAddressEnable(false)
    setAddressEnable(false);
  };

  const shippingVisibility = () => {
    setShippingMethod(false);
  };
  const paymentVisibility = () => {
    setPaymentEnable(false);
  };
  // const [address, setAddress] = useState(false);
  const [shippingMethodEnable, setShippingMethod] = useState(true);
  const [paymentEnable, setPaymentEnable] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    addressVisibility;
  }, []);

  return (
    <div className="container">
      <div className="main-container ">
        <div className="shopping-cart">
          <Accordion className="p-2 mt-4" sx={{ backgroundColor: "#f2f3f7" }}>
            <AccordionSummary
              expandIcon={<EditIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                1.PERSONAL INFORMATION
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {!addressEnable ? (
                <Card sx={{ m: 1 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {firstName} {lastName}
                    </Typography>
                    <Typography>{email}</Typography>
                  </CardContent>
                </Card>
              ) : (
                <Card sx={{ m: 1 }}>
                  <CardContent>
                    <form>
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 4 }}
                      >
                        <TextField
                          type="text"
                          variant="filled"
                          label="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          fullWidth
                          required
                        />
                        <TextField
                          type="text"
                          variant="filled"
                          label="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          fullWidth
                          required
                        />
                      </Stack>

                      <TextField
                        type="email"
                        variant="filled"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{ mb: 4, color: "black" }}
                      />
                    </form>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        m: "1rem",

                        "&:hover": {
                          backgroundColor: "#369599",
                        },
                      }}
                      onClick={addressVisibility}
                    >
                      CONTINUE
                    </Button>
                  </CardContent>
                </Card>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="p-2"
            sx={{ backgroundColor: "#f2f3f7" }}
            disabled={addressEnable}
          >
            <AccordionSummary
              expandIcon={<EditIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                2. ADDRESS
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {!shippingMethodEnable ? (
                <Card sx={{ m: 1 }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      My Address
                    </Typography>
                    <Typography>{address}</Typography>
                    <Typography>
                      {city} {stateName}
                    </Typography>
                    <Typography>
                      {country} {zipcode}
                    </Typography>
                  </CardContent>
                </Card>
              ) : (
                <Card sx={{ m: 1 }}>
                  <CardContent>
                    <form>
                      <TextField
                        type="text"
                        variant="filled"
                        color="info"
                        label="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        fullWidth
                        required
                        sx={{ mb: 4, color: "black" }}
                      />
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 4 }}
                      >
                        <TextField
                          type="text"
                          variant="filled"
                          color="secondary"
                          label="City"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                          fullWidth
                          required
                        />
                        <TextField
                          type="text"
                          variant="filled"
                          color="secondary"
                          label="State"
                          onChange={(e) => setStateName(e.target.value)}
                          value={stateName}
                          fullWidth
                          required
                        />
                      </Stack>
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ marginBottom: 4 }}
                      >
                        <TextField
                          type="number"
                          variant="filled"
                          color="secondary"
                          label="Zip Code"
                          onChange={(e) => setZipcode(e.target.value)}
                          value={zipcode}
                          fullWidth
                          required
                        />
                        <TextField
                          type="text"
                          variant="filled"
                          color="secondary"
                          label="Country"
                          onChange={(e) => setCountry(e.target.value)}
                          value={country}
                          fullWidth
                          required
                        />
                      </Stack>
                    </form>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        m: "1rem",

                        "&:hover": {
                          backgroundColor: "#369599",
                        },
                      }}
                      onClick={shippingVisibility}
                    >
                      CONTINUE
                    </Button>
                  </CardContent>
                </Card>
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="p-2"
            sx={{ backgroundColor: "#f2f3f7" }}
            disabled={shippingMethodEnable}
          >
            <AccordionSummary
              expandIcon={<EditIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                3. SHIPPING METHOD
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ m: 1 }}>
                <CardContent>
                  <div className="row d-flex align-items-center justify-content-between">
                    <div className="col">
                      <Radio
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                        sx={{
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                    </div>
                    <div className="col">
                      <img src="https://demo.posthemes.com/pos_pataku/layout2/img/s/2.jpg" />
                    </div>
                    <div className="col">
                      <Typography sx={{ fontWeight: "bold" }}>
                        {" "}
                        My carrier
                      </Typography>
                    </div>

                    <div className="col">
                      <Typography> Delivery next day!</Typography>
                    </div>
                    <div className="col">
                      <Typography>$7.00 tax excl.</Typography>
                    </div>
                  </div>
                </CardContent>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    m: "1rem",

                    "&:hover": {
                      backgroundColor: "#369599",
                    },
                  }}
                  onClick={paymentVisibility}
                >
                  CONTINUE
                </Button>
              </Card>
            </AccordionDetails>
          </Accordion>
          <Accordion
            disabled={paymentEnable}
            className="p-2 mb-4"
            sx={{ backgroundColor: "#f2f3f7" }}
          >
            <AccordionSummary
              expandIcon={<EditIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                4. PAYMENT
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{ m: 1 }}>
                <CardContent>
                  <FormControl>
                    <FormControlLabel
                      value="end"
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="Pay by Cash on Delivery"
                    />
                    <FormControlLabel
                      required
                      control={
                        <Checkbox
                          sx={{
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label="I agree to the terms of service and will adhere to them unconditionally."
                    />
                  </FormControl>
                </CardContent>
                <NavLink to="/">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      m: "1rem",

                      "&:hover": {
                        backgroundColor: "#369599",
                      },
                    }}
                    // onClick={handleUpClick}
                    onClick={() => {
                      removeAllItem();
                      handleUpClick();
                    }}
                  >
                    ORDER WITH AN OBLIGATION TO PAY
                  </Button>
                </NavLink>
              </Card>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="checkout my-4 mx-2">
          <div className="card border-0" style={{ backgroundColor: "#f2f3f7" }}>
            <div className="card-body ">
              <div className="d-flex justify-content-between">
                <p className="card-text  m-0 ">
                  <small>
                    <strong>{total_item} items</strong>
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
              <div className="my-2">
                <Divider />
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text m-0 ">
                  <small>
                    <strong>Total (tax excl.)</strong>
                  </small>
                </p>
                <p className="card-text text-muted m-0 ">
                  <small>${shipping_fee + total_price}</small>
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
              <div className="my-2">
                <Divider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Checkout.propTypes = {
  showAlert: PropTypes.func,
};

export default Checkout;
