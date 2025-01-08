import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import sashi from "../assets/sashi.png";
import sashi_shd from "../assets/sashi_shd.png";
import sashi_garder from "../assets/sashi_garder.jpg";

// import myres from "../assets/RESUME.pdf";
import { SiLeetcode } from "react-icons/si";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb
} from "react-icons/di";
import {  RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative" id="about">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Developer",
              1000,
              "Android Developer",
              1000,
              "Computer Student",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hi, I am <br />
            <span className="text-blue-500">SHASHISHEKHAR</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            3rd year Computer Science Student, having proficiency in Web
            Development and DSA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-blue-400 rounded-xl"
              onClick={() => {
                // Open a new tab to preview the resume
                 window.open("./Resume_shashishekhar.pdf", "_blank");

                // // Wait for the preview tab to open before offering the download
                // if (previewWindow) {
                //   setTimeout(() => {
                //     const link = document.createElement("a");
                //     link.href = "./RESUME.pdf"; // Path to your CV file
                //     link.download = "Shashishekhar_Resume.pdf"; // Name of the file to be downloaded
                //     link.click();
                //   }, 2000); // Adjust timing as necessary
                // }
              }}
            >
              See Resume
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-blue-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/sashi59"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/shashishekhar59/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/shashi.__shekhar/"
              >
                <AiOutlineInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.leetcode/u/sashi59/"
              >
                <SiLeetcode />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={sashi_garder}
          className="w-[400px] md:w-[420px] mt-9 p-2  rounded-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          // style={{ width: "110%" }}
        />
      </div>

      <p className="text-gray-200 mt-9 text-center text-2xl ">My Tech Stack</p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="grid grid-cols-3 md:flex text-7xl px-12 md:px-0 w-full justify-center items-center py-9"
      >
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <RiTailwindCssLine className="text-blue-500 mx-2" />

        <DiNodejsSmall className="text-green-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <RiNextjsFill className="text-white mx-2" />

        <DiMongodb className="text-green-400 mx-2" />
        <AiOutlineGithub className="text-gray-300 mx-2" />
        <TbBrandCpp className="text-purple-600 mx-2" />

      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
