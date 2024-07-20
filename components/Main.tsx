"use client";

import React, { useEffect, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const [nameColor, setNameColor] = useState<string>("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour <= 12) {
      setTimeOfDay("morning");
      setNameColor("text-orange-700");
    } else if (currentHour >= 13 && currentHour <= 17) {
      setTimeOfDay("afternoon");
      setNameColor("text-yellow-700");
    } else {
      setTimeOfDay("evening");
      setNameColor("text-blue-700");
    }
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's develop
          </p>
          {/* add functionality to greet by time and name's color changes by time */}
          <h1 className="py-4 text-gray-700 duration-1000">Good {timeOfDay}, I am <span className={nameColor}>Pat</span></h1>
          <h1 className="py-2 text-gray-700">A Software Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">I am a full-stack developer with experience in web development and AI. I enjoy tackling diverse challenges and am always ready to pick up new programming languages for innovative projects.</p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <a href="https://www.linkedin.com/in/nuttapat-naothaworn-a3827517b" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <a href="https://github.com/patntp" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <a href={`mailto:${process.env.EMAIL}`}>
                <AiTwotoneMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
