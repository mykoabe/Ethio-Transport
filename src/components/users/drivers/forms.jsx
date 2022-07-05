import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        sx={{
          p: 2,
          m: 2,
        }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Driver Name"
            autoComplete="driver name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="Phone Number"
            label="Contact Number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Adress"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveDriver" value="yes" />
            }
            label="You are updating the driver"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
