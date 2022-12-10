import Link from 'next/link';
import styles from '/styles/modules/Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>A peek at some reads.</div>
            <div className={styles.subhead}>
                Ten takeaways is a platform where individuals
                are able to share what they learn or find
                interesting in a book with others.
            </div>
            <Link href="/content">
                <a className={styles.navigateButton}>View Takeaways</a>
            </Link>
        </div>
    );
}

export default Home;