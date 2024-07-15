import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
