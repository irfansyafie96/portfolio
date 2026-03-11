import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>a little bit about myself</h1>

      <section className={styles.intro}>
        <div className={styles.introText}>
          <h2 className={styles.sectionTitle}>intro</h2>
          <p className={styles.introDescription}>
            My name is Irfan Syafie, someone who are interested in learning
            getting to know the latest tech in software development. But before
            getting into this industry, I was a mechanical student in my
            secondary school until when it&apos;s time to continue my study in
            the college, I chose computer science just because my cousin chose
            it. I had no guide but to just continue my study and get along with
            it.
          </p>
        </div>
        <div className={styles.introImage}>
          <img src="/intro-picture.jpg" alt="Irfan" />
        </div>
      </section>

      <section className={styles.interests}>
        <div className={styles.interestsImage}>
          <img src="/interests-picture.jpg" alt="Irfan's interests" />
        </div>
        <div className={styles.interestsText}>
          <h2 className={styles.sectionTitle}>interests</h2>
          <p className={styles.interestsDescription}>
            I love playing video games and sports. The sports that I play are
            mostly football and futsal, but I also have fun playing badminton
            and volleyball. I listen to music a lot, too. Bands like Radiohead
            and Tame Impala have really grown on me this past year, but I
            listen to any songs as long as I think they are good. Movies and
            series are a must for me, especially when I don&apos;t have the mood
            to play games.
          </p>
        </div>
      </section>
    </main>
  );
}
