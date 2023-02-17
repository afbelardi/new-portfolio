import styles from '../styles/navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';



export default function Navbar(props) {

    return (
        <div className="z-0 flex justify-between h-1/8">
            <div className='z-40 p-5'>
                <h1 className="-my-2 text-4xl text-white font-bebas">Alex</h1>
                <h1 className="-my-2 text-4xl text-white font-bebas">Belardi</h1>
                <h1 className="text-4xl text-white font-bebas">Code</h1>
            </div>
            <div className="z-50 flex justify-center w-1/4 mt-8">
                <Hamburger toggled={props.isOpen} toggle={props.setIsOpen} color="white" size={40}/>
            </div>
        </div>
    )
}