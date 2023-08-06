"use client";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image, { StaticImageData } from "next/image";

interface ImageCompareProps {
  title: string;
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
}

const ImageCompare = ({
  title,
  beforeImage,
  afterImage,
}: ImageCompareProps) => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold self-start mb-3">{title}</h2>
      <ImgComparisonSlider className="border-2 border-slate-100 h-[75vw] md:h-[600px]">
        <Image
          slot="first"
          src={beforeImage}
          alt="Essay before revision"
          width={650}
          height={800}
          quality={100}
        />
        <Image
          slot="second"
          src={afterImage}
          alt="Essay after revision"
          width={650}
          height={800}
          quality={100}
        />
      </ImgComparisonSlider>
    </div>
  );
};

export default ImageCompare;
