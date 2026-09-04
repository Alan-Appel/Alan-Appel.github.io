import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Vector — Desarrollo Full Stack";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderOgImage();
}
