import { Fade } from "react-reveal";
import styles from "../styles/aboutme.module.css";
import { useInView } from "react-intersection-observer";
import { VscFolderOpened } from "react-icons/vsc";
import { BiCaretRight } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { ImLink } from "react-icons/im";
import Image from "next/image";

export default function Projects({ projectsRef }) {
  const { ref: myRef, inView: isElementVisible } = useInView();
  const { ref: nftRef, inView: isNftVisible } = useInView();
  const { ref: gtopRef, inView: isGtopVisible } = useInView();
  const { ref: npRef, inView: isNpVisible } = useInView();
  const { ref: npBackendRef, inView: isBackendVisible } = useInView();

  return (
    <div className="flex flex-col w-full p-4 mt-10 min-h-1000">
      <div className="flex w-full overflow-x-hidden md:justify-center">
        <h1
          ref={projectsRef}
          className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap"
          id={styles.about}
        >
          Projects I&apos;ve built
        </h1>
        <Fade right>
          <hr className="w-2/5 h-0 mt-5 ml-7 bg-lighter-blue" />
        </Fade>
      </div>
      <div className="flex justify-center w-full">
        <div
          id={styles.grid}
          className="flex flex-col items-center p-1 mt-3 min-h-800"
        >
          <div
            ref={myRef}
            className={`${styles.notanimated} ${
              isElementVisible ? styles.projects : ""
            }`}
          >
            <Image
              width={600}
              height={400}
              className="object-cover w-[600px] rounded-lg opacity-15 h-[400px]"
              src="/photoblog.png"
              loading="lazy"
            />
            <div className="absolute top-0 z-40 w-full h-full rounded-lg opacity-90 bg-light-navy">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <section className="flex justify-between w-5/6 p-3">
                  <VscFolderOpened size={40} className="ml-2 text-blue-300 " />
                  <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">
                    Photo Blog
                  </h1>
                </section>
                <section className="w-full p-3 mt-5 text-center text-white md:-mb-6 h-36 text-md font-recoleta-regular">
                  <p>
                    A project built as a Tumblr-esque design to showcase my more
                    recent photography work. The site features a light and dark
                    mode option as well as the ability to click on each photo
                    and make them larger.
                  </p>
                </section>
                <footer className="flex flex-col justify-end w-full lg:mt-6 h-1/6">
                  <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>React</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>NestJS</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>MongoDB</p>
                    </li>
                    <li className="flex mr-5">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Node.js</p>
                    </li>
                  </ul>
                </footer>
                <div className="flex justify-start w-full pb-2 pl-6 mb-2">
                  <a
                    href="https://github.com/afbelardi/photo-blog-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={28} className="mt-5 text-white" />
                  </a>
                  <a
                    href="https://afbelardi-blog.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImLink size={28} className="mt-5 ml-3 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={nftRef}
            className={`${styles.notanimated} ${
              isNftVisible ? styles.projects : ""
            }`}
          >
            <Image
              width={600}
              height={400}
              className="object-cover w-[600px] rounded-lg opacity-15 h-[400px]"
              src="/photomint.png"
              loading="lazy"
            />
            <div className="absolute top-0 z-40 w-full h-full rounded-lg opacity-90 bg-light-navy">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <section className="flex justify-between w-5/6 p-3 ">
                  <VscFolderOpened size={40} className="text-blue-300" />
                  <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">
                    NFT Mint Site
                  </h1>
                </section>
                <section className="w-full p-4 mt-5 mb-4 text-center text-white md:-mb-6 h-36 font-recoleta-regular">
                  <p>
                    Created as a site to mint a selection of my photos on the
                    Goerli testnet. The user has the ability to connect their
                    wallet, mint up to 3 photos with a smart contract I created,
                    view the transactions on Etherscan and see the collection on
                    OpenSea.
                  </p>
                </section>
                <footer className="flex flex-col justify-end w-full lg:mt-6 h-1/6">
                  <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>React</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Ethers.js</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>HardHat</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Solidity</p>
                    </li>
                  </ul>
                </footer>
                <div className="flex justify-start w-full pb-2 pl-6 mb-2">
                  <a
                    href="https://github.com/afbelardi/mint-photo-dapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={28} className="mt-5 text-white" />
                  </a>
                  <a
                    href="https://test-mint-site.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImLink size={28} className="mt-5 ml-3 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={gtopRef}
            className={`${styles.notanimated} ${
              isGtopVisible ? styles.projects : ""
            }`}
          >
            <img
              className="object-cover w-[600px] rounded-lg opacity-15 h-[400px]"
              src="/gtop.png"
              loading="lazy"
            />
            <div className="absolute top-0 z-40 w-full h-full rounded-lg bg-light-navy opacity-90">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <section className="flex justify-between w-5/6 p-3">
                  <VscFolderOpened
                    size={40}
                    className="text-blue-300 min-w-40"
                  />
                  <h1 className="mt-2 text-2xl text-blue-400 min-w-215 font-recoleta-bold font-outline">
                    NFT Project Promo
                  </h1>
                </section>
                <section className="w-full p-4 mt-5 text-center text-white md:-mb-6 h-36 font-recoleta-regular">
                  <p>
                    A Gift to Our People - An NFT project that is the brainchild
                    of 7th Ave. While interning at the company, I built this
                    site that promoted and provided information for the project.
                  </p>
                </section>
                <footer className="flex flex-col justify-end w-full h-1/6">
                  <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>React</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Next.js</p>
                    </li>
                  </ul>
                </footer>
                <div className="flex justify-start w-full pl-6 mb-2 min-w-200">
                  <a
                    href="https://gifts-to-our-people-40368bae2ee5.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImLink
                      size={28}
                      className="relative mt-5 ml-3 text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={npRef}
            className={`${styles.notanimated} ${
              isNpVisible ? styles.projects : ""
            }`}
          >
            <img
              className="w-[600px] rounded-lg opacity-15 min-h-400 h-[400px]"
              src="/wip.jpg"
              loading="lazy"
            />
            <div className="absolute top-0 z-40 w-full h-full rounded-lg bg-light-navy opacity-90">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <section className="flex justify-between w-5/6 p-3 min-w-300">
                  <VscFolderOpened
                    size={40}
                    className="text-blue-300 min-w-40"
                  />
                  <h1 className="mt-2 text-2xl text-blue-400 min-w-215 font-recoleta-bold font-outline">
                    National Park Finder
                  </h1>
                </section>
                <section className="w-full p-4 mt-5 text-center text-white md:-mb-6 h-36 font-recoleta-regular">
                  <p>
                    A work in progress. The site aggregates data about US
                    National Park sites thereby helping users plan trips by
                    state. Users are able to create an account and add parks to
                    a list of favorites.
                  </p>
                </section>
                <footer className="flex flex-col justify-end w-full h-1/6">
                  <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>React</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Next.js</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>JWT</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>MongoDB</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Tailwind CSS</p>
                    </li>
                  </ul>
                </footer>
                <div className="flex justify-start w-full pl-6 mb-2 min-w-200">
                  <a
                    href="https://github.com/afbelardi/np-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={28} className="mt-5 text-white" />
                  </a>
                  <a
                    href="https://np-frontend.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ImLink size={28} className="mt-5 ml-3 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={npBackendRef}
            id={styles.thirdgrid}
            className={`${styles.notanimated} ${
              isBackendVisible ? styles.projects : ""
            }`}
          >
            <img
              className="object-cover rounded-lg opacity-15 min-h-400"
              src="/np_backend.png"
              loading="lazy"
            />
            <div className="absolute top-0 z-40 w-full h-full rounded-lg opacity-90 bg-light-navy">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <section className="flex justify-between w-5/6 p-3 ">
                  <VscFolderOpened size={40} className="text-blue-300" />
                  <h1 className="mt-2 text-2xl text-blue-400 font-recoleta-bold font-outline">
                    NP Finder Backend
                  </h1>
                </section>
                <section className="w-full p-4 mt-5 text-center text-white lg:w-5/6 md:-mb-6 h-36 font-recoleta-regular">
                  <p>
                    Currently a work in progress. The backend to my National
                    Park Finder project. Incorporates signup and login
                    functionality with JWT and MongoDB. Makes calls to the
                    official National Parks API.
                  </p>
                </section>
                <footer className="flex flex-col justify-end w-full h-1/6">
                  <ul className="flex flex-wrap justify-start w-2/3 p-1 mb-2 ml-4 text-sm text-white whitespace-nowrap font-recoleta-bold">
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Express</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>JWT</p>
                    </li>
                    <li className="flex mr-2">
                      <BiCaretRight className="mt-0.5 text-green-300" />
                      <p>Mongoose</p>
                    </li>
                  </ul>
                </footer>
                <div className="flex justify-start w-full pb-2 pl-6 mb-2">
                  <a
                    href="https://github.com/afbelardi/np-project-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub size={28} className="mt-5 text-white" />
                  </a>
                  {/* <a href="https://test-mint-site.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <ImLink size={28} className="mt-5 ml-3 text-white" />
                                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
