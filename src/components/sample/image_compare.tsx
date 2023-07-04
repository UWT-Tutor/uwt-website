"use client";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image, { StaticImageData } from "next/image";

const ImageCompare = ({
  title,
  description,
  beforeImage,
  afterImage,
}: {
  title: string;
  description: string;
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-semibold self-start mb-3">{title}</h2>
      <p className="self-start mb-7">{description}</p>
      <div className="border-2 border-slate-100	overflow-y-scroll h-[450px]">
        <ImgComparisonSlider>
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
    </div>
  );
};

export default ImageCompare;
