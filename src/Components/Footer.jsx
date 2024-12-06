import React from "react";
import insta from "../assets/insta.png";
import linkdin from "../assets/linkdin.png";
import x from "../assets/twitter.png";
import fb from "../assets/fb.png";
import logo from "../assets/logo.png";
import footerbg from "../assets/footerbg.png";
const Footer = () => {
  return (
    <footer className="relative  text-black">
      {/* Top Section */}
      <div className="w-[85%]  mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8   pt-12 pb-8">
        {/* Logo and Social Media */}
        <div>
          <img
            src={logo}
            alt=""
            className="w-[250px] h-[80px] object-contain"
          />
          <p className="text-lg font-figtree my-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            suscipit perferendis perspiciatis nam similique qui, hic
             
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="   flex items-center justify-center   text-[#00235a]  "
            >
              <img src={fb} alt="" />
            </a>
            <a
              href="#"
              className="w-10 h-10 p-2  flex items-center justify-center   text-[#00235a]  "
            >
              <img src={insta} alt="" />
            </a>
            <a
              href="#"
              className="w-10 h-10  p-2  flex items-center justify-center   text-[#00235a]  "
            >
              <img src={x} alt="" />
            </a>
            <a
              href="#"
              className="w-10 h-10  p-2 flex items-center justify-center   text-[#00235a]  "
            >
              <img src={linkdin} alt="" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg font-figtree">
          
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
             
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-4">Contact Us</h3>
          <p className="text-lg font-figtree">
            123 Business Road, Suite 100 <br />
            Cityville, ST 12345 <br />
            Email: info@business.com <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="border-t-[1px]">
        <div className=" w-[85%] font-figtree py-4 mx-auto 6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-lg  ">© 2024 Mach International. All Rights Reserved.</p>
          <div className="flex space-x-4 text-lg mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <img src={footerbg} alt="" className="grayscale rotate-180 w-full absolute bottom-0 -z-10" />
    </footer>
  );
};

export default Footer;
