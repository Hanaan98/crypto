import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogOut, CgProfile } from "react-icons/cg";

const AdminNavbar = () => {
  return (
    <div className="flex h-[80px]">
        <nav
          className={`flex justify-between z-20 px-10 gap-20 w-full`}
        >
          <div className="flex items-center  justify-between gap-5 ">
            <Link to="/admin">
              <h3 className="text-3xl font-bold text-heading border-r border-r-[#323232] pr-5">
                Admin
              </h3>
            </Link>

            <div className="items-center hidden space-x-8 lg:flex text-heading font-semibold">
              <NavLink
                to="/"
                className={(navClass) =>
                  `flex text-${
                    navClass.isActive ? "secondary" : "text"
                  } hover:text-[#ffffffaa] cursor-pointer transition-colors duration-300`
                }
              >
                Home
              </NavLink>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <button
              className={`bg-accent flex items-center justify-center gap-2 text-white px-3 ${
                scroll && "bg-tertiary"
              }  py-3 rounded-xl font-semibold hover:bg-tertiary`}
            >
              <CgLogOut className="inline-block text-2xl" />
              Logout
            </button>
          </div>
        </nav>
    </div>
  );
};

export default AdminNavbar;
