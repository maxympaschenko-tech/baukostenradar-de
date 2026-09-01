import type { Metadata } from "next";
import { getAnyGuide } from "@/lib/all-guides";
import { socialMetadata } from "@/lib/social-metadata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAnyGuide(slug);
  if (!guide) return {};

  return socialMetadata({
    title: guide.title,
    description: guide.description,
    url: `/ratgeber/${guide.slug}`,
    type: "article",
  });
}

export default function GuideLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
