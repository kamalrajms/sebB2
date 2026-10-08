import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomerAdd from "../CustomerAdd";
import CustomerView from "../CustomerView";

export default function Service() {
  return (
    <div>
      <h2>Service commponent</h2>
      <CustomerAdd />
      <CustomerView />
      <div className="sub-header">
        <Link to={""}>Web app</Link>
        <Link to={"app"}>App app</Link>
      </div>
      <Outlet />
    </div>
  );
}
