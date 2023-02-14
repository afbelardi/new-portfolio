import styles from '../styles/navbar.module.css';
import { Divide as Hamburger } from 'hamburger-react';



export default function Navbar () {

    
    return (
        <div className="flex justify-between h-1/6">
            <div className='p-5'>
                <h1 className="-my-2 text-4xl text-white font-bebas">Alex</h1>
                <h1 className="-my-2 text-4xl text-white font-bebas">Belardi</h1>
                <h1 className="text-4xl text-white font-bebas">Code</h1>
            </div>
            <div className="flex justify-center w-1/4 mt-8">
                <Hamburger color="white" size={40}/>
            </div>
        </div>
    )
}