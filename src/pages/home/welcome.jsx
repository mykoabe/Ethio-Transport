import { Typography } from "@mui/material";
import React from "react";
import BreadCrumbs from "./breadCrumbs";

import Box from "@mui/material/Box";

// import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import HomeTabs from "./tabs";
import OverallStastics from "./overallStastics";

const Welcome = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Typography
          sx={{
            p: 1,
            mt: 2,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Welcome back,{" "}
        </Typography>
        <BreadCrumbs sx={{ ml: 2 }} />

        <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                }}
              >
                <HomeTabs />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <OverallStastics />
      </Box>
    </>
  );
};

export default Welcome;
