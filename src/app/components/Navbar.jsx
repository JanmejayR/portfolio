import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import NavMenuIcon from "./NavMenuIcon";
const Navbar = ({ windowSize }) => {
  const [navIconClick, setNavIconClick] = useState(false);

  const githubSvg = (
    <a
      target="_blank"
      href="https://github.com/1jayyjayy"
      className="flex items-center justify-center w-12 h-12 text-[var(--textBody)] rounded-full hover:text-[var(--accent)]  transition duration-300"
      onClick={handleNavIconClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="80"
        height="80"
        viewBox="0 0 256 256"
      >
        <g
          className="fill-current"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(8.53333, 8.53333)">
            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
          </g>
        </g>
      </svg>
    </a>
  );
  const linkedinsvg = (
    <a
      target="_blank"
      href="https://x.com/1jayyjayy"
      className="flex items-center justify-center w-12 h-12 text-[var(--textBody)] rounded-full hover:text-[var(--accent)] transition duration-300"
      onClick={handleNavIconClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        fill="var(--textBody)"
        className="transition duration-300 hover:fill-[var(--accent)]"
      >
        <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
      </svg>
    </a>
  );

  function handleNavIconClick() {
    setNavIconClick((prev) => !prev);
  }

  return (
    <>
      <NavMenuIcon
        navIconClick={navIconClick}
        handleNavIconClick={handleNavIconClick}
      />
      <motion.nav
        className={`${
          windowSize.width >= 1024
            ? "fixed z-10 w-16 ml-16 h-screen "
            : `${
                navIconClick && windowSize.width < 1024
                  ? " z-30 fixed flex flex-col items-center justify-center w-full h-full transition-all duration-100 ease-in-out   bg-gray-500  rounded-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 gap-5 "
                  : " hidden "
              }`
        }`}
        initial="hidden"
        whileInView="visible"
        transition={{
          delay: windowSize.width < 1024 ? 0 : 0.5,
          duration: windowSize.width < 1024 ? 0.1 : 0.5,
        }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <ul
          className={` mt-44 text-[var(--textBody)] text-xl flex flex-col justify-start  items-center ${
            navIconClick && windowSize.width < 1024
              ? " space-y-10 "
              : " space-y-20 "
          }  font-gotham font-bold`}
        >
          {/* <li
            className={`nav-item ${
              navIconClick && windowSize.width < 1024 ? "" : " -rotate-90"
            }`}
          >
            <a href="/Janmejay_SD26.pdf" download onClick={handleNavIconClick}>
              Resume
            </a>
          </li> */}
          <li
            className={`nav-item ${
              navIconClick && windowSize.width < 1024 ? "" : " -rotate-90"
            }`}
          >
            <Link
              to="CONTACT"
              smooth={true}
              duration={1000}
              onClick={handleNavIconClick}
            >
              Contact
            </Link>
          </li>
          <li
            className={`nav-item ${
              navIconClick && windowSize.width < 1024 ? "" : " -rotate-90"
            }`}
          >
            <Link
              to="PROJECTS"
              smooth={true}
              duration={1000}
              onClick={handleNavIconClick}
            >
              Projects
            </Link>
          </li>
          <li
            className={`nav-item ${
              navIconClick && windowSize.width < 1024 ? "" : " -rotate-90"
            }`}
          >
            <Link
              to="ABOUT"
              smooth={true}
              duration={1000}
              onClick={handleNavIconClick}
            >
              About
            </Link>
          </li>
        </ul>

        <div
          className={` h-44 gap-2 mt-16 flex  ${
            navIconClick && windowSize.width < 1024 ? " flex-row " : "flex-col"
          } justify-center items-center`}
        >
          {githubSvg}
          /* {linkedinsvg} */
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
