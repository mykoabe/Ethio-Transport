import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
// import PermanentDrawerLeft from "../drawer/drawer";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const classes = useStyles();
  useEffect(() => {
    if (loading) return;
    if (!user && location.pathname === "/register")
      return navigate("/register");
    if (!user && location.pathname === "/login") return navigate("/login");
    if (!user) return navigate("login");
  }, [user, loading, navigate, location.pathname]);

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
