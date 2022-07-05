import React from "react";
import TopBar from "../common/topBar";
import AddressForm from "./forms";

export default function FacilitatorDetail() {
  return (
    <>
      <TopBar
        button_title={"Create"}
        user_title={"Edit Facilitator"}
        rout_title={"add_facilitator"}
      />
      <AddressForm />
    </>
  );
}
