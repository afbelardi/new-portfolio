import { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Splash from "../components/Splash";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Sidebars from "../components/Sidebars";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <>
      <Head>
        <title>Alex Belardi Code</title>
        <meta
          name="description"
          content="The portfolio of Software Engineer, Alex Belardi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        ></link>
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToRef={aboutRef}
        scrollToProjectsRef={projectsRef}
        scrollToSkillsRef={skillsRef}
      />
      <Intro />
      <AboutMe aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Sidebars />
      {isOpen ? <Splash /> : ""}
      <Skills skillsRef={skillsRef} />
    </>
  );
}
