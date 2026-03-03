import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navLink}>
        home
      </Link>
      <Link href="/about" className={styles.navLink}>
        about me
      </Link>
      <Link href="/projects" className={styles.navLink}>
        projects
      </Link>
      <Link href="/blog" className={styles.navLink}>
        blog
      </Link>
    </nav>
  );
}
