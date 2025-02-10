import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="p-3 pt-10 bg-slate-900">
        <div className="flex justify-center mb-6 lg:flex-row md:flex-row sm:flex-row">
          <a
            className="mx-10 text-xl font-bold text-white sm:text-2xl hover:underline"
            href="#about"
          >
            About
          </a>
          <a
            className="mx-10 text-xl font-bold text-white sm:text-2xl hover:underline"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="mx-10 text-xl font-bold text-white sm:text-2xl hover:underline"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="mx-10 text-xl font-bold text-white sm:text-2xl hover:underline"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="justify-center text-center mb-7">
          <div className="flex flex-row items-center justify-center mt-4">
            <a
              target="_blank"
              href="https://github.com/supuntharindu123"
              className="p-3 mx-3 text-2xl text-white border border-white rounded-full hover:bg-slate-700 hover:text-white"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/supun-tharindu/"
              className="p-3 mx-3 text-2xl text-white border border-white rounded-full hover:bg-slate-700 hover:text-white"
            >
              <CiLinkedin></CiLinkedin>
            </a>
            <a
              target="_blank"
              href=""
              className="p-3 mx-3 text-2xl text-white border border-white rounded-full hover:bg-slate-700 hover:text-white"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              target="_blank"
              href=""
              className="p-3 mx-3 text-2xl text-white border border-white rounded-full hover:bg-slate-700 hover:text-white"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
          </div>
        </div>
        <p className="p-2 font-bold text-center text-white bg-slate-900">
          Copyright © 2022 My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
