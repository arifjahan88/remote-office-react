import Button from "../common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { navItems } from "./NavItems";

const MobileNav = ({ isOpen, toggleDropdown, openDropdowns }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-blue-600 rounded-lg mt-2"
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
                  <div
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-100 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium flex items-center justify-between"
                  >
                    <a href={item.href} className="flex-grow">
                      {item.name}
                    </a>
                    {item.children && (
                      <span className="cursor-pointer pl-2">
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
                            className="block text-gray-100 text-xl hover:text-gray-900 py-1"
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
    </>
  );
};

export default MobileNav;
