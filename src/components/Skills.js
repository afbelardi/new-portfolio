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
            <main className="flex w-full mt-7">
                <ul className="flex flex-col items-center w-full">
                    <li className="w-2/3 h-48 bg-blue-300 rounded-t-lg max-w-400">React</li>
                    <li className="w-2/3 h-48 bg-blue-400 max-w-400">JavaScript</li>
                    <li className="w-2/3 h-48 bg-blue-500 max-w-400">CSS</li>
                    <li className="w-2/3 h-48 bg-blue-600 max-w-400">Express</li>
                    <li className="w-2/3 h-48 bg-blue-700 rounded-b-lg max-w-400">Solidity</li>
                </ul>
            </main>
        </div>
    )
}