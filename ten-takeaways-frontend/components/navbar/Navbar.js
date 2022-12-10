import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from '/styles/modules/Navbar.module.scss'

export function Navbar() {
    const router = useRouter();
    console.log(router.pathname)

    return (
        <div className={styles.nav}>
            <Link href="/">
                <img src="books.png" style={{ height: "4vh", width: "4vh" }} />
            </Link>
            <Link href="/">
                Ten Takeaways
            </Link>
            <Link href="/">
                <a className={(router.pathname === "/") ? styles.activeItem : undefined}>Home</a>
            </Link>
            <Link href="/content">
                <a className={(router.pathname === "/content") ? styles.activeItem : undefined}>Content</a>
            </Link>
        </div >
    );
}

export default Navbar;