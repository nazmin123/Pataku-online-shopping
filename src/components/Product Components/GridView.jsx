import React from 'react'
import ProductItem from './ProductItem'

import PropTypes from "prop-types";

const GridView = ({products}) => {
    // console.log(`Grid View ${products}`)
  return (
    <div >
          <div className="row " style={{display:"flex", alignItems:"center"}}>
                        {products.map((element) => {
                            return <div className="col col-md-5 col-lg-3 mx-1" key={element.productId}>
                                <ProductItem {...element} />
                            </div>
                        })}
                    </div>
    </div>
  )
}
GridView.propTypes ={
    products: PropTypes.array
}

export default GridView
