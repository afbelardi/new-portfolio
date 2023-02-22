import Navbar from '../components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import { useState } from 'react';
import Splash from '../components/Splash';
import AboutMe from '../components/AboutMe';
import Intro from '../components/Intro';


export default function Home(props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Alex Belardi Code</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Intro />
      <AboutMe />
      {isOpen ? 
        <Splash 
        />
        : ''
      }
      

    </> 
  )
}
