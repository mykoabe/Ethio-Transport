import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// import { styled } from "@mui/material/styles";
import TopBar from "../common/topBar";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase-config";

// const Input = styled("input")({
//   display: "none",
// });

export default function NewCustomer({ inputs, title }) {
  const [data, setData] = useState({});

  
  const handleCustomer = async (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      console.log(error)
    }

    const newDoc = await addDoc(collection(db, "customers"), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    console.log(newDoc);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  console.log(data);
  return (
    <React.Fragment>
      <TopBar user_title={"Create New Customer"} />
      <Box
        component="customer"
        onSubmit={handleCustomer}
        noValidate
        sx={{ mt: 1 }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            p: 2,
            m: 2,
          }}
        >
          {inputs.map((input) => (
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id={input.id}
                name={input.name}
                label={input.label}
                autoComplete={input.autocomplete}
                variant="standard"
                onChange={handleInput}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCustomer" value="yes" />
              }
              label="You are creating new customer"
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" onClick={handleCustomer}>
              Create
            </Button>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
