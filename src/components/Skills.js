import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import skills from '../styles/skills.module.css';
import { FaReact, FaCss3, FaServer } from 'react-icons/fa';
import { SiJavascript, SiSolidity } from 'react-icons/si';
import { IoLogoCss3 } from 'react-icons/io';

export default function Skills(props) {

    const { ref: reactRef, inView: isReactIconVisible } = useInView();
    const { ref: javascriptRef, inView: isJavaScriptVisible } = useInView();
    const { ref: cssRef, inView: isCSSIconVisible } = useInView();
    const { ref: expressRef, inView: isExpressIconVisible } = useInView();
    const { ref: solidityRef, inView: isSolidityIconVisible } = useInView();


    return (
        <div className="flex flex-col w-full p-4 mt-10 min-h-400">
            <div className="flex w-full">
                <h1 className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap" id={styles.about}>My skills</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 bg-lighter-blue ml-7" />
                </Fade>
            </div>
            <main className="flex w-full mt-7">
                <ul className="flex flex-col items-center w-full">
                    <li ref={reactRef} className={`${skills.showing} ${isReactIconVisible ? skills.skills: ''}`}>
                        <FaReact size={98} className="text-white" />
                        <p className="text-2xl text-white font-recoleta-regular">React</p>
                    </li>
                    <li ref={javascriptRef} className={`${skills.showing} ${isReactIconVisible ? skills.skills: ''}`}>
                        <SiJavascript size={98} className="text-white" />
                        <p className="text-2xl text-white font-recoleta-regular">JavaScript</p>
                    </li>
                    <li ref={cssRef} className={`${skills.showing} ${isReactIconVisible ? skills.skills: ''}`}>
                        <IoLogoCss3 size={98} className="text-white" />
                        <p className="text-2xl text-white font-recoleta-regular">CSS</p>
                    </li>
                    <li ref={expressRef} className={`${skills.showing} ${isReactIconVisible ? skills.skills: ''}`}>
                        <FaServer size={98} className="text-white" />
                        <p className="text-2xl text-white font-recoleta-regular">Express</p>
                    </li>
                    <li ref={solidityRef} className={`${skills.showing} ${isReactIconVisible ? skills.skills: ''}`}>
                        <SiSolidity size={98} className="text-white" />
                        <p className="text-2xl text-white font-recoleta-regular">Solidity</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}