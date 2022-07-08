import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Title from "../charts/Title";
// import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import TruckTabs from "./TruckTabs";

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

export default function TruckList() {
  const [data, setData] = useState({});
  const [openToday, setOpenToday] = useState(true);
  const [openNew, setOpenNew] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const handleToday = () => {
    setOpenToday(true);
  };
  const handleNew = () => {
    setOpenNew(true);
    setOpenToday(false);
    setOpenProgress(false);
  };
  const handleProgress = () => {
    setOpenNew(false);
    setOpenToday(false);
    setOpenProgress(true);
  };

  useState(() => {
    const fetchData = async () => {
      let truckList = [];
      try {
        const querySnaphot = await getDocs(collection(db, "load"));
        querySnaphot.forEach((doc) => {
          truckList.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, "=>", doc.data());
        });
        setData(truckList);
        console.log(truckList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 150,
              }}
            >
              <TruckTabs
                handleToday={handleToday}
                handleNew={handleNew}
                handleProgress={handleProgress}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
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
        {openToday && <Title>All Trucks List</Title>
        <Box sx={{ width: "100%", height: 400 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box> }
        
        

      </Paper>
    </>
  );
}
