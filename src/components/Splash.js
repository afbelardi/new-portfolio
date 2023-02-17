import styles from '../styles/splash.module.css';
import Fade from 'react-reveal/Fade';
import { FaGithub } from 'react-icons/fa'

export default function Splash (props) {
    return (
        <Fade bottom opposite className="opacity-5">
            <div className="absolute top-0 z-40 flex flex-col w-screen h-screen bg-black opacity-40">
                <section className="flex flex-col justify-end w-1/2 overflow-hiddenitems-baseline mt-36 ml-11 h-1/3">
                    <Fade left delay={400}>
                        <p className="mb-1 text-2xl font-bold text-gray-50 font-recoleta-black">Alex Belardi</p>
                        <p className="mb-2 text-gray-50 font-sabon">Software Developer</p>
                        <a className="underline text-gray-50 font-sabon" href="mailto:afbelardicode@gmail.com">afbelardicode@gmail.com</a>
                    </Fade>
                </section>
                <section className="flex items-center justify-center w-full h-1/6">
                    <FaGithub className={styles.icons}/>
                </section>
            </div>
       </Fade>

    )
}