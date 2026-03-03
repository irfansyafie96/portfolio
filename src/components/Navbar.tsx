"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* OLD: Horizontal Navbar - shown on desktop */}
      <nav className={styles.desktopNav}>
        <Link href="/" className={styles.navLink}>
          home
        </Link>
        <Link href="/about" className={styles.navLink}>
          about
        </Link>
        <Link href="/projects" className={styles.navLink}>
          projects
        </Link>
        <Link href="/blog" className={styles.navLink}>
          blog
        </Link>
      </nav>

      {/* NEW: Orb Menu - shown on mobile */}
      <button
        className={styles.orb}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className={`${styles.orbIcon} ${isOpen ? styles.open : ""}`}>
          •
        </span>
      </button>
      <nav className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}>
        <Link
          href="/"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}
        >
          home
        </Link>
        <Link
          href="/about"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}
        >
          about
        </Link>
        <Link
          href="/projects"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}
        >
          projects
        </Link>
        <Link
          href="/blog"
          className={styles.menuItem}
          onClick={() => setIsOpen(false)}
        >
          blog
        </Link>
      </nav>
    </>
  );
}
