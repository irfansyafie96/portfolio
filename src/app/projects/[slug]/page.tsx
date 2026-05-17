import { projects } from "../../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
