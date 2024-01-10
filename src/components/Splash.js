import styles from "../styles/splash.module.css";
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoFileCode } from "react-icons/go";

export default function Splash(props) {
  return (
    <Fade bottom>
      <div className="fixed top-0 z-40 flex flex-col w-screen h-full overflow-scroll md:hidden bg-light-navy">
        <section className="flex flex-col items-baseline justify-end w-2/3 mt-36 ml-11 h-1/3">
          <Fade left delay={400}>
            <p className="text-3xl font-bold text-blue-100 font-recoleta-black">
              Alex Belardi
            </p>
            <p className="text-xl text-blue-100 font-recoleta-light">
              Software Developer
            </p>
            <a
              className="text-lg text-blue-100 underline font-recoleta-light"
              href="mailto:afbelardicode@gmail.com"
            >
              afbelardicode@gmail.com
            </a>
          </Fade>
        </section>
        <Fade right delay={400}>
          <section className="flex items-center w-full justify-evenly min-h-100 h-1/6">
            <a
              href="https://www.github.com/afbelardi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-gray-200 rounded-3xl h-11 w-11"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/afbelardi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-gray-200 rounded-3xl h-11 w-11"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://gist.github.com/afbelardi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-gray-200 rounded-3xl h-11 w-11"
            >
              <GoFileCode size={28} />
            </a>
          </section>
        </Fade>
        <Fade bottom delay={500}>
          <div className="flex justify-center ">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              class="font-recoleta-light text-lg flex justify-center bg-blue-500 w-32 h-12 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Résumé
            </a>
          </div>
        </Fade>
      </div>
    </Fade>
  );
}
