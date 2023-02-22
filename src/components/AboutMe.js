import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';

export default function AboutMe(props) {
    return(
        <div className="flex flex-col w-full p-4 mt-10 min-h-400">
            <div className="flex w-full">
                <h1 className="ml-2 text-4xl text-white font-recoleta-bold" id={styles.about}>About Me</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 bg-lighter-blue ml-7" />
                </Fade>
            </div>
            <section className="flex flex-col items-center justify-center h-5/6">
                <img src='/me.jpg' id={styles.about} className="w-full mt-5 rounded-lg min-h-5/6 max-w-400 max-h-400"></img>
                <main className="w-full mt-4 text-center max-w-500">
                <p className="text-white text-md font-recoleta-light">My interest in technology started from a young age. By 13 years old, I was creating
                </p>
            </main>
            </section>
            
        </div>
    )
}