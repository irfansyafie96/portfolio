"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { getProjectBySlug, getAdjacentProjects, Project } from "../../../data/projects";
import styles from "./page.module.css";

interface ProjectDetailClientProps {
  slug: string;
}

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const project = getProjectBySlug(slug);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [slug]);

  if (!project) {
    return (
      <main className={styles.main}>
        <div className={styles.notFound}>
          <h1>Project not found</h1>
          <Link href="/projects" className={styles.backLink}>
            ← back to projects
          </Link>
        </div>
      </main>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);
  const displayImage = project.gallery?.[selectedImageIndex] || project.image;

  const handlePrev = () => {
    if (prev) {
      router.push(`/projects/${prev.slug}`);
    }
  };

  const handleNext = () => {
    if (next) {
      router.push(`/projects/${next.slug}`);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link href="/projects" className={styles.backLink}>
          <IoArrowBack /> back to projects
        </Link>

        <div className={styles.navLinks}>
          <button
            className={`${styles.navBtn} ${!prev ? styles.navBtnDisabled : ""}`}
            onClick={handlePrev}
            disabled={!prev}
          >
            <IoArrowBack /> prev
          </button>
          <button
            className={`${styles.navBtn} ${!next ? styles.navBtnDisabled : ""}`}
            onClick={handleNext}
            disabled={!next}
          >
            next <IoArrowForward />
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrap}>
            {displayImage ? (
              <img
                src={displayImage}
                alt={project.title}
                className={styles.mainImage}
              />
            ) : (
              <div className={styles.imageFallback}>no preview available</div>
            )}
          </div>

          {project.gallery && project.gallery.length > 1 && (
            <div className={styles.gallery}>
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  className={`${styles.thumb} ${selectedImageIndex === idx ? styles.thumbActive : ""}`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img src={img} alt={`${project.title} ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.infoSection}>
          <div className={styles.leftColumn}>
            <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <span className={`${styles.status} ${styles[`status${project.status.toLowerCase()}`]}`}>
                {project.status.toLowerCase()}
              </span>
            </div>

            <p className={styles.details}>{project.details}</p>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.tags}>
              {project.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                github ↗
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  live demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
