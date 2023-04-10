import React from "react";
import imageProfile from "../assets/nima2.png";
import Image from "next/image";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BsCloudDownload } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";

// Resume
// import myResume from '../assets/english3.pdf'

// Themes
import {useTheme}from 'next-themes'


const SIdebar = () => {

  const {theme,setTheme} = useTheme()
  const changeTheme = ()=>{
    setTheme(theme==='light'?"dark":"light")
  }

  return (
    <div>
      <Image
        src={imageProfile}
        alt="profile"
        className="h-36 w-36 rounded-full mx-auto "
      />
      <h2 className="my-3 text-3xl font-medium tracking-wider font-Alkatra dark:text-white">
         <span className="text-green-400">Nima</span> Mohammadi
      </h2>
      <p className="px-2 py-1 my-3 bg-nima rounded-full dark:bg-zinc-700 dark:text-white">Web Developer</p>
      <a
      href="/assets/english3.pdf"
        download='english3.pdf'
        className="px-2 py-1 my-3 bg-nima rounded-full flex items-center justify-center hover:bg-zinc-700  hover:text-white cursor-pointer dark:bg-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-black duration-300"
      >
        <BsCloudDownload className="w-6 h-6 mx-2 hover:animate-bounce" />
        Download CV
      </a>
      <div className="flex justify-around text-green-600 w-9/12 md:w-full mx-auto">
        <a href="https://www.youtube.com/channel/UCJ_e8RfP8vrO2Bz7DZZm-vw">
          <FaYoutube className="w-8 h-8 hover:text-zinc-700  dark:hover:text-white duration-300" />
        </a>
        <a href="https://github.com/NimaOBR">
          <AiFillGithub className="w-8 h-8 hover:text-zinc-700  dark:hover:text-white duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/nima-mohammadi-b5880122b/">
          <AiFillLinkedin className="w-8 h-8 hover:text-zinc-700  dark:hover:text-white duration-300" />
        </a>
      </div>
      {/* icons */}
      <div className=" py-4 bg-nima dark:bg-zinc-700 dark:text-white" style={{ margin: "1rem -1rem 0 -1rem" }}>
        <div className="flex items-center justify-center space-x-2">
          <MdLocationOn className="text-blue-800 dark:text-white" />
          <span>USA, NewYork </span>
        </div>
        <p className="my-2">Nimaobr@gmail.com</p>
        <p className="my-2">+98-933-533-1215</p>
      </div>
      <button className="bg-gradient-to-r from-Newgreen to-Newblue py-2 mt-3 text-white rounded-full w-8/12 hover:bg  duration-300 focus:outline-none dark:from-dark-700 dark:to-dark-700 dark:hover:from-white dark:hover:to-white dark:hover:text-black hover:to-zinc-700  hover:from-zinc-700 " 
      onClick={()=>window.open('mailto:Nimaobr@gmail.com')}>
        Email me
      </button>
      <button className="bg-gradient-to-l from-Newgreen to-Newblue py-2 mt-2 text-white rounded-full w-8/12  hover: shadow-lg duration-300 dark:from-dark-700 dark:to-dark-700 dark:hover:from-white dark:hover:to-white dark:hover:text-black hover:to-zinc-700  hover:from-zinc-700 " onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default SIdebar;
