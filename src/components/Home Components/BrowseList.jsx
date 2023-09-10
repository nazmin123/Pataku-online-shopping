// import {Divider,List,ListItem,ListItemText} from '@mui/material';


import React from 'react'
import PropTypes from "prop-types";
import '../../css/browseMenu.css'

function BrowseList(props) {
  //  const [column, setColumn] =useState();
  //  const[record, setRecord] = useState();
  return (
  //   <div className="card">
  // <div className="card-body">
  <div className='container'>
      <div className='browse_row'>
      <h5>
{props.name}
      </h5>
      </div>
 
      <div className='browse_col'>
      {props.items.map((element) => {
          return (
            <div  key={element.itemId}>
              <p  className="text text-muted  text-start mt-0 mb-0 pt-1 pb-0"> {element.itemName}</p>
            </div>
          );
        })}
 
      </div>


    </div>
//   </div>
// </div>
 


      
   
  )
}
BrowseList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  subCategories: PropTypes.array

}

export default BrowseList
