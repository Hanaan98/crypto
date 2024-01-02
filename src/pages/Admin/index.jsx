import React from "react";
import AdminNavbar from "./components/AdminNavbar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div style={{height:"100vh"}} className="">
      <AdminNavbar />
      {/* LeftSide */}
      <div style={{height:"calc(100vh - 80px)"}} className=" flex">
        <SideBar />

        {/* RightSide */}
        <div className="flex-1 h-full overflow-y-auto">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
