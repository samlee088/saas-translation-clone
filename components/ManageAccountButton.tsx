import { generatePortalLInk } from "@/actions/generatePortalLink";
import React from "react";

function ManageAccountButton() {
  return (
    <form action={generatePortalLInk}>
      <button type="submit">Manage Billing</button>
    </form>
  );
}

export default ManageAccountButton;
