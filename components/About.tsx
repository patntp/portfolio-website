import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-teal-500">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My journey into software development began with a bachelor's degree
            in Computational Finance, an interdisciplinary program that blended
            finance, mathematics, and programming. Throughout my
            studies and internships, I became more curious about programming 
            beyond its application in data analysis. This realization led me to take elective course in web development and data
            science, learning more about the potential of technology.
          </p>
          <p className="py-2 text-gray-600">
            Today, I channel this diverse background into my work as a software
            developer. I'm driven by the
            opportunity to create innovative solutions with various technology. Whether it's
            developing robust web applications, implementing data-driven
            solutions, or crafting intuitive user interfaces, I'm committed to
            delivering high-quality code that makes a tangible impact.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="" alt="/" />
          {/* or use Image from nextjs to do lazy loading but need to modify config file if use external src*/}
        </div>
      </div>
    </div>
  );
};

export default About;
