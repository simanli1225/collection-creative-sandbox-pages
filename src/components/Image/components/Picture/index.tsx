import React, { forwardRef } from "react";
import { FALLBACK_SIZE } from "../../constants/sizes";
import ImageFileAnatomy, {
  ImageFileExtension,
} from "../../models/ImageFileAnatomy";
import "./index.less";

export type PictureProps = {
  className?: string;
  alt: string;
  src: string;
  webP?: boolean;
  loading?: "lazy" | "eager";
  height: number;
  width: number;
  children?: React.ReactNode;
  excludeDefaultSourceTag?: boolean;
  sizes?: string;
};
const DEFAULT_SIZES: string = `
  (max-width: 480px) 100px,  
  (max-width: 768px) 300px,  
  (max-width: 1024px) 750px,  
  (max-width: 1280px) 900px,  
  (max-width: 1440px) 1000px,  
  (max-width: 1600px) 1200px,  
  100vw
`.trim();

const Picture = forwardRef<HTMLImageElement, PictureProps>(function Picture(
  {
    className,
    alt,
    src,
    webP = true,
    loading = "lazy",
    height,
    width,
    sizes = DEFAULT_SIZES,
    excludeDefaultSourceTag = false,
    children,
    ...rest
  },
  ref
) {
  if (!src || typeof src !== "string" || !src.includes(".")) {
    console.error("❌ Invalid src passed to <Picture>: ", src);
    return null;
  }
  let fileAnatomy: ImageFileAnatomy;
  try {
    fileAnatomy = new ImageFileAnatomy(src);
  } catch (error) {
    console.error("❌ Failed to create ImageFileAnatomy:", error);
    return null;
  }
  // const fileAnatomy = new ImageFileAnatomy(src)

  const webpSrcSet = fileAnatomy.getSrcSet(ImageFileExtension.WEBP);
  const jpgSrcSet = fileAnatomy.getSrcSet();

  const fallbackSrc = fileAnatomy.getSizedImageSrc(FALLBACK_SIZE);

  // 🔹 Debugging: Console logs to check srcSet, sizes, and img src
  // console.log("🖼️ Picture Component Rendered");
  // console.log("👉 Image src:", src);
  // if (!isGif) {
  //   console.log("🟢 WebP srcSet:", webpSrcSet);
  //   console.log("🔵 JPEG/PNG srcSet:", jpgSrcSet);
  // }
  // console.log("📏 Sizes (Final Used):", sizes);
  // console.log("📌 Final fallback image src:", fallbackSrc);

  return (
    <picture>
      {children}

      {!excludeDefaultSourceTag && webP && webpSrcSet && (
        <source
          srcSet={webpSrcSet}
          type="image/webp"
          sizes={sizes}
          width={width}
          height={height}
        />
      )}

      {!excludeDefaultSourceTag && jpgSrcSet && (
        <source
          srcSet={fileAnatomy.getSrcSet()}
          type={fileAnatomy.getMimeType()}
          sizes={sizes}
          width={width}
          height={height}
        />
      )}

      <img
        ref={ref}
        className={className}
        src={fallbackSrc}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        decoding="async"
        {...rest}
      />
    </picture>
  );
});

export default Picture;
