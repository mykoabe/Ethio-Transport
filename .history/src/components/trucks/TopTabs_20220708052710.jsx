import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import TruckCards from './TruckCards'
import { Grids } from "../../pages/home/TruckCards";
import FlagIcon from "@mui/icons-material/Flag";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grids
          title={"Newly Added Trucks"}
          subtitle={18}
          icon={
            <FlagIcon
              sx={{
                fontSize: "3em",
                color: "red",
              }}
            />
          }
        />
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TopTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: blue[600],
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="Home tabs"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Non-Corporate Load" {...a11yProps(1)} />
          <Tab label="ECX Load" {...a11yProps(2)} />
          <Tab label="Container Orders" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TruckCards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TruckCards />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TruckCards />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TruckCards />
      </TabPanel>
    </Box>
  );
};

export default TopTabs;
