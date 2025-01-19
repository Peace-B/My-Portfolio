import React, { useState } from 'react';
import '../css/NavBar.css';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="header sticky-top backdrop-blur text-[#babae4] shadow-xl">
        <div className="w-full flex justify-between items-center p-4">
          <div className="">
            <a href="#home" className="text-xl">
              Dev.
            </a>
            <a href="#home" className="text-purple-500 text-xl">
              Peace
            </a>
          </div>

          {/* Mobile menu toggle button (Hide when menu is open) */}
          <button
            className={`lg:hidden text-2xl ${isMobileMenuOpen ? 'hidden' : 'block'}`}
            onClick={toggleMobileMenu}
          >
            &#9776; {/* Hamburger icon */}
          </button>

          {/* Navigation links */}
          <motion.div
            className={`lg:flex gap-10 ${isMobileMenuOpen ? 'flex flex-col gap-0 mt-32 z-40' : 'hidden'} lg:flex-row`}
            initial={{ x: 500 }}
            animate={{ x: -20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <a href="#about" className="py-2">About</a>
            <a href="#project" className="py-2">Projects</a>
            <a href="#contact" className="py-2">Contact</a>
            <button className="text-2xl py-2">Resume</button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
