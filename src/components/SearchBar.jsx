import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [showClose, setShowClose] = useState(false);
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setShowClose(true);
    } else {
      setShowClose(false);
    }
  };
  return (
    <form className="flex items-center bg-accent flex-1 px-3 py-3 rounded-xl gap-1 hover:bg-tertiary ">
      <MdOutlineSearch className="text-2xl text-heading" />
      <input
        type="text"
        placeholder="Search"
        onChange={searchChangeHandler}
        value={search}
        className="bg-transparent w-full text-heading outline-none"
        aria-label="Search"
      />
      {showClose && (
        <button
          type="button"
          className="text-2xl text-[#ffffffd3] hover:text-white transition-colors duration-300"
          onClick={() => {
            setSearch("");
            setShowClose(false);
          }}
        >
          <IoIosClose />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
