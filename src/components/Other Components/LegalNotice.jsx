import * as React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import  ImageContainer  from "./ImageContainer";

export default function LegalNotice() {
  return (
    <>
       <ImageContainer name={"legal notice"}/>
        <Box sx={{ width: "100%", m:3}}>
      <Typography variant="h4" gutterBottom>
        Legal Notice
      </Typography>
      <Typography variant="Subtitler1" gutterBottom>
        Legal Credits
      </Typography>

      <Typography variant="caption" gutterBottom>
        Concept and production:
      </Typography>
      <Typography variant="caption" gutterBottom>
        <p>
          This Online store was created using{" "}
          <a href="http://www.prestashop.com">
            Prestashop Shopping Cart Software
          </a>
         
        
          <a href="http://www.prestashop.com/blog/en/">ecommerce blog</a> for
          news and advices about selling online and running your ecommerce
          website.
        </p>
      </Typography>
    </Box>
    </>

  );
}
