"use client";

import Link from "next/link";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get the card element and its dimensions
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate the mouse position relative to the center of the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate the tilt angles based on the mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust the tilt sensitivity by dividing the angles by a factor (e.g., 10)
    const tiltX = (centerY - y) / 10;
    const tiltY = (x - centerX) / 10;

    // Apply the tilt effect using CSS transform
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
  };

  // Reset the transform when the mouse leaves the card
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
  };

  return (
    <Link
      href={href}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}
