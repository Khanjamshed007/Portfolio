import React from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ setMenu, menu }) => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
      <button className="navBtn" onClick={() => setMenu(!menu)}>
        <GiHamburgerMenu />
      </button>
    </>
  );
};

export const Navbar = ({ menu, setMenu }) => {
  return (
    <div className={`navbar ${menu ? "navComes" : ""}`}>
      <NavContent setMenu={setMenu}/>
    </div>
  );
};

const NavContent = ({ setMenu }) => (
  <>
    <motion.h2
      animate={{ x: [50, 50, 50], opacity: 1, scale: 1 }}
      transition={{
        duration: 5,
        delay: 0,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
      JAMSHED.
    </motion.h2>
    <div>
      <a onClick={() => setMenu(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenu(false)} href="#education">
        Education
      </a>
      <a onClick={() => setMenu(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenu(false)} href="#technologies">
        Tech
      </a>
      <a onClick={() => setMenu(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:khanjamshed404@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
