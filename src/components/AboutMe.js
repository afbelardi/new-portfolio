import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';

export default function AboutMe(props) {
    return(
        <div className="flex flex-col w-full p-4 mt-10 min-h-400">
            <div className="flex w-full">
                <h1 className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap" id={styles.about}>About Me</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 bg-lighter-blue ml-7" />
                </Fade>
            </div>
            <section className="flex flex-col items-center justify-center h-5/6">
                <img src='/me.jpg' id={styles.about} className="w-full mt-5 rounded-lg min-h-5/6 max-w-400 max-h-400"></img>
                <main className="w-full mt-4 text-center max-w-500">
                    <Fade up>
                        <p className="text-white text-md font-recoleta-light">My interest in technology started from a young age. By 13 years old, I was creating technology product review videos for my
                        YouTube channel. While partnering with major brands, I had amassed a following of 7,000 subscribers and 2 million video views.
                        </p>
                    </Fade>
                    <Fade up>
                        <p className="mt-2 text-white text-md font-recoleta-light">After graduating college, I started a job at an Apple retail store and worked my way up to the title of Genius. During that
                        time, I decided to start learning how to code and attended a General Assembly bootcamp. 
                        </p>
                    </Fade>
                    <Fade up>
                        <p className="mt-2 text-white text-md font-recoleta-light">
                        Fast-forward and I landed an internship with a company
                        called 
                            <a href="https://www.pullupon7th.com/" className="ml-1 text-indigo-400 underline">Seventh Ave</a>. I focused on the development of microservices and completed various front and back end projects while consistently learning on the fly.
                        </p> 
                    </Fade>
                    <Fade up>
                        <p className="mt-2 text-white text-md font-recoleta-light">
                        Currently, I am looking for an opportunity to join and contribute to a new company. 
                        </p>
                    </Fade>
                    <Fade up>
                        <p className="mt-2 text-white text-md font-recoleta-light">
                        Lastly, in addition to my interest in technology, I've been a photographer for many years and you can check out some of my more recent work 
                            <a href="https://afbelardi-blog.herokuapp.com/" className="ml-1 text-indigo-400 underline">here.</a> 
                        </p> 
                    </Fade> 
                </main>
            </section>     
        </div>
    )
}