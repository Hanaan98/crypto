import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import CartItem from "./CartItem";
import { AnimatePresence, motion } from "framer-motion";
const SearchBar = ({ scroll }) => {
  const [search, setSearch] = useState("");
  const [showSearchField, setShowSearchField] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setShowClose(true);
    }
    if (e.target.value.length > 2) {
      setShowSearchField(true);
    } else {
      setShowClose(false);
      setShowSearchField(false);
    }
  };
  return (
    <form
      className={`flex max-w-2xl relative items-center bg-accent ${
        scroll && "bg-tertiary"
      } flex-1 px-3 py-3 rounded-xl gap-1 hover:bg-tertiary `}
    >
      <MdOutlineSearch className="text-2xl text-heading" />
      <input
        type="text"
        placeholder="Search"
        onChange={searchChangeHandler}
        value={search}
        className="bg-transparent  w-full text-heading outline-none"
        aria-label="Search"
      />
      {showClose && (
        <button
          type="button"
          className="text-2xl text-[#ffffffd3] hover:text-white transition-colors duration-300"
          onClick={() => {
            setSearch("");
            setShowSearchField(false);
            setShowClose(false);
          }}
        >
          <IoIosClose />
        </button>
      )}
      <AnimatePresence>
        {showSearchField && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col shadow-md gap-5 items-center p-4 absolute mx-auto h-fit rounded-xl top-14 left-0 right-0 bottom-0 bg-accent ${
              scroll && "bg-tertiary"
            }`}
          >
            <CartItem />
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default SearchBar;
