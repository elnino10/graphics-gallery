import { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { scroller } from "react-scroll";
// import Logo from "../assets/images/logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const connectRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    scroller.scrollTo("connect", {
      smooth: true,
      duration: 500,
      spy: true,
      exact: true,
    });
  };

  const onUpdateActiveLink = (val) => {
    setActiveLink(val);
  };

  return (
    <div className="flex items-center justify-between w-full h-20 bg-gray-800 text-white px-5">
        <div>Emmanuel</div>
        <div className="flex items-center justify-between w-[30%]">
            <div className="cursor-pointer hover:text-gray-300 transition duration-300">Galery</div>
            <div className="bg-white text-gray-900 px-2 py-2 rounded-sm font-bold cursor-pointer hover:bg-gray-500 hover:text-white transition duration-300">{`Let's connect`}</div>
        </div>
    </div>
  );
};

export default NavBar;
