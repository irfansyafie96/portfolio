import Link from "next/link";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link href={href} className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}
