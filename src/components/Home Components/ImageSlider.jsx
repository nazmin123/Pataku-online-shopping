import SimpleImageSlider from "react-simple-image-slider";
import React from "react"
import { Box } from "@mui/material";

const images = [
  { url: "https://demo.posthemes.com/pos_pataku/layout2/modules/posslideshows/images/89ad3f14562ed1e03cef3b99102c12845073909a_banner1_home2.jpg" },
  { url: "https://demo.posthemes.com/pos_pataku/layout2/modules/posslideshows/images/b9c57d1ed2ed0889ff35d1a1f8df1d44833dbcdd_banner2_home2.jpg" },
 ];

const ImageSlider = () => {

  return (
    <>
    
      <Box>
      <SimpleImageSlider
        width={450}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      </Box>
     
    
 

    {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://demo.posthemes.com/pos_pataku/layout2/modules/posslideshows/images/89ad3f14562ed1e03cef3b99102c12845073909a_banner1_home2.jpg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>First Slide</h5>
    <p>ok</p>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://demo.posthemes.com/pos_pataku/layout2/modules/posslideshows/images/b9c57d1ed2ed0889ff35d1a1f8df1d44833dbcdd_banner2_home2.jpg" alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Second Slide</h5>
    <p>ok</p>
    </div>
    </div>
  
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
{/* </div> */}
</>
      
 
 
  );
}
export default ImageSlider;
