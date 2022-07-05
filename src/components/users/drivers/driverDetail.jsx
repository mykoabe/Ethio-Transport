import React from "react";
import TopBar from "../common/topBar";
import AddressForm from "./forms";

export default function DriverDetail() {
  return (
    <>
      <TopBar
        button_title={"Create"}
        user_title={"Edit Driver"}
        rout_title={"add_driver"}
      />
      <AddressForm />
    </>
  );
}
