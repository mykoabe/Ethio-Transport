import { ThemeProvider, createTheme } from "@mui/material/styles";

import Register from "./components/register/register";

// routing
import { Route, Routes } from "react-router-dom";
import { blue } from "@mui/material/colors";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
// import Login from "./components/login/Login";
import SignIn from "./components/login/Signin";
import CustomerList from "./components/customers/customerlist";
import NewNonCorporate from "./components/loads/nonCorporateLoad/NewNonCorporate";
import NewEcxLoad from "./components/loads/ecxLoads/NewEcxLoads";

const theme = createTheme({
  typography: {
    fontSize: 13,
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
            <Route path="/non_corpoarate_load" element={<NewNonCorporate />} />
            <Route path="/ecx_load" element={<NewEcxLoad />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
