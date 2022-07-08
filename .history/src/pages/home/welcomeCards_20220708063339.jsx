import { Typography } from "@mui/material";
import React from "react";
import CommuteIcon from "@mui/icons-material/Commute";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import FlagIcon from "@mui/icons-material/Flag";
import { Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";

// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function WelcomeCards() {
  return (
    <Grid container spacing={0}>
      {/* Chart */}
      <Grids
        title={"All ECX Loads"}
        subtitle={2}
        icon={
          <Button onClick={() => console.log("hello")}>
            <CommuteIcon
              sx={{
                fontSize: "3em",
                color: "greyYellow",
              }}
            />
          </Button>
        }
      />
      <Grids
        title={"Starred"}
        subtitle={0}
        icon={
          <HourglassBottomIcon
            sx={{
              fontSize: "3em",
              color: "red",
            }}
          />
        }
      />
      <Grids
        title={"Progress"}
        subtitle={27}
        icon={
          <AutoModeIcon
            sx={{
              fontSize: "3em",
              color: "blue",
            }}
          />
        }
      />
      <Grids
        title={"Finished"}
        subtitle={5}
        icon={
          <FlagIcon
            sx={{
              fontSize: "3em",
              color: "green",
            }}
          />
        }
      />
    </Grid>
  );
}

export const Grids = ({ icon, title, subtitle }) => {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Paper
        elevation={1}
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
};
