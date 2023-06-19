import styles from "../styles/aboutme.module.css";

export default function Intro() {
    return(
        <div className="flex flex-col w-full xl:w-11/12 xl:pl-11 h-52 xl:h-72 2xl:ml-11 mt-14" id={styles.intro}>
            <section className="flex flex-col w-full md:w-5/6 md:ml-28 xl:ml-48 lg:ml-32">
                <h1 className="p-2 ml-8 text-lg text-white md:text-2xl lg:text-3xl xl:text-4xl font-recoleta-regular">Hi, welcome to my portfolio.</h1>
                <h1 className="mb-2 ml-10 text-2xl text-blue-200 md:text-4xl lg:text-5xl xl:text-5xl font-recoleta-bold">My name is Alex Belardi.</h1>
                <h1 className="w-4/5 ml-10 text-2xl text-blue-300 md:text-4xl lg:text-5xl xl:text-6xl font-recoleta-bold">I&apos;m passionate about turning exciting and innovative ideas into web apps.</h1>
            </section>
        </div>
    )
}