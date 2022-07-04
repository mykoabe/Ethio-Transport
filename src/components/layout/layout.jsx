import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
// import PermanentDrawerLeft from "../drawer/drawer";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
import PermanentDrawerLeft from "../drawer/drawer";

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    marginLeft: "20%",
  },
});

const Layout = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/register");
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    fetchUserName();
  }, [user, loading, navigate]);

  return (
    <>
      {/* the drawer part */}

      { user && <PermanentDrawerLeft />}
      <main className={classes.page}>{children}</main>
    </>
  );
};

export default Layout;
