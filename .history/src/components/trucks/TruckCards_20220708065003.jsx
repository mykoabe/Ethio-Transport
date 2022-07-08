import { Typography } from "@mui/material";
import React, {useState} from "react";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import { Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { IconButton } from "@mui/material";

// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function TruckCards() {
  const [todayOpen, setTodayOpen] = useState(true);
  const [newlyAdded, setNewlyAdded] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  return (
    <Grid container spacing={0}>
      {/* Chart */}
      <Grids
        onClick={set}
        title={"Today"}
        subtitle={new Date().toDateString()}
        icon={
          <IconButton onClick={() => console.log("hello")}>
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
        title={"Newly Added Trucks"}
        subtitle={18}
        icon={
          <AddIcon
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
        title={"Confirmed"}
        subtitle={5}
        icon={
          <CheckIcon
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
