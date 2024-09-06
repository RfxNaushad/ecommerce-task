import React from "react";
import { Link } from "react-router-dom";
import us from "../us.png";
import Logo from "../logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="FurniFlex" className="h-10 w-10" />
              <span className="font-bold text-xl text-blue-600">FurniFlex</span>
            </div>
            <div className="flex space-x-4 text-xl">
              {/* Social Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/master-plan" className="hover:text-white">
                    Master Plan
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-white">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/invest" className="hover:text-white">
                    Invest
                  </Link>
                </li>
                <li>
                  <Link to="/pressroom" className="hover:text-white">
                    Pressroom
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Explore EEVE</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/unlock-robot-power" className="hover:text-white">
                    Unlock my Robot Power
                  </Link>
                </li>
                <li>
                  <Link to="/starlight" className="hover:text-white">
                    Starlight
                  </Link>
                </li>
                <li>
                  <Link to="/robot-platform" className="hover:text-white">
                    Robot Platform
                  </Link>
                </li>
                <li>
                  <Link to="/eeve-roadmap" className="hover:text-white">
                    EEVE Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">
                Community & Support
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/willow-community" className="hover:text-white">
                    Willow X Community
                  </Link>
                </li>
                <li>
                  <Link to="/developer-access" className="hover:text-white">
                    Developer & Maker Access
                  </Link>
                </li>
                <li>
                  <Link to="/special-cases" className="hover:text-white">
                    Special Cases
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-6">
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
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <img src={us} alt="US Flag" className="w-6" />
            <span>United States (English)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-gray-500 text-xs">
          EEVE © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
