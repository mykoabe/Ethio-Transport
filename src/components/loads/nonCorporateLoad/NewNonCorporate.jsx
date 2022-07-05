import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import CorporateTabs from "./CorporateTab";
import Title from "../../charts/Title";
// import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";

const columns = [
  { field: "id", headerName: "Post By", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "phone", headerName: "Phone Number", width: 130 },
  {
    field: "from_to",
    headerName: "From/To",
    width: 200,
  },
  {
    field: "loading",
    headerName: "Loading/Unloading",
    width: 200,
  },
  {
    field: "overview",
    headerName: "Overview",
    width: 160,
  },
];

export default function NewNonCorporate() {
  const [data, setData] = useState({});
  useState(() => {
    const fetchData = async () => {
      let noncorporateList = [];
      try {
        const querySnaphot = await getDocs(collection(db, "noncorporate"));
        querySnaphot.forEach((doc) => {
          noncorporateList.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, "=>", doc.data());
        });
        setData(noncorporateList);
        console.log(noncorporateList);
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
              <CorporateTabs />
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
        <Title>New Non-Corporate Order List</Title>
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
    </>
  );
}
