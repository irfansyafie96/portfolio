import Card from "../../components/Card";
import { blogs } from "../../data/blogs";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>my blog</h1>

      <div className={styles.cards}>
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            description={blog.description}
            href={`/blog/${blog.slug}`}
          />
        ))}
      </div>
    </main>
  );
}
