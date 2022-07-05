import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import PhotoCamera from "@mui/icons-material/PhotoCamera";
// import Stack from "@mui/material/Stack";
import TopBar from "../common/topBar";

// const Input = styled("input")({
//   display: "none",
// });

export default function NewCustomer() {
  return (
    <React.Fragment>
      <TopBar user_title={'Create New Customer'} />
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
            label="Facilitator Name"
            autoComplete="name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            autoComplete="phone-number"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button variant="contained" component="span">
                Facilitor Photo
              </Button>
            </label>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Stack>
        </Grid> */}
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
            id="type"
            name="type"
            label="Facilitor Type"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveCustomer" value="yes" />
            }
            label="You are updating the facilitator"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained">Create</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
