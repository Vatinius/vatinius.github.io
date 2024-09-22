// about.js
import styles from './about.module.css';

export default function About() {
return (
    <>
    <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
            Welcome to the About page. Here you can learn more about our mission and values.
        </p>
    </div>
    <button className={styles.button} style={{ outline: '2px solid green' }}>Learn More</button>
    </>
);
}