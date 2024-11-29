import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { dropdownVariants, menuItemVariants } from "../motion/MenuVariants";
import MobileNav from "./MobileNav";
import { navItems } from "./NavItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="flex-shrink-0 flex items-center">
              <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={menuItemVariants}
                initial="initial"
                whileHover="hover"
                className="relative group"
                onMouseEnter={() => item.children && setHoveredItem(index)}
                onMouseLeave={() => item.children && setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-lightsecondary px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.children && (
                    <span className="ml-1">
                      <IoIosArrowDown />
                    </span>
                  )}
                </a>

                {/* Dropdown with Framer Motion */}
                <AnimatePresence>
                  {item.children && hoveredItem === index && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute left-0 mt-2 w-48 bg-white drop-shadow-xl rounded-lg py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <motion.a
                          key={child}
                          href={`#${child.toLowerCase()}`}
                          whileHover={{ scale: 1.05 }}
                          className="block px-4 py-2 text-gray-700 hover:text-secondary"
                        >
                          {child}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <Button text="Get Started" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <IoMdMenu size={24} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNav isOpen={isOpen} openDropdowns={openDropdowns} toggleDropdown={toggleDropdown} />
      </div>
    </nav>
  );
};

export default Navbar;
