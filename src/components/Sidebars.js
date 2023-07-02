import { BiCaretUp } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc';
import { CiTwitter, CiLinkedin, CiInstagram } from 'react-icons/ci';
import { IoNewspaperOutline } from 'react-icons/io5';
import { GoFileCode } from 'react-icons/go';
import styles from '../styles/sidebars.module.css';

export default function Sidebars() {
    return (
        <>
            <div id={styles.sidebar} className="hidden md:w-13 md:bottom-0 md:flex-col md:right-0 lg:mr-10 xl:mr-20 lg:z-50 md:flex md:items-center md:mb-2 md:mr-5 md:fixed md:h-96">
                <a className="text-lg text-blue-100 writing-vertical font-recoleta-light" title="Send me an Email" href="mailto:afbelardicode@gmail.com">afbelardicode@gmail.com</a>
                <BiCaretUp className="mt-2 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
                <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            </div>
            <div id={styles.sidebar2} className="hidden md:justify-center md:ml-5 md:mb-2 lg:z-50 xl:ml-20 lg:ml-10 md:items-center md:w-11 md:flex-col md:flex md:bottom-0 md:left-0 md:fixed md:h-96">
            <div className="flex flex-col items-end h-1/2">
                <a href="https://www.github.com/afbelardi" target="_blank" rel="noreferrer" title="Github"> 
                    <VscGithubAlt className="mb-3 text-white" size={32}/>
                </a>
                <a href="https://gist.github.com/afbelardi" target="_blank" rel="noreferrer" title="Gists"> 
                    <GoFileCode className="mb-2 text-white" size={32}/>
                </a>
                <a href="https://www.twitter.com/afbelardi" target="_blank" rel="noreferrer" title="Twitter">
                    <CiTwitter className="mb-2 text-white" size={32}/>
                </a>
                <a href="https://www.linkedin.com/in/afbelardi" target="_blank" rel="noreferrer" title="LinkedIn">
                    <CiLinkedin className="mb-2 text-white" size={32} />
                </a>
                <a href="/Resume.pdf" target="_blank" rel="noreferrer" title="View Resume">
                    <IoNewspaperOutline className="mb-2 text-white" size={30} />
                </a>
            </div>
          <div className="flex-col mt-3">
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
            <BiCaretUp className="mt-0.5 mr-1 text-green-300"/>
        </div>
      </div>
      </>
    )
}