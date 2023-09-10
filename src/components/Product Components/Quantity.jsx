import { Typography } from '@mui/material';
import React , { useState }  from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from 'prop-types';

const Quantity = ({ amount, setDecrease, setIncrease}) => {
 
  return (
    <div className="row border d-flex justify-content-between m-0 p-0" style={{ width: "100%" }}>
    <div className="col d-flex align-items-center">
      <Typography> {amount}</Typography>
    </div>
    <div className="col align-items-end m-0 p-0">
      <div className="border" onClick={()=>setIncrease()}>
        <KeyboardArrowUpIcon/>
      </div>
      <div className="border" onClick={() => setDecrease()}>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  </div>
  )
};
Quantity.propTypes={
  amount: PropTypes.number,
  setIncrease: PropTypes.func,
  setDecrease: PropTypes.func
}

export default Quantity
