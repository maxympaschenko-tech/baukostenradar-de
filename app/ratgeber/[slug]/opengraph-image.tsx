import { getAnyGuide } from "@/lib/all-guides";
import {
  createGuideSocialImage,
  createSocialImage,
  guideSocialImageAlt,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = guideSocialImageAlt;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function GuideOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getAnyGuide(slug);
  return guide ? createGuideSocialImage(guide.h1) : createSocialImage();
}
