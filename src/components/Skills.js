import styles from "../styles/aboutme.module.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import skills from "../styles/skills.module.css";
import { FaReact, FaServer } from "react-icons/fa";
import { SiJavascript, SiSolidity } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiCaretRight } from "react-icons/bi";

export default function Skills({ skillsRef }) {
  const { ref: reactRef, inView: isReactIconVisible } = useInView();
  const { ref: javascriptRef, inView: isJavaScriptVisible } = useInView();
  const { ref: cssRef, inView: isCSSIconVisible } = useInView();
  const { ref: expressRef, inView: isExpressIconVisible } = useInView();
  const { ref: solidityRef, inView: isSolidityIconVisible } = useInView();

  return (
    <div className="flex flex-col w-full p-4 mt-10 min-h-400">
      <div className="flex w-full overflow-x-hidden md:justify-center">
        <h1
          ref={skillsRef}
          className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap"
          id={styles.about}
        >
          My skills
        </h1>
        <Fade right>
          <hr className="w-2/5 h-0 mt-5 bg-lighter-blue ml-7" />
        </Fade>
      </div>
      <main className="flex flex-col w-full mt-7 xl:mt-16">
        <ul className="flex flex-col items-center w-full overflow-x-hidden xl:justify-center xl:flex-row">
          <li
            ref={reactRef}
            className={`${skills.showing} ${
              isReactIconVisible ? skills.skillsLeft : ""
            }`}
          >
            <FaReact size={98} className="text-white" />
            <p className="text-2xl text-white font-recoleta-regular">React</p>
          </li>
          <li
            ref={javascriptRef}
            className={`${skills.showing} ${
              isJavaScriptVisible ? skills.skillsRight : ""
            }`}
          >
            <SiJavascript size={98} className="text-white" />
            <p className="text-2xl text-white font-recoleta-regular">
              JavaScript
            </p>
          </li>
          <li
            ref={cssRef}
            className={`${skills.showing} ${
              isCSSIconVisible ? skills.skillsLeft : ""
            }`}
          >
            <IoLogoCss3 size={98} className="text-white" />
            <p className="text-2xl text-white font-recoleta-regular">CSS</p>
          </li>
          <li
            ref={expressRef}
            className={`${skills.showing} ${
              isExpressIconVisible ? skills.skillsRight : ""
            }`}
          >
            <FaServer size={98} className="text-white" />
            <p className="text-2xl text-white font-recoleta-regular">Express</p>
          </li>
          <li
            ref={solidityRef}
            className={`${skills.showing} ${
              isSolidityIconVisible ? skills.skillsLeft : ""
            }`}
          >
            <SiSolidity size={98} className="text-white" />
            <p className="text-2xl text-white font-recoleta-regular">
              Solidity
            </p>
          </li>
        </ul>
        <strong className="w-full mt-5 text-3xl text-center text-blue-300 lg:text-4xl xl:mt-16 font-recoleta-bold">
          Other skills include:
        </strong>
        <div className="flex justify-center min-h-150">
          <ul className="flex flex-col mt-2 min-w-100">
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                Hardhat
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                NestJS
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                Tailwind CSS
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                React Native
              </p>
            </li>
          </ul>
          <ul className="flex flex-col mt-2 ml-3 ">
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                HTML
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                MongoDB
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                Next.js
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                Ethers.js
              </p>
            </li>
            <li className="flex">
              <BiCaretRight className="mt-1 text-green-300" />
              <p className="text-lg text-white lg:text-xl font-recoleta-regular">
                Puppeteer
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
