import React from "react";
import { Paper, Box } from "@mui/material";
import Title from "../charts/Title";
import { DataGrid } from "@mui/x-data-grid";

import Grid from "@mui/material/Grid";
const columns = [
  { field: "id", headerName: "Post By", width: 70 },
  { field: "dropoff", headerName: "Dropoff Location", width: 130 },
  { field: "packagetype", headerName: "Package Type", width: 130 },
  {
    field: "packageweight",
    headerName: "Package Weight",
    width: 200,
  },
  {
    field: "picloc",
    headerName: "Pic Location",
    width: 200,
  },
];
export default function DailyList() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        m: 1,
        mx: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title>All Trucks List</Title>
      <Box sx={{ width: "100%", height: 400 }}>
        <DataGrid
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Paper>
  );
}
