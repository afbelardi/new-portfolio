import { Fade } from 'react-reveal';
import styles from '../styles/aboutme.module.css';
import { useInView } from 'react-intersection-observer';
import { VscFolderOpened } from 'react-icons/vsc';
import { BiCaretRight } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { ImLink } from 'react-icons/im';

export default function Projects({ projectsRef }) {

    const { ref: myRef, inView: isElementVisible } = useInView()
    const { ref: nftRef, inView: isNftVisible } = useInView()
    const { ref: gtopRef, inView: isGtopVisible } = useInView()
    
    return (
        <div className="flex flex-col w-full p-4 mt-10 min-h-1000">
            <div className="flex w-full md:justify-center">
                <h1 ref={projectsRef} className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap" id={styles.about}>Projects I've built</h1>
                <Fade right>
                    <hr className="w-2/5 h-0 mt-5 ml-7 bg-lighter-blue" />
                </Fade>
            </div>
            <div className="flex flex-col items-center p-1 mt-3 min-h-800">
                <div className={`${styles.notanimated} ${isElementVisible ? styles.projects: ''}`}>
                        <img className="object-cover rounded-lg opacity-15 min-h-400"  src="/photoblog.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full rounded-lg opacity-90 bg-light-navy">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <section className="flex justify-between w-5/6 p-3">
                                    <VscFolderOpened size={40} className="ml-2 text-blue-300 "/>
                                    <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">Photo Blog</h1>
                                </section>
                                <section className='w-full p-3 mt-5 text-center text-white text-md font-recoleta-regular'>
                                    <p>A project built as a Tumblr-esque design to showcase my more recent photography work.
                                        The site features a light and dark mode option as well as the ability to click on each photo and make them larger.
                                    </p>
                                </section>
                            <footer className="flex flex-col justify-end w-full h-1/6">
                                <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>React</p>
                                    </li>
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>NestJs</p>
                                    </li>
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>MongoDB</p>
                                    </li>
                                    <li className="flex mr-5">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>Node.js</p>
                                    </li>
                                </ul>
                            </footer>
                            <div className="flex justify-start w-full pb-2 pl-6 mb-2">
                                <a href="https://github.com/afbelardi/photo-blog-frontend" target="_blank">
                                    <FiGithub size={28} className="mt-5 text-white"/>
                                </a>
                                <a href="https://afbelardi-blog.herokuapp.com/" target="_blank">
                                    <ImLink size={28} className="mt-5 ml-3 text-white" />
                                </a>
                            </div>
                            </div>
                        </div>
                </div>
                <div ref={nftRef} className={`${styles.notanimated} ${isNftVisible ? styles.projects: ''}`}>
                        <img className="object-cover rounded-lg opacity-15 min-h-400"  src="/photomint.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full opacity-90 bg-light-navy">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <section className="flex justify-between w-5/6 p-3 ">
                                    <VscFolderOpened size={40} className="text-blue-300" />
                                    <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">NFT Mint Site</h1>
                                </section>
                                <section className='w-full p-4 mt-5 text-center text-white font-recoleta-regular'>
                                        <p>Created as a site to mint a selection of my photos on the Goerli testnet. The user has the ability to connect their wallet, mint up to 
                                            3 photos with a smart contract I created, view the transactions on Etherscan and see the collection on OpenSea.
                                        </p>
                                </section>
                                <footer className="flex flex-col justify-end w-full h-1/6">
                                <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>React</p>
                                    </li>
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>HardHat</p>
                                    </li>
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>Solidity</p>
                                    </li>
                                </ul>
                            </footer>
                            <div className="flex justify-start w-full pb-2 pl-6 mb-2">
                                <a href="https://github.com/afbelardi/mint-photo-dapp" target="_blank">
                                    <FiGithub size={28} className="mt-5 text-white"/>
                                </a>
                                <a href="https://test-mint-site.herokuapp.com/" target="_blank">
                                    <ImLink size={28} className="mt-5 ml-3 text-white" />
                                </a>
                            </div>
                            </div>
                        </div>     
                </div>
                <div ref={gtopRef} className={`${styles.notanimated} ${isGtopVisible ? styles.projects: ''}`}>
                        <img className="object-cover rounded-lg opacity-15 min-h-400"  src="/gtop.png" />
                        <div className="absolute top-0 left-0 z-40 w-full h-full bg-light-navy opacity-90">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <section className="flex justify-between w-full p-3">
                                    <VscFolderOpened size={40} className="text-blue-300"/>
                                    <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">NFT Project Promo</h1>
                                </section>
                                <section className='w-full p-4 mt-5 text-center text-white font-recoleta-regular'>
                                    <p>A Gift to Our People - An NFT project that is the brainchild of Seventh Ave. While interning at the company, I assisted on building
                                        this site that promoted and provided information for the project.
                                    </p>
                                </section>
                                <footer className="flex flex-col justify-end w-full h-1/6">
                                <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>React</p>
                                    </li>
                                    <li className="flex mr-2">
                                        <BiCaretRight className="mt-0.5 text-green-300"/>
                                        <p>NextJS</p>
                                    </li>
                                </ul>
                            </footer>
                            <div className="flex justify-start w-full pl-6 mb-2 min-w-200">
                                <a href="https://github.com/afbelardi/photo-blog-frontend" target="_blank">
                                    <FiGithub size={28} className="relative mt-5 text-white"/>
                                </a>
                                <a href="https://afbelardi-blog.herokuapp.com/" target="_blank">
                                    <ImLink size={28} className="relative mt-5 ml-3 text-white" />
                                </a>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}