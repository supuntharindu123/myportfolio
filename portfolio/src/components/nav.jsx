import React from "react";
import { useState } from "react";

function NavBar() {
  return (
    <div>
      <div className="p-2 dark:bg-slate-900 bg-slate-800 dark:shadow">
        <ul className="xl:flex">
          <li className="px-6 py-2 mx-3 text-3xl font-bold text-white hover:text-zinc-300">
            <a href="">Supun Tharindu</a>
          </li>

          <ul className="lg:flex ms-auto md:flex ">
            <li className="px-6 py-2 mx-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:scale-105 hover:text-zinc-300">
              <a href="/">Home</a>
            </li>
            <li className="px-6 py-2 mx-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:scale-105 hover:text-zinc-300">
              <a href="#about">About</a>
            </li>

            <li className="px-6 py-2 mx-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:scale-105 hover:text-zinc-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="px-6 py-2 mx-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:scale-105 hover:text-zinc-300">
              <a href="#skills">Skills</a>
            </li>
            <li className="px-6 py-2 mx-3 text-3xl font-bold text-white transition duration-150 ease-in-out hover:scale-105 hover:text-zinc-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
