import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';

export default function AboutMe(props) {
    return(
        <div className="flex flex-col w-full p-6 mt-10 h-1/4">
            <div className="flex w-full">
                <h1 className="text-4xl text-white font-recoleta-bold" id={styles.about}>About Me</h1>
            <Fade right>
                <hr className="w-2/5 h-0 mt-5 bg-lighter-blue ml-7" />
            </Fade>
            </div>
            <img src='/me.jpg' id={styles.about} className="mt-5 rounded-lg "></img>
        </div>
    )
}