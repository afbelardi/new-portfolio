import styles from '../styles/aboutme.module.css';
import { Fade } from 'react-reveal';
import { useRef } from 'react';

export default function AboutMe({ aboutRef }) {

    

    return(
        <div className="flex flex-col w-full p-4 mt-10 md:mt-48 min-h-400">
            <div className="flex w-full overflow-x-hidden lg:mb-5 md:justify-center">
                <h1 ref={aboutRef} className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap sm:ml-5" id={styles.about}>About Me</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 lg:w-1/2 bg-lighter-blue ml-7" />
                </Fade>
            </div>
            <section className="flex flex-col items-center justify-center h-5/6">
                <img src='/me.jpg' id={styles.about} className="w-full mt-5 rounded-lg lg:hidden min-h-5/6 max-w-500 max-h-500"></img>
                <img src='/me2.jpg' id={styles.about} className="hidden mt-5 rounded-lg lg:w-3/5 lg:flex min-h-5/6 "></img>
                <div className="w-9/12 mt-8 text-justify lg:w-3/5 lg:text-lg lg:max-w-800">
                    <Fade up>
                        <p  className="text-white text-md font-recoleta-light">My interest in technology began from a young age. By 13 years old, I was creating technology product review videos for my
                        YouTube channel. While partnering with major brands, I amassed a following of 7,000 subscribers and 2 million video views.
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
                            <a href="https://www.linkedin.com/company/pullupon7th/" target="_blank" rel="noreferrer" className="ml-1 text-indigo-400 underline">7th Ave</a>. I contributed to the development of microservices and completed various front and back end projects while consistently learning on the fly.
                        </p> 
                    </Fade>
                    <Fade up>
                        <p className="mt-2 text-white text-md font-recoleta-light">
                        Whether it's developing robust software solutions, solving complex problems, or staying at the forefront of emerging technologies, I am committed to continuous growth and delivering excellence in every endeavor.
                        </p> 
                    </Fade>
                    <Fade up>
                        <p className="mt-2 text-white text-md font-recoleta-light">
                        With a proven track record of delivering high-quality results, I am currently seeking new opportunities in software engineering. I am eager to collaborate on exciting projects and contribute my skills to help organizations thrive. Let's connect and explore how we can work together to achieve mutual success.
                        </p> 
                    </Fade>
                   {/* 
                  //  CLOSING STATEMENT GOES HERE //
                   <Fade up>
                        <h1 className="mt-2 text-xl text-blue-300 font-recoleta-bold"></h1> 
                   </Fade>  */}
                </div>
            </section>     
        </div>
    )
}

