"use client";

import { useRouter } from "next/navigation";
import styles from "./EditorialProjectCard.module.css";

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  details?: string;
  image?: string;
  gallery?: string[];
  tags: string[];
  github: string;
  live?: string;
  status: "ACTIVE" | "WIP" | "ARCHIVED";
}

interface Props {
  project: Project;
  index: number;
}

export default function EditorialProjectCard({ project, index }: Props) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(`/projects/${project.slug}`);
    }
  };

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className={styles.imageWrap}>
        {project.image ? (
          <img src={project.image} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>no preview</div>
        )}
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={`${styles.status} ${styles[`status${project.status.toLowerCase()}`]}`}>
            {project.status.toLowerCase()}
          </span>
          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              github
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
              >
                demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
