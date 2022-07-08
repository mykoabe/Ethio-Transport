import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export default function DialogBox({ open, title, content, closeHandler }) {
  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
