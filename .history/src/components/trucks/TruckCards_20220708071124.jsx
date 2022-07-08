import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function TruckCards({ handleToday, handleNew }) {
  return (
    <Grid container spacing={0}>
      {/* Chart */}
      <Grids
        title={"Today"}
        subtitle={new Date().toDateString()}
        icon={
          <IconButton onClick={handleToday}>
            <CalendarMonthIcon
              sx={{
                fontSize: "2em",
                color: "blue",
              }}
            />
          </IconButton>
        }
      />
      <Grids
        title={"Newly Added"}
        subtitle={18}
        icon={
          <IconButton onClick={handleNew}>
            <AddIcon
              sx={{
                fontSize: "2em",
                color: "red",
              }}
            />
          </IconButton>
        }
      />
    </Grid>
  );
}

function Grids({ icon, title, subtitle }) {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          m: 0,
          display: "flex",
          flexDirection: "row",
          height: 70,
        }}
      >
        {icon}
        <Box
          sx={{
            ml: 2,
          }}
        >
          <Typography component="span">{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
