import { ThemeProvider, createTheme } from "@mui/material/styles";

import Register from "./components/register/register";

// routing
import { Route, Routes } from "react-router-dom";
import { blue } from "@mui/material/colors";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
// import Login from "./components/login/Login";
// import SignIn from "./components/login/Signin";
import CustomerList from "./components/users/customers/customerlist";
import NewNonCorporate from "./components/loads/nonCorporateLoad/NewNonCorporate";
import NewEcxLoad from "./components/loads/ecxLoads/NewEcxLoads";
import CustomerDetail from "./components/users/customers/customerDetail";
import DriverList from "./components/users/drivers/driverList";
import DriverDetail from "./components/users/drivers/driverDetail";
import FacilitatorList from "./components/users/facilitators/FacilitatorList";
import FacilitatorDetail from "./components/users/facilitators/FacilitatorDetail";
import NewCustomer from "./components/users/customers/NewCustomer";
import Login from "./components/login/Login";
import { customerData } from "./components/users/customers/customerData";
import { driverData } from "./components/users/drivers/driverData";
import { facilitatorData } from "./components/users/facilitators/facilitatorData";
import NewFacilitator from "./components/users/facilitators/NewFacilitator";
import TruckList from "./components/loads/trucks/TruckList";
import new

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: blue[900],
            borderRadius: "25px",
          },
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/add_customer" element={<CustomerList />} />
            <Route path="/add_customer/:userId" element={<CustomerDetail />} />
            <Route
              path="/newCustomer"
              element={<NewCustomer title={"nothing"} inputs={customerData} />}
            />
            <Route
              path="/newDriver"
              element={<NewDriver title={"nothing"} inputs={driverData} />}
            />
            <Route
              path="/newFacilitator"
              element={
                <NewFacilitator title={"nothing"} inputs={facilitatorData} />
              }
            />
            <Route path="/non_corpoarate_load" element={<NewNonCorporate />} />
            <Route path="/trucks" element={<TruckList />} />
            <Route path="/add_driver" element={<DriverList />} />
            <Route path="/add_driver/:userId" element={<DriverDetail />} />
            <Route path="/add_facilitator" element={<FacilitatorList />} />
            <Route
              path="/add_facilitator/:userId"
              element={<FacilitatorDetail />}
            />
            <Route path="/new_ecx" element={<NewEcxLoad />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
