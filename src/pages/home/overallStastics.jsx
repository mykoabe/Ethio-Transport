import React from "react";

// import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Chart from "../../components/charts/chart";

export default function OverallStastics() {
  return (
    <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <Typography
              sx={{
                m: 1,
              }}
            >
              OverAll Statstics,
            </Typography>
            <Typography
              sx={{
                p: 1,
              }}
            >
              To start with interaction of facilitators ,driver,customers all
              container and load job orders.
            </Typography>
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
