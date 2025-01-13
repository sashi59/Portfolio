import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      className="w-full mx-auto flex flex-col justify-between items-center  gap-6 p-6 md:p-9 text-sm md:text-lg mt-12"
      style={{ backgroundColor: "#141128" }}
    >
      <div className="space-y-4">
        <ul className="flex gap-12 z-10 cursor-pointer text-gray-400 ">
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-row justify-center gap-6 text-gray-400 text-3xl md:text-4xl">
          <a href="https://github.com/sashi59">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/shashi.__shekhar/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/shashishekhar59/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-gray-400 text-center">
        Copyright © {new Date().getFullYear()} <br />{" "}
        <p className="text-center mt-1 text-sm md:text-md">
          All rights are reserved by Shashishekhar
        </p>
      </div>
    </div>
  );
};

export default Footer;
