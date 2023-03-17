import styles from '../styles/navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';
import { BiCaretRight } from 'react-icons/bi';



export default function Navbar({ scrollToRef, scrollToProjectsRef, scrollToSkillsRef, isOpen, setIsOpen })  {
    const handleClick = () => {
        scrollToRef.current.scrollIntoView({ behavior: 'smooth'});
    }

    const handleProjectClick = () => {
        scrollToProjectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleSkillsClick = () => {
        scrollToSkillsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="z-50 flex justify-between h-1/8">
            <div className='p-5 md:p-8 xl:p-10'>
                <h1 className="-my-2 text-4xl text-white xl:text-6xl md:text-5xl font-bebas">Alex</h1>
                <h1 className="-my-2 text-4xl text-white xl:text-6xl md:text-5xl font-bebas">Belardi</h1>
                <h1 className="-my-2 text-4xl text-white xl:text-6xl md:text-5xl font-bebas">Code</h1>
            </div>
            <div className="z-50 flex justify-center w-1/5 mt-8 md:hidden" >
                <Hamburger toggled={isOpen} toggle={setIsOpen} color="white" size={40}/>
            </div>
            <div className="items-center hidden mr-2 xl:mr-10 w-72 md:flex">
                <ul className="flex items-center justify-between w-full p-6 mr-2 h-1/2">
                    <li className="flex">
                        <BiCaretRight className="z-50 mt-1 text-green-300"/>
                        <button onClick={handleClick} className="text-lg text-white font-recoleta-regular">
                           About
                        </button>
                    </li>
                    <li className="flex">
                        <BiCaretRight className="mt-1 text-green-300"/>
                        <button onClick={handleProjectClick} className="text-lg text-white font-recoleta-regular">Projects</button>
                    </li>
                    <li className="flex">
                        <BiCaretRight className="mt-1 text-green-300"/>
                        <button onClick={handleSkillsClick} className="text-lg text-white font-recoleta-regular">Skills</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}