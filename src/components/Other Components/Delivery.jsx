import * as React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import ImageContainer from "./ImageContainer";

export default function Delivery() {
  return (
    <>
    <ImageContainer name={"delivery"}/>
    <Box sx={{ width: "100%" , m:3 }}>


<Typography variant="h4" gutterBottom>
  Delivery
</Typography>
<Typography variant="Subtitle1" gutterBottom>
  Shipments and returns
</Typography>
<Typography variant="subtitle2" gutterBottom>
  Your pack shipment
</Typography>

<Typography variant="caption" gutterBottom textAlign="justify" paragraph mr={3} >
  Packages are generally dispatched within 2 days after receipt of payment
  and are shipped via UPS with tracking and drop-off without signature. If
  you prefer delivery by UPS Extra with required signature, an additional
  cost will be applied, so please contact us before choosing this method.
  Whichever shipment choice you make, we will provide you with a link to
  track your package online.
</Typography>
<Typography variant="caption" gutterBottom textAlign="justify" paragraph mr={3}>
  Shipping fees include handling and packing fees as well as postage
  costs. Handling fees are fixed, whereas transport fees vary according to
  total weight of the shipment. We advise you to group your items in one
  order. We cannot group two distinct orders placed separately, and
  shipping fees will apply to each of them. Your package will be
  dispatched at your own risk, but special care is taken to protect
  fragile objects.
</Typography>
</Box>
    </>

  );
}
