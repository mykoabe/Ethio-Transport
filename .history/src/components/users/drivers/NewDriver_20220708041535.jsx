import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { db, auth } from "../../../firebase-config";

// import { styled } from "@mui/material/styles";
import TopBar from "../common/topBar";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../common/DialogBox";

// const Input = styled("input")({
//   display: "none",
// });

export default function NewCustomer({ inputs, title }) {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCustomer = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      setOpen(true);
    } catch (error) {
      alert("unable to create driver");
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  console.log(data);
  return (
    <>
      <React.Fragment>
        <TopBar user_title={"Create New Driver"} />
        <Box
          component="driver"
          onSubmit={handleDriver}
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
                  <Checkbox color="secondary" name="saveDriver" value="yes" />
                }
                label="You are creating new driver"
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={handleDriver}>
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
      {open && (
        <DialogBox
          open={open}
          title={"New Driver is just created"}
          content={
            "New customer is just created you can send the credentials and the customer can use these credentials to login"
          }
          closeHandler={handleClose}
        />
      )}
    </>
  );
}
