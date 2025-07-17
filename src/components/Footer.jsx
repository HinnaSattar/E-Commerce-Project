import React from "react";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import gift from "../assets/gift1.gif";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-200 text-gray-400 px-10 py-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
        
        {/* Logo Column */}
        <div>
          <h2 className="text-2xl font-bold">
           <span className="text-gray-400"> E-</span>Commerence
          </h2>
          <p className="mt-2">Shop smarter, not harder.<br />Get it delivered.</p>
          <div className="flex gap-3 mt-4">
            <img src={insta} alt="Instagram" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
            <img src={twitter} alt="Twitter" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
            <img src={facebook} alt="Facebook" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
            <img src={youtube} alt="YouTube" className="h-6 w-6 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Products</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Locations</h3>
          <ul className="space-y-1">
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Nagpur</li>
            <li>Bangalore</li>
            <li>Goa</li>
          </ul>
        </div>

        {/* Image Column */}
        <div className="flex justify-center">
          <img src={gift} alt="Gift Illustration" className="h-32 w-auto rounded shadow-lg" />
        </div>

      </div>

      <p className="text-center mt-6 text-sm text-gray">
        © All Rights Reserved QuickPik
      </p>
    </footer>
  );
};

export default Footer;
