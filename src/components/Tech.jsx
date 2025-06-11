import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";  
import { FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiPandas } from "react-icons/si";


const Tech = () => {
  return (
    <div>
      <div className="flex justify-center text-4xl text-white mb-25">Technologies I Know </div>
      <div className="">
        <div className="flex flex-wrap justify-center gap-12 mt-8 mb-6">
          <div className="text-7xl text-white"><FaHtml5 /></div>
          <div className="text-7xl text-white"><FaCss3Alt /></div>
          <div className="text-7xl text-white"><FaJsSquare /></div>
          <div className="text-7xl text-white"><FaReact /></div>
          <div className="text-7xl text-white"><FaNodeJs /></div>
          <div className="text-7xl text-white"><FaPython /></div>
          <div className="text-7xl text-white"><FaGitAlt /></div>
          <div className="text-7xl text-white"><DiMysql /></div>
          <div className="text-7xl text-white"><FaBootstrap /></div>
          <div className="text-7xl text-white"><SiTailwindcss /></div>
          <div className="text-7xl text-white"><FaFigma /></div>
          <div className="text-7xl text-white"><SiPandas /></div>
        </div>
      </div>
    </div>
  )
}

export default Tech
