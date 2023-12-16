import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartModal from "./CartModal";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    if (showCart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showCart]);
  return (
    <div>
      <Toaster />
      <Navbar onclick={() => setShowCart(true)} />
      <div className="px-10">{children}</div>
      <Footer />
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-opacity-40 bg-black max-h-screen fixed top-3 left-0 right-0 bottom-0 z-50 w-screen flex justify-end"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full lg:w-[30%]"
              onClick={(e) => e.stopPropagation()}
            >
              <CartModal onclick={() => setShowCart(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
