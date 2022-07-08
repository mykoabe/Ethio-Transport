import * as React from "react";
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Title from "../../charts/Title";
// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Tooltip, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { collection, deleteDoc, getDocs, doc, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";

// import { auth } from "../../../firebase-config";

export default function CustomerList() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let customerList = [];
      try {
        const userRef = collection(db, 'users')
        const q = query(userRef, where('role', '==', 'Cutomer'))
        const querySnaphot = await getDocs(collection(db, "users"));
        querySnaphot.forEach((doc) => {
          customerList.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, "=>", doc.data());
        });

        setData(customerList);
        console.log(customerList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "customers", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "company", headerName: "Company Name", width: 120 },
    { field: "username", headerName: "Contact Name", width: 120 },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "type",
      headerName: "Customer Type",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/add_customer/" + params.row.id}>
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
        Manage Customers,
      </Typography>
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
        <Title>All Customers</Title>
        <Box sx={{ width: "100%", height: 400 }}>
          <DataGrid
            components={{ Toolbar: GridToolbar }}
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
