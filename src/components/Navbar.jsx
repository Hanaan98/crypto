import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdWallet } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBar from "./SearchBar";

const Navbar = ({ onclick }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="flex flex-col">
        <nav
          className={`flex justify-around py-4  z-20 px-10  gap-20 ${
            scroll ? "backdrop-blur-md shadow-xl bg-accent" : ""
          }  w-full fixed top-0 left-0 right-0 z-10`}
        >
          <div className="flex items-center  justify-between gap-5 ">
            <Link to="/">
              <h3 className="text-3xl font-bold text-heading border-r border-r-[#323232] pr-5">
                Logo
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

              <NavLink
                to="/products"
                className={(navClass) =>
                  `flex text-${
                    navClass.isActive ? "secondary" : "text"
                  } hover:text-[#ffffffaa] cursor-pointer transition-colors duration-300`
                }
              >
                Products
              </NavLink>

              <NavLink
                to="/contact"
                className={(navClass) =>
                  `flex text-${
                    navClass.isActive ? "secondary" : "text"
                  } hover:text-[#ffffffaa] cursor-pointer transition-colors duration-300`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          <SearchBar scroll={scroll} />

          <div className="flex items-center justify-between gap-2">
            <button
              className={`bg-accent flex items-center justify-center gap-2 text-white px-3 ${
                scroll && "bg-tertiary"
              }  py-3 rounded-xl font-semibold hover:bg-tertiary`}
            >
              <MdWallet className="inline-block text-2xl" />
              Login
            </button>
            <button
              className={`bg-accent flex items-center justify-center gap-2 text-white px-3 ${
                scroll && "bg-tertiary"
              }  py-3 rounded-xl font-semibold hover:bg-tertiary`}
            >
              <CgProfile className="inline-block text-2xl" />
            </button>
            <button
              onClick={() => onclick()}
              className={`bg-accent flex items-center justify-center gap-2 text-white px-3 ${
                scroll && "bg-tertiary"
              }  py-3 rounded-xl font-semibold hover:bg-tertiary`}
            >
              <MdOutlineShoppingCart className="inline-block text-2xl" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
