import Card from "../components/Card";
import styles from "./page.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span className={styles.animateText}>i build things</span>
        <span className={styles.staticText}> for fun</span>
      </h1>

      <div className={styles.profile}>
        <div className={styles.photo}>
          <img src="/spiderman.png" alt="Irfan" />
        </div>
        <div className={styles.intro}>
          <p className={styles.introText}>hello there</p>
          <p className={styles.introDescription}>
            im irfan. a student, passionate gamer and aspiring software
            developer.
          </p>
        </div>
      </div>

      <div className={styles.cards}>
        <Card
          title="blogs"
          description="I like to write. Maybe even thinking of doing a book when I was little. 
          But here I am, sharing my thoughts and anything that I like :p"
          href="/blog"
        />
        <Card
          title="projects"
          description="I have done some small projects during my free and uni time. Feel free to look over my projects here."
          href="/projects"
        />
      </div>

      <div className={styles.socialIcons}>
        <a href="https://github.com/irfansyafie96" target="_blank">
          <FaGithub className={styles.iconGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/irfan-syafie-427b92281/"
          target="_blank"
        >
          <FaLinkedin className={styles.iconLinkedin} />
        </a>
      </div>
    </main>
  );
}
