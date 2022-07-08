import React from "react";
import { Paper, Box } from "@mui/material";
import Title from "../charts/Title";


export default function DailyList() {
    const colums = [{}]
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
