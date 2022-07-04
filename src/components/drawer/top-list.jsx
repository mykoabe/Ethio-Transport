import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

// icons
import SortIcon from "@mui/icons-material/Sort";
import trans4 from "../../assets/trans4.png";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0.6,
        m: 0.6,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const TopList = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "background.paper",
        }}
      >
        <Item>
          <img
            style={{
              maxWidth: "80%",
              height: "auto",
              padding: 0,
              margin: 0,
            }}
            src={trans4}
            alt="logo"
          />
        </Item>
        <Item
          style={{
            paddingTop: 17,
          }}
        >
          <SortIcon />
        </Item>
      </Box>
    </div>
  );
};
export default TopList;
