import { Fade } from 'react-reveal';
import styles from '../styles/aboutme.module.css';
import { useInView } from 'react-intersection-observer';

export default function Projects(props) {

    const { ref: myRef, inView: isElementVisible } = useInView()
    const { ref: nftRef, inView: isNftVisible } = useInView()
    const { ref: gtopRef, inView: isGtopVisible } = useInView()
    return (
        <div className="flex flex-col w-full p-4 mt-10 min-h-1000">
            <div className="flex w-full">
                <h1 className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap" id={styles.about}>Projects I've built</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 ml-7 bg-lighter-blue" />
                </Fade>
            </div>
            <div className="flex flex-col w-full p-4 mt-3 min-h-800">
                <div ref={myRef} className={`${styles.notanimated} ${isElementVisible ? styles.projects: ''}`}>
                        <img className="rounded-lg "  src="/photoblog.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full bg-light-navy opacity-90"></div>
                </div>
                <div ref={nftRef} className={`${styles.notanimated} ${isNftVisible ? styles.projects: ''}`}>
                        <img className="rounded-lg "  src="/photomint.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full bg-light-navy opacity-90"></div>
                </div>
                <div ref={gtopRef} className={`${styles.notanimated} ${isGtopVisible ? styles.projects: ''}`}>
                        <img className="rounded-lg "  src="/gtop.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full bg-light-navy opacity-90"></div>
                </div>
            </div>
        </div>
    )
}