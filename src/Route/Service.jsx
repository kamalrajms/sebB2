import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h2>Service commponent</h2>
      <div className="sub-header">
        <Link to={""}>Web app</Link>
        <Link to={"app"}>App app</Link>
      </div>
      <Outlet />
    </div>
  );
}
