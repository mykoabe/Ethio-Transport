import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../charts/Title";
// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Tooltip, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BreadCrumbs from "../../../pages/home/breadCrumbs";
import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "alemu",
    facilitor_photo: "mekuanint",
    phone: "0912121212",
    adress: "Addis Ababa",
    type: "Facilitator",
  },
  {
    id: 2,
    name: "alemu",
    facilitor_photo: "mekuanint",
    phone: "0912121212",
    adress: "Addis Ababa",
    type: "Facilitator",
  },
  {
    id: 3,
    name: "alemu",
    facilitor_photo: "mekuanint",
    phone: "0912121212",
    adress: "Addis Ababa",
    type: "Facilitator",
  },
  {
    id: 4,
    name: "alemu",
    facilitor_photo: "mekuanint",
    phone: "0912121212",
    adress: "Addis Ababa",
    type: "Facilitator",
  },
  {
    id: 5,
    name: "alemu",
    facilitor_photo: "mekuanint",
    phone: "0912121212",
    adress: "Addis Ababa",
    type: "Facilitator",
  },
  {
    id: 6,
    name: "alemu",
    facilitor_photo: "mekuanint",
    phone: "0912121212",
    adress: "Addis Ababa",
    type: "Facilitator",
  },
];

export default function FacilitatorList() {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Facilitator Name", width: 120 },
    { field: "facilitator_photo", headerName: "Facilitator Photo", width: 120 },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "adress",
      headerName: "Adress",
      width: 150,
    },
    {
      field: "type",
      headerName: "Facilitator Type",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/add_facilitator/" + params.row.id}>
              <Button variant="outlined" color="success">
                edit
              </Button>
            </Link>
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                color="warning"
                onClick={() => handleDelete(params.row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
  return (
    <>
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
      <BreadCrumbs />
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              m: 1,
              mx: 3,
              display: "flex",
              flexDirection: "column",
              height: 40,
            }}
          ></Paper>
        </Grid>
      </Grid>

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
        <Title>All Facilitators</Title>
        <Box sx={{ width: "100%", height: 400 }}>
          <DataGrid
            disableSelectionOnClick
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Paper>
    </>
  );
}
