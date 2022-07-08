import React from "react";
import {Paper, Box } from ''

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
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </Paper>
  );
}
