import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';


export default function Skills(props) {
    return (
        <div className="flex flex-col w-full p-4 mt-10 min-h-400">
            <div className="flex w-full">
                <h1 className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap" id={styles.about}>My skills</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 bg-lighter-blue ml-7" />
                </Fade>
            </div>
        </div>
    )
}