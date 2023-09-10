import React from 'react'
import PropTypes from "prop-types";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Star = ({star}) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        // debugger;
        return (
          <span key={index}>
            {star >= index + 1 ? (
              <StarIcon style={{ color: '#369599'}}/>
            ) : star >= number ? (
              <StarHalfIcon style={{ color: '#369599'}} />
            ) : (
              <StarBorderIcon style={{ color: '#369599'}}  />
            )}
          </span>
        );
      });
  return (
    <div>
      {ratingStar}
    </div>
  )
}
Star.propTypes = {
    star: PropTypes.number,
  };

export default Star
