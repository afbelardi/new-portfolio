import styles from '../styles/splash.module.css';
import Fade from 'react-reveal/Fade';
import { FaGithub } from 'react-icons/fa'

export default function Splash (props) {
    return (
        <Fade bottom opposite className="opacity-5">
            <div className="absolute top-0 z-40 flex flex-col w-screen h-screen bg-black opacity-40">
                <section className="flex flex-col items-baseline justify-end w-2/3 overflow-hidden mt-36 ml-11 h-1/3">
                    <Fade left delay={400}>
                        <p className="text-3xl font-bold text-blue-100 font-recoleta-black">Alex Belardi</p>
                        <p className="text-xl text-blue-100 font-recoleta-light">Software Developer</p>
                        <a className="text-lg text-blue-100 underline font-recoleta-light" href="mailto:afbelardicode@gmail.com">afbelardicode@gmail.com</a>
                    </Fade>
                </section>
                <Fade right delay={400}>
                    <section className="flex items-center w-full justify-evenly h-1/6">
                        <a href="https://www.github.com/afbelardi" target="_blank"  className="flex items-center justify-center bg-gray-200 rounded-3xl h-11 w-11">
                            <FaGithub size={28}/>
                        </a>
                        <a className="bg-gray-200 rounded-3xl h-11 w-11"></a>
                        <a className="bg-gray-200 rounded-3xl h-11 w-11"></a>
                        <a className="bg-gray-200 rounded-3xl h-11 w-11"></a>
                    </section>
                </Fade>
            </div>
       </Fade>

    )
}