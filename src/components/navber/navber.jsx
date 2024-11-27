import { useState } from "react";
import Button from "../common/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-lightsecondary px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 flex items-center"
                >
                  {item.name}
                  {item.children && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }}
                      className="ml-1 cursor-pointer"
                    >
                      {openDropdown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  )}
                </a>

                {/* Dropdown */}
                {item.children && openDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href={`#${child.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-lightsecondary"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button text="Get Started" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <IoMdMenu size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                  >
                    {item.name}
                    {item.children && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(index);
                        }}
                        className="cursor-pointer"
                      >
                        {openDropdown === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    )}
                  </a>

                  {/* Mobile Dropdown */}
                  {item.children && openDropdown === index && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href={`#${child.toLowerCase()}`}
                          className="block text-gray-600 hover:text-gray-900"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button text="Get Started" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
