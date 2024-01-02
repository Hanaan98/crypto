import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarButton = ({ title, navLink }) => {
  const navigate = useNavigate();
  const s = useLocation();
  const links = s?.pathname?.split("/");
  return <button className={`py-1 px-3 rounded-lg transition-transform duration-200 ease-in-out ${links.includes(navLink) ? " translate-x-3 text-black bg-slate-50" : "text-white"}`}
  onClick={() => navigate(navLink)}>{title}</button>
  ;
};

export default SidebarButton;
