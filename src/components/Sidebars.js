import { BiCaretUp } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc';
import { CiTwitter, CiLinkedin, CiInstagram } from 'react-icons/ci';
import { SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl';
import { IoNewspaperOutline } from 'react-icons/io5';

export default function Sidebars() {

    // const caretList = () => {
    //     return ()
    // }

    
    return (
        <>
            <div className="hidden md:w-13 md:bottom-0 md:flex-col md:right-0 lg:mr-10 xl:mr-20 lg:z-50 lg:absolute md:flex md:items-center md:mb-2 md:mr-5 md:fixed md:h-96 md:">
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
            <div className="hidden md:justify-center md:ml-5 md:mb-2 lg:z-50 xl:ml-20 lg:absolute lg:ml-10 md:items-center md:w-11 md:flex-col md:flex md:bottom-0 md:left-0 md:fixed md:h-96">
            <div className="flex flex-col items-end h-1/2">
                <a href="https://www.github.com/afbelardi" target="_blank" rel="noreferrer" title="Github"> 
                    <VscGithubAlt className="mb-2 text-white" size={32}/>
                </a>
                <a href="https://www.twitter.com/afbelardi" target="_blank" rel="noreferrer" title="Twitter">
                    <CiTwitter className="mb-2 text-white" size={32}/>
                </a>
                <a href="https://www.linkedin.com/in/afbelardi" target="_blank" rel="noreferrer" title="LinkedIn">
                    <CiLinkedin className="mb-2 text-white" size={32} />
                </a>
                <a href="https://www.instagram.com/afbelardi" target="_blank" rel="noreferrer" title="Instagram">
                    <CiInstagram className="mb-2 text-white" size={32} />
                </a>
                <a href="/AlexBelardiResume.pdf" target="_blank" rel="noreferrer" title="View Resume">
                    <IoNewspaperOutline className="mb-2 text-white" size={28} />
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