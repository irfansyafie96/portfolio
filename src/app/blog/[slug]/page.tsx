import { getBlogBySlug, blogs } from "../../../data/blogs";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.date}>{blog.date}</p>

        <div className={styles.content}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {blog.image && (
          <div className={styles.imageContainer}>
            <div className={styles.polaroid}>
              <img src={blog.image} alt={blog.imageCaption || "Blog image"} />
              {blog.imageCaption && (
                <p className={styles.imageCaption}>{blog.imageCaption}</p>
              )}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
