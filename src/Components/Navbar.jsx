import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HashLink as NavLink } from "react-router-hash-link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "GROUP", link: "/#about-us" },
    { name: "TECHNICAL SERVICES", link: "/services/tech-services" },
    { name: "MACH INFRA", link: "/services/mach-infra" },
    { name: "CONTACT US", link: "/#contact-us" },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="md:flex items-center justify-between py-2 w-full md:w-[85%] mx-auto px-6 md:px-0">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            src={logo}
            alt="logo"
            className="w-[200px] h-[70px] object-contain"
          />
        </div>
        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link Items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className={`md:ml-8 md:my-0 my-7 font-semibold ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <NavLink
                smooth
                to={link.link} // e.g., "/about#section-id"
                className={`font-playfair hover:text-[#104cba] duration-500 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
