import styles from '../styles/aboutme.module.css';

export default function AboutMe(props) {
    return(
        <div className="flex w-full p-6 mt-14 h-1/4" id={styles.about}>
            <h1 className="text-4xl text-white font-recoleta-bold">About Me</h1>
        </div>
    )
}