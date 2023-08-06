import columbiaEssayBefore from "/public/images/sample/columbia-before.jpg";
import columbiaEssayAfter from "/public/images/sample/columbia-after.jpg";
import brownUniversityEssayBefore from "/public/images/sample/brown-university-before.jpg";
import brownUniversityEssayAfter from "/public/images/sample/brown-university-after.jpg";
import ImageCompare from "@/components/sample/image_compare";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample",
};

export default function Sample() {
  return (
    <div className="mt-[3rem] mb-10 container">
      <h1 className="mt-4 mb-4 text-center text-5xl font-semibold">Sample</h1>
      <div className="flex flex-col gap-10  max-w-[600px] mx-auto">
        <p className="text-center text-lg">
          Experience an unparalleled and meticulous revision process, setting new industry standards for excellence!
        </p>
        <ImageCompare
          title="Columbia University Summer Pre-College Essay Prompt 2023"
          beforeImage={columbiaEssayBefore}
          afterImage={columbiaEssayAfter}
        />
        <ImageCompare
          title="Brown University Summer Pre-College Essay Prompt 2023"
          beforeImage={brownUniversityEssayBefore}
          afterImage={brownUniversityEssayAfter}
        />
      </div>
    </div>
  );
}
