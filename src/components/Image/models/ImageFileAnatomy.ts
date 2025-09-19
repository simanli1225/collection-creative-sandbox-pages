import { LanguageCode } from "@/constants/languages";
import { IMAGE_SIZES } from "../constants/sizes";
import { CDN } from "@/constants";

export enum ImageFileExtension {
  JPG = "jpg",
  WEBP = "webp",
  PNG = "png",
  GIF = "gif",
}

export default class ImageFileAnatomy {
  private folder: string;
  private file: string;
  private extension: ImageFileExtension;

  constructor(src: string) {
<<<<<<< HEAD
    console.log("ImageFileAnatomy received src:", src); // ✅ 帮助你调试

    if (!src || typeof src !== "string" || !src.includes(".")) {
      console.error("❌ Invalid src passed to ImageFileAnatomy:", src);
      throw new Error("Failed to extract filename");
    }
=======
    const splitByFolder = src.split("/");
    //for saving
    // const filename = splitByFolder.pop()!
    // const filename = splitByFolder.pop();

    //for developing
    // if (!filename) {
    //   throw new Error("Failed to extract filename");
    // }
    const filename = splitByFolder.pop()!
    const filenameSplit = filename.split(".");
    const file = filenameSplit[0];
    const extension = filenameSplit[1];
>>>>>>> dd0a2effb871cfe46aa11965ebbf6d303b85df0b

    const splitByFolder = src.split("/").filter(Boolean); // 移除空元素
    const filename = splitByFolder.pop();

    if (!filename || !filename.includes(".")) {
      console.error("❌ Invalid filename extracted from src:", src);
      throw new Error("Failed to extract filename");
    }

    const [file, extension] = filename.split(".");
    this.folder = splitByFolder.join("/");
    this.file = file;
    this.extension = extension as ImageFileExtension;
  }
  public getLocalizedSrc(locale: LanguageCode) {
    return `${this.folder}/${locale}/${this.file}.${this.extension}`;
  }

  public getSrcSet(extension = this.extension) {
    const srcSet = IMAGE_SIZES.reduce((acc, size, sizeIndex) => {
      let srcSetItem = `${this.getSizedImageSrc(size, extension)} ${size}w`;

      if (sizeIndex < IMAGE_SIZES.length - 1) {
        srcSetItem += ", ";
      }

      return acc + srcSetItem;
    }, "");

    return srcSet;
  }

  // public getSizedImageSrc(size: number, extension = this.extension) {
  //   return `${CDN}${this.folder}/${this.file}-${size}w.${extension}`;
  // }

  public getSizedImageSrc(size: number, extension = this.extension) {
    if (this.extension === ImageFileExtension.GIF) {
      return this.folder.startsWith("http")
        ? `${this.folder}/${this.file}.${this.extension}`
        : `${CDN}${this.folder}/${this.file}.${this.extension}`;
    }
    // return `${CDN}${this.folder}/${this.file}-${size}w.${extension}`;
    return `${CDN.replace(/\/$/, "")}/${this.folder}/${
      this.file
    }-${size}w.${extension}`;
  }

  public getMimeType() {
    if (this.extension === ImageFileExtension.PNG) {
      return "image/png";
    }
    if (this.extension === ImageFileExtension.GIF) {
      return "image/gif";
    }
    return "image/jpeg";
  }
}
