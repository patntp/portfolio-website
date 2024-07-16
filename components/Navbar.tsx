'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiTwotoneMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, } from "react-icons/fa";

export default function Navbar() {
  const [sideNav, setSideNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  const handleNav = () => {
    setSideNav(!sideNav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90){
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/next.svg" alt="/" width="50" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>

          {/* for small devices */}
          <div className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} onClick={handleNav} />
          </div>
        </div>
      </div>

      <div className={sideNav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            sideNav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
          <div>
              <div className="flex w-full items-center justify-between">
                <Image src="/assets/next.svg" alt="/" width="87" height="35" />
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose onClick={handleNav}/>
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">Build something cool</p>
              </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href={"/"}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href={"/"}>
                <li className="py-4 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="py-40">
              <p className="uppercase tracking-widest text-teal-500">Get in touch</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiTwotoneMail/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
