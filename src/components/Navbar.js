import styles from '../styles/navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';
import { BiCaretRight } from 'react-icons/bi';



export default function Navbar(props) {

    return (
        <div className="z-0 flex justify-between h-1/8">
            <div className='z-40 p-5 md:p-8'>
                <h1 className="-my-2 text-4xl text-white md:text-5xl font-bebas">Alex</h1>
                <h1 className="-my-2 text-4xl text-white md:text-5xl font-bebas">Belardi</h1>
                <h1 className="text-4xl text-white md:text-5xl font-bebas">Code</h1>
            </div>
            <div className="z-50 flex justify-center w-1/5 mt-8 md:hidden" >
                <Hamburger toggled={props.isOpen} toggle={props.setIsOpen} color="white" size={40}/>
            </div>
            <div className="items-center hidden w-2/5 md:flex">
                <ul className="flex items-center w-full h-1/2">
                    <li className="flex justify-between">
                        <BiCaretRight className="mt-1"/>
                        <a href="#about" id={styles.scroll} className="text-lg text-white font-recoleta-regular">About</a>
                    </li>
                    <li className="flex justify-between">
                        <BiCaretRight className="mt-1"/>
                        <a>Projects</a>
                    </li>
                    <li className="flex justify-between">
                        <BiCaretRight className="mt-1"/>
                        <a>Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}