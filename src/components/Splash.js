import styles from '../styles/splash.module.css';
import Fade from 'react-reveal/Fade';

export default function Splash (props) {
    return (
        <Fade bottom opposite className="opacity-5">
            <div className="absolute top-0 z-40 flex flex-col w-screen h-screen bg-black opacity-40">
                <section className="flex flex-col justify-end w-1/2 overflow-hiddenitems-baseline mt-36 ml-11 h-1/3">
                    <Fade left delay={400}>
                        <p className="mb-2 font-bold text-gray-50">Alex Belardi</p>
                        <p className="mb-2 text-gray-50">Software Developer</p>
                        <a className="underline text-gray-50" href="mailto:afbelardicode@gmail.com">afbelardicode@gmail.com</a>
                    </Fade>
                </section>
                <section className="w-full h-1/6">
                    
                </section>
            </div>
       </Fade>

    )
}