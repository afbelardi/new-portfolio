import { Fade } from 'react-reveal';
import styles from '../styles/aboutme.module.css';
import { useInView } from 'react-intersection-observer';
import { VscFolderOpened } from 'react-icons/vsc'

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
            <div className="flex flex-col w-full p-1 mt-3 min-h-800">
                <div ref={myRef} className={`${styles.notanimated} ${isElementVisible ? styles.projects: ''}`}>
                        <img className="object-cover rounded-lg opacity-15 min-h-300"  src="/photoblog.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full opacity-90 bg-light-navy">
                            <div className="flex flex-col w-full h-full">
                                <section className="flex justify-between w-full p-3">
                                    <VscFolderOpened size={40} className="text-blue-300"/>
                                    <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">Photo Blog</h1>
                                </section>
                                <section className='w-full p-3 mt-1 text-center text-white text-md font-recoleta-regular'>
                                    <p>A project built as a Tumblr-esque design to showcase my more recent photography work.
                                        The site features a light and dark mode option as well as the ability to click on each photo and make them larger.
                                    </p>
                                </section>
                            <footer className="flex flex-col justify-end w-full h-3/5">
                                <ul className="flex justify-around w-1/2 text-white font-recoleta-light">
                                    <li>React</li>
                                    <li>NestJS</li>
                                </ul>
                            </footer>
                            </div>
                        </div>
                </div>
                <div ref={nftRef} className={`${styles.notanimated} ${isNftVisible ? styles.projects: ''}`}>
                        <img className="object-cover rounded-lg opacity-15 min-h-300"  src="/photomint.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full opacity-90 bg-light-navy">
                            <div className="flex flex-col w-full h-full">
                                <section className="flex justify-between w-full p-3 ">
                                    <VscFolderOpened size={40} className="text-blue-300" />
                                    <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">NFT Mint Site</h1>
                                </section>
                                <section className='w-full p-4 text-center text-white text-md font-recoleta-regular'>
                                        <p>Created as a site to mint a selection of my photos on the Goerli testnet. The user has the ability to connect their wallet, mint up to 
                                            3 photos with a smart contract I created, view the transactions on Etherscan and see the collection on OpenSea.
                                        </p>
                                </section>
                            </div>
                        </div>     
                </div>
                <div ref={gtopRef} className={`${styles.notanimated} ${isGtopVisible ? styles.projects: ''}`}>
                        <img className="object-cover rounded-lg opacity-15 min-h-300"  src="/gtop.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full bg-light-navy opacity-90">
                            <div className="flex flex-col w-full h-full">
                                <section className="flex justify-between w-full p-3">
                                    <VscFolderOpened size={40} className="text-blue-300"/>
                                    <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">NFT Project Promo</h1>
                                </section>
                                <section className='w-full p-4 text-center text-white font-recoleta-regular'>
                                    <p>A Gift to Our People - An NFT project that is the brainchild of Seventh Ave. While interning at the company, I assisted on building
                                        this site that promoted and provided information for the project.
                                    </p>
                                </section>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}