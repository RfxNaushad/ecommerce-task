import React from "react";
import { Link } from "react-router-dom";
import us from "../us.png";
import Logo from "../logo.png";
import facebook from "../icon/facebook-02.png";
import instagram from "../icon/instagram.png";
import twitter from "../icon/new-twitter.png";
import linkedin from "../icon/linkedin-02.png";

const Footer = () => {
  return (
    //     <footer className="bg-black text-gray-400 py-8">
    //       <div className="container mx-auto px-6 md:px-12">
    //       <div className="flex flex-col md:flex-row justify-between md:justify-start space-y-6 md:space-y-0 md:space-x-16">
    //   {/* Logo and Social Icons */}
    // <div className="space-y-4 md:mr-12">
    //   <div className="flex items-center space-x-2">
    //     <img src={Logo} alt="FurniFlex" className="h-10 w-10" />
    //     <span className="font-bold text-xl text-blue-400">
    //       <span className="text-white">Furni</span>Flex
    //     </span>
    //   </div>
    // </div>

    //   {/* Footer Links */}
    //   <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
    //     <div>
    //       <h3 className="text-white font-semibold mb-4">About Us</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <Link to="/master-plan" className="hover:text-white">
    //             Master Plan
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/jobs" className="hover:text-white">
    //             Jobs
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/invest" className="hover:text-white">
    //             Invest
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/pressroom" className="hover:text-white">
    //             Pressroom
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/blog" className="hover:text-white">
    //             Blog
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact" className="hover:text-white">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h3 className="text-white font-semibold mb-4">Explore EEVE</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <Link to="/unlock-robot-power" className="hover:text-white">
    //             Unlock my Robot Power
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/starlight" className="hover:text-white">
    //             Starlight
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/robot-platform" className="hover:text-white">
    //             Robot Platform
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/eeve-roadmap" className="hover:text-white">
    //             EEVE Roadmap
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h3 className="text-white font-semibold mb-4">Community & Support</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <Link to="/willow-community" className="hover:text-white">
    //             Willow X Community
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/developer-access" className="hover:text-white">
    //             Developer & Maker Access
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/special-cases" className="hover:text-white">
    //             Special Cases
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    // {/* Bottom Section */}
    // <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
    // <div className="flex space-x-4 text-xl">
    //       {/* Social Icons */}
    //       <img src={facebook} alt="facebook" className="h-5 w-5"/>
    //       <img src={instagram} alt="instagram" className="h-5 w-5"/>
    //       <img src={twitter} alt="twitter" className="h-5 w-5"/>
    //       <img src={linkedin} alt="linkedin" className="h-5 w-5"/>
    //     </div>
    //   <div className="flex space-x-6">
    //     <Link to="/march22-recap" className="hover:text-white">
    //       March22 Recap
    //     </Link>
    //     <Link to="/privacy-policy" className="hover:text-white">
    //       Privacy Policy
    //     </Link>
    //     <Link to="/general-terms" className="hover:text-white">
    //       General Terms
    //     </Link>
    //     <Link to="/contact" className="hover:text-white">
    //       Contact
    //     </Link>
    //   </div>
    //   <div className="mt-4 md:mt-0 flex items-center space-x-2">
    //     <img src={us} alt="US Flag" className="w-6" />
    //     <span>United States (English)</span>
    //   </div>
    // </div>

    // {/* Copyright */}
    // <div className="text-center mt-4 text-gray-500 text-xs">
    //   EEVE © 2024. All rights reserved.
    // </div>
    //       </div>
    //     </footer>

    <footer className="bg-black text-white py-20">
      <div className="container mx-auto grid grid-cols-5 gap-4 pb-14">
        {/* Logo Column */}
        <div className="col-span-2">
          <Link to="/">
            <div className="flex items-center">
              {/* Replace with actual image or SVG */}
              <img src={Logo} alt="FurniFlex Logo" className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">FurniFlex</span>
            </div>
          </Link>
        </div>

        {/* About Us Column */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About US</h4>
          <ul>
            <li>
              <Link to="/master-plan" className="hover:underline">
                Master Plan
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/invest" className="hover:underline">
                Invest
              </Link>
            </li>
            <li>
              <Link to="/pressroom" className="hover:underline">
                Pressroom
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore EEVE Column */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Explore EEVE</h4>
          <ul>
            <li>
              <Link to="/unlock-robot-power" className="hover:underline">
                Unlock my Robot Power
              </Link>
            </li>
            <li>
              <Link to="/starlight" className="hover:underline">
                Starlight
              </Link>
            </li>
            <li>
              <Link to="/robot-platform" className="hover:underline">
                Robot Platform
              </Link>
            </li>
            <li>
              <Link to="/eeve-roadmap" className="hover:underline">
                EEVE Roadmap
              </Link>
            </li>
          </ul>
        </div>

        {/* Community & Support Column */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Community & Support</h4>
          <ul>
            <li>
              <Link to="/willow-community" className="hover:underline">
                Willow X Community
              </Link>
            </li>
            <li>
              <Link to="/developer-access" className="hover:underline">
                Developer & Maker Access
              </Link>
            </li>
            <li>
              <Link to="/special-cases" className="hover:underline">
                Special Cases
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t container mx-auto grid grid-cols-5 gap-4 border-gray-700 mt-8 pt-10 text-sm">
        {/* Social Icons Column */}
        <div className="flex space-x-4 text-xl">
          <img src={facebook} alt="facebook" className="h-5 w-5" />
          <img src={instagram} alt="instagram" className="h-5 w-5" />
          <img src={twitter} alt="twitter" className="h-5 w-5" />
          <img src={linkedin} alt="linkedin" className="h-5 w-5" />
        </div>

        {/* Links Column */}
        <div className="col-span-3 flex justify-center space-x-5">
          <Link to="/march22-recap" className="hover:text-white">
            March22 Recap
          </Link>
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/general-terms" className="hover:text-white">
            General Terms
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Country Selector Column */}
        <div className="flex items-center space-x-2 justify-end">
          <img src={us} alt="US Flag" className="w-6" />
          <span>United States (English)</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-gray-500 text-xs">
        EEVE © 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
