import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../common/Button";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

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

  const navItems = [
    { name: "Home", href: "#home" },
    {
      name: "Teams",
      href: "#teams",
      children: ["Engineering", "Design", "Marketing", "Technology"],
    },
    { name: "About", href: "#pages" },
    { name: "Blogs", href: "#pages" },
    { name: "Career", href: "#pages" },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const menuItemVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
      },
    },
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
          <div className="hidden md:flex md:items-center md:space-x-4">
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
          <div className="md:hidden flex items-center">
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between">
                      <a href={item.href} className="flex-grow">
                        {item.name}
                      </a>
                      {item.children && (
                        <span onClick={() => toggleDropdown(index)} className="cursor-pointer pl-2">
                          <IoIosArrowDown />
                        </span>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.children && openDropdowns[index] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                              duration: 0.3,
                              height: { duration: 0.3 },
                            },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                              duration: 0.2,
                              height: { duration: 0.2 },
                            },
                          }}
                          className="pl-4 mt-2 space-y-2 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <motion.a
                              key={child}
                              href={`#${child.toLowerCase()}`}
                              whileHover={{ scale: 1.05 }}
                              className="block text-gray-600 hover:text-gray-900 py-1"
                            >
                              {child}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button text="Get Started" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
