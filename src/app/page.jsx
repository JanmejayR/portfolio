"use client";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
export default function Home() {

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar windowSize={windowSize} />
      <HomePage />
      <About />
      <MyProjects windowSize={windowSize}/>
      <Contact windowSize={windowSize}/>
    </>
  );
}
