import { Typography, Button } from "@mui/material";
import React from "react";
import { useFilterContext } from "../../context/filterContext";
import CloseIcon from '@mui/icons-material/Close';

const ActiveFilter = () => {
  const { activeFilter, removeItem } = useFilterContext();
  return (
    <div className="row d-flex justify-content-start align-items-center mx-3" style={{ backgroundColor: "#dededd",width:"100%" }}>
      <div className="col-3">
        <Typography variant="h6" sx={{margin:"0.5rem"}}> Active Filter</Typography>
      </div>
      <div className="col-6">
        <div className="row">
        {
            activeFilter.map((active,index)=>{
                return(
                    <div className="col-3 mx-5" key={index} >
                   <Button variant="contained" endIcon={<CloseIcon />}  onClick={() => removeItem(active.value)} sx={{textTransform: 'lowercase', backgroundColor:"white", color:"black", margin:"0.3rem", "&:hover":{backgroundColor:"#369599"}, minWidth:"12rem", padding:"5px"}}>{active.key ==="priceRange"? `price : ${active.value}`: `${active.key} : ${active.value}`}</Button>
                        </div>
                   
                )
            })
        }
        </div>

    
      </div>
    </div>
  );
};

export default ActiveFilter;
