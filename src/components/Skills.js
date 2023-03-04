import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';
import { useInView } from 'react-intersection-observer';
import skills from '../styles/skills.module.css';
import { FaReact } from 'react-icons/fa';

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
                    <li ref={javascriptRef} className="w-2/3 h-48 bg-blue-400 max-w-400">JavaScript</li>
                    <li ref={cssRef} className="w-2/3 h-48 bg-blue-500 max-w-400">CSS</li>
                    <li ref={expressRef} className="w-2/3 h-48 bg-blue-600 max-w-400">Express</li>
                    <li ref={solidityRef} className="w-2/3 h-48 bg-blue-700 rounded-b-lg max-w-400">Solidity</li>
                </ul>
            </main>
        </div>
    )
}