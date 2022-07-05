import React from "react";
import TopBar from "../common/topBar";
import AddressForm from "./forms";

export default function CustomerDetail() {
  return (
    <>
      <TopBar
        button_title={"Create"}
        user_title={"Edit Customer"}
        rout_title={"newCustomer"}
      />
      <AddressForm />
    </>
  );
}
