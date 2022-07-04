import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
// import PermanentDrawerLeft from "../drawer/drawer";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import PermanentDrawerLeft from "../drawer/drawer";

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    marginLeft: "20%",
  },
  login: {
    background: "#f9f9f9",
    marginLeft: "20%",
  },
});

const Layout = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/register");
  }, [user, loading, navigate]);

  return (
    <>
      {/* the drawer part */}

      {user && (
        <>
          <PermanentDrawerLeft />
          <main className={classes.page}>{children}</main>
        </>
      )}

      {!user && <register className={classes.login}>{children}</register>}
    </>
  );
};

export default Layout;
