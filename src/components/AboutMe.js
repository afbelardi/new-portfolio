import styles from "../styles/aboutme.module.css";
import me from "../../public/me.jpg";
import { Slide } from "react-awesome-reveal";
import { useRef } from "react";
import Image from "next/image";

export default function AboutMe({ aboutRef }) {
  return (
    <div className="flex flex-col w-full p-4 mt-10 md:mt-48 min-h-400">
      <div className="flex w-full overflow-x-hidden lg:mb-5 md:justify-center">
        <h1
          ref={aboutRef}
          className="ml-2 text-4xl text-white font-recoleta-bold whitespace-nowrap sm:ml-5"
          id={styles.about}
        >
          About Me
        </h1>
        <hr className="w-2/5 h-0 mt-5 lg:w-1/2 bg-lighter-blue ml-7" />
      </div>
      <section className="flex flex-col items-center justify-center h-5/6">
        <Image
          src="/me.jpg"
          alt="Your alt text"
          width={600} // Set the width as per your design
          height={500} // Set the height as per your design
          className={`mt-5 rounded-lg lg:hidden ${styles.about}`}
        />
        <Image
          src="/me2.jpg"
          alt="Your alt text"
          width={600}
          height={500}
          className={`mt-5 rounded-lg lg:w-3/5 hidden lg:flex ${styles.about}`}
        />
        {/* <img src='/me.jpg' id={styles.about} className="w-full mt-5 rounded-lg lg:hidden min-h-5/6 max-w-500 max-h-500"></img>
                <img src='/me2.jpg' id={styles.about} className="hidden mt-5 rounded-lg lg:w-3/5 lg:flex min-h-5/6 "></img> */}
        <div className="w-10/12 mt-8 text-justify md:w-9/12 lg:w-3/5 lg:text-lg lg:max-w-800">
          <Slide up>
            <p className="text-lg text-white font-recoleta-light">
              My interest in technology began from a young age. By 13 years old,
              I was creating technology product review videos for my YouTube
              channel. While partnering with major brands, I amassed a following
              of 7,000 subscribers and 2 million video views.
            </p>
          </Slide>
          <Slide up>
            <p className="mt-2 text-lg text-white font-recoleta-light">
              After graduating college, I started a job at an Apple retail store
              and worked my way up to the title of Genius. During that time, I
              decided to start learning how to code and attended a General
              Assembly bootcamp.
            </p>
          </Slide>
          <Slide up>
            <p className="mt-2 text-lg text-white font-recoleta-light">
              Fast-forward and I landed an internship with a company called
              <a
                href="https://www.linkedin.com/company/pullupon7th/"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-indigo-400 underline"
              >
                7th Ave
              </a>
              . I contributed to the development of microservices and completed
              various front and back end projects while consistently learning on
              the fly.
            </p>
          </Slide>
          <Slide up>
            <p className="mt-2 text-lg text-white font-recoleta-light">
              Whether it&apos;s developing robust software solutions, solving
              complex problems, or staying at the forefront of emerging
              technologies, I am committed to continuous growth and delivering
              excellence in every endeavor.
            </p>
          </Slide>
          <Slide up>
            <p className="mt-2 text-xl text-blue-400 font-recoleta-bold ">
              Currently, I`&apos;`m a lead Shopify developer at an e-commerce
              agency called Prismfly. I skillfully manage a dynamic team of
              three developers while overseeing multiple client engagements. I
              excel in project leadership, ensuring the successful delivery of
              high-quality code within established timelines. With a focus on
              client satisfaction, I serve as the primary point of contact for
              clients, gathering requirements and providing technical guidance.
            </p>
          </Slide>
        </div>
      </section>
    </div>
  );
}
