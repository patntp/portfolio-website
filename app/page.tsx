import About from "@/components/About";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
