import styles from '../styles/aboutme.module.css';

export default function Intro() {
    return(
        <div className="flex flex-col w-full h-52 mt-14" id={styles.intro}>
            <section className="flex flex-col w-full">
                <h1 className="p-2 ml-6 text-lg text-white font-recoleta-regular">Hi, welcome to my portfolio.</h1>
                <h1 className="mb-2 ml-8 text-2xl text-blue-200 font-recoleta-bold">My name is Alex Belardi.</h1>
                <h1 className="w-4/5 ml-8 text-2xl text-blue-300 font-recoleta-bold">I'm passionate about turning cool and innovative ideas into web apps.</h1>
            </section>
        </div>
    )
}