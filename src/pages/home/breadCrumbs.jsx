import * as React from "react";
import { Box, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { blue } from "@mui/material/colors";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";

const handleClick = (event) => {
  event.preventDefault();
  console.info("you clicked the breadcrumb");
};

export default function BreadCrumbs() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 1,
          ml: 2,
          mr: 3,
        }}
      >
        <Typography>Admin.</Typography>

        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Dashboard
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", color: blue[500] }}
              color="inherit"
              href="/manage_users"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Main
            </Link>
          </Breadcrumbs>
        </div>

        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: grey[200] }} variant="square">
            <AccountBalanceWalletIcon sx={{ bgcolor: grey[900] }} />
          </Avatar>
          <Avatar sizes="medium" sx={{ bgcolor: grey[300] }} variant="rounded">
            <LocalShippingIcon sx={{ bgcolor: grey[900] }} />
          </Avatar>
        </Stack>
      </Box>
    </div>
  );
}
