"use client";

import { useState } from "react";
import EditorialProjectCard from "../../components/EditorialProjectCard";
import { projects } from "../../data/projects";
import styles from "./page.module.css";

type Filter = "ALL" | "ACTIVE" | "WIP" | "ARCHIVED";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <main className={styles.main}>
      <div className={styles.masthead}>
        <h1 className={styles.title}>
          <span className={styles.titleText}>my projects </span>
          <span className={styles.cursor}>█</span>
        </h1>
      </div>

      <div className={styles.filterRow}>
        {(["ALL", "ACTIVE", "WIP", "ARCHIVED"] as Filter[]).map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${
              activeFilter === f ? styles.filterBtnActive : ""
            }`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <p className={styles.filterHint}>click any project to explore</p>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <EditorialProjectCard
            key={project.id}
            project={project}
            index={index + 1}
          />
        ))}

        <div className={styles.pullQuote}>
          <p>"I build things for fun — some of them even work."</p>
          <cite>— irfansyafie, probably</cite>
        </div>
      </div>
    </main>
  );
}
