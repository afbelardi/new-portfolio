import { Fade } from 'react-reveal';
import styles from '../styles/aboutme.module.css';

export default function Projects(props) {
    return (
        <div className="flex flex-col w-full p-4 mt-10 min-h-1000">
            <div className="flex w-full">
                <h1 className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap" id={styles.about}>Projects I've built</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 ml-7 bg-lighter-blue" />
                </Fade>
            </div>
            <div className="flex flex-col justify-around w-full p-4 mt-3 min-h-800">
                <Fade right>
                    <div>
                    <img className="object-cover rounded-lg" src="/photoblog.png"></img>
                    </div>
                </Fade>
                <Fade left>
                    <div>
                    <img className="object-cover rounded-lg" src="/photomint.png"></img>
                    </div>
                </Fade>
                <Fade right>
                    <div>
                    <img className="object-cover rounded-lg" src="/photomint.png"></img>
                    </div>
                </Fade>
            </div>
        </div>
    )
}