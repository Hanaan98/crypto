import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { ART_PRODUCTS } from "../Data";
import { Link, useParams } from "react-router-dom";
// import "./SearchBar.css"; // Create a CSS file for styling

const SearchBar = ({ scroll }) => {
  const [search, setSearch] = useState("");
  const [showSearchField, setShowSearchField] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const url = useParams();

  useEffect(() => {
    setSearch("");
    setShowSearchField(false);
    setShowClose(false);
    setSearchResults([]);
  }, [url]);

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setShowClose(true);
      const results = ART_PRODUCTS.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
    if (e.target.value.length > 2) {
      setShowSearchField(true);
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      setShowClose(false);
      setShowSearchField(false);
      document.body.style.overflow = "auto"; // Enable scroll
    }
  };

  const closeModal = () => {
    setSearch("");
    setShowSearchField(false);
    setShowClose(false);
    document.body.style.overflow = "auto"; // Enable scroll
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
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
          onClick={closeModal}
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
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            {searchResults.length < 1 ? (
              <div className="flex flex-col items-center gap-5">
                <p className="text-white text-lg font-semibold">
                  No Results Found
                </p>
                <p className="text-white text-sm">
                  Try Searching for something else
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5 w-full">
                {searchResults.slice(0, 4).map((item) => (
                  <Link
                    to={`/products/${item.id}`}
                    key={item.id}
                    onClick={closeModal}
                    className={`flex items-center justify-between ${
                      scroll ? "bg-accent" : "bg-tertiary "
                    } rounded-xl p-3 w-full hover:opacity-70 transition-colors duration-300`}
                  >
                    <div className="flex  gap-2">
                      <img
                        src={item.images[0].src}
                        alt=""
                        className="w-[2.5rem] h-[2.5rem] rounded-xl object-cover"
                      />

                      <div className="flex flex-col gap-4 ">
                        <h1 className="text-white text-md font-semibold tracking-wider">
                          {item.title}
                        </h1>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-white text-md font-semibold">
                        {item.price} USDC
                      </h1>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default SearchBar;
