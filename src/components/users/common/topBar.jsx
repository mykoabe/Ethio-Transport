import * as React from "react";
import { Box, Button } from "@mui/material";

import Link from "@mui/material/Link";

import Title from "../../charts/Title";

export default function TopBar({ button_title, user_title, rout_title }) {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 1,
          ml: 2,
          mr: 3,
          pt: 2,
        }}
      >
        <Title> {user_title} </Title>
        <Link href={`/${rout_title}`}>
          {button_title ? (
            <Button variant="outlined" color="success">
              {button_title}
            </Button>
          ) : (
            <p></p>
          )}
        </Link>
      </Box>
    </div>
  );
}
