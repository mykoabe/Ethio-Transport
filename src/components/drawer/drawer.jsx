import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

// import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PrimarySearchAppBar from "../appbar/appbar";
// icons
//import HomeIcon from "@mui/icons-material/Home";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import BuildIcon from "@mui/icons-material/Build";
import CellTowerIcon from "@mui/icons-material/CellTower";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import HomeIcon from "@mui/icons-material/Home";
import { Collapse } from "@mui/material";
import TopList from "./top-list";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Home from "../../pages/home/home";

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: {
      main: "#e3dcdd",
    },
  },
});

const PermanentDrawerLeft = () => {
  const [open7, setOpen7] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  // const handleUsers = () => {
  //   setOpen1(!open1);
  // };

  const handleUsers = () => {
    setOpen1(!open1);
  };
  const handleLoads = () => {
    setOpen7(!open7);
  };
  const handleFinance = () => {
    setOpen2(!open2);
  };
  const handleUserData = () => {
    setOpen3(!open3);
  };
  const handleAccounts = () => {
    setOpen4(!open4);
  };
  const handleCompliants = () => {
    setOpen5(!open5);
  };
  const handleAllData = () => {
    setOpen6(!open6);
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      path: "/",
      submenu: [],
      isopen: "",
      open_fun: "",
    },
    {
      text: "Manage Users",
      icon: <PivotTableChartIcon />,
      path: "/manage_users",
      open_fun: handleUsers,
      is_open: open1,
      submenu: [
        {
          text: "Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Manage Loads",
      icon: <PivotTableChartIcon />,
      path: "/manage_loads",
      open_fun: handleLoads,
      is_open: open7,
      submenu: [
        {
          text: "Non new-corporate",
          path: "/non_corpoarate_load",
        },
        {
          text: "New ECX Load",
          path: "/add_driver",
        },
        {
          text: "New Container order",
          path: "/add_facilitator",
        },
        {
          text: "Non corporate load list",
          path: "/add_facilitator",
        },
        {
          text: "ECX load list",
          path: "/add_facilitator",
        },
        {
          text: "Container order list",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Manage Finance",
      icon: <AttachMoneyIcon />,
      path: "/manage_finance",
      open_fun: handleFinance,
      is_open: open2,
      submenu: [
        {
          text: "Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Manage User Data",
      icon: <FilterNoneIcon />,
      path: "/manage_user_data",
      open_fun: handleUserData,
      is_open: open3,
      submenu: [
        {
          text: "Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Manage Accounts",
      icon: <BuildIcon />,
      path: "/manage_accounts",
      open_fun: handleAccounts,
      is_open: open4,
      submenu: [
        {
          text: "Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Manage Compliants",
      icon: <CellTowerIcon />,
      path: "/manage_compliants",
      open_fun: handleCompliants,
      is_open: open5,
      submenu: [
        {
          text: "Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Manage data",
      icon: <OilBarrelIcon />,
      path: "/manage_data",
      open_fun: handleAllData,
      is_open: open6,
      submenu: [
        {
          text: "Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
    {
      text: "Statstics",
      icon: <SignalCellularAltIcon />,
      path: "/stastics",
      open_fun: "",
      is_open: "",
      submenu: [
        {
          text: ". Add Customer",
          path: "/add_customer",
        },
        {
          text: "Add Driver",
          path: "/add_driver",
        },
        {
          text: "Add Facilitator",
          path: "/add_facilitator",
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "flex-start",
      }}
    >
      <Box
        component="register"
        sx={{
          width: "100%",
          flexGrow: 1,
          bgcolor: "background.default",
          p: 2,
          ml: 20,
        }}
      ></Box>

      <CssBaseline />
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
      </ThemeProvider>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <TopList />

        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
        >
          {menuItems.map((item) => (
            <>
              <ListItemButton onClick={item.open_fun}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.is_open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={item.is_open} timeout="auto" unmountOnExit>
                {item.submenu.map((sub) => (
                  <List component="div" disablePadding key={sub.text}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <Link to={sub.path}>
                        {" "}
                        <ListItemText primary={sub.text} />
                      </Link>
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            </>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          width: "100%",
          flexGrow: 1,
          bgcolor: "background.default",
          p: 2,
          ml: 20,
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};
export default PermanentDrawerLeft;
