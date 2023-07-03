"use client";
import columbiaEssayBefore from "@/public/images/sample/columbia-before.jpg";
import columbiaEssayAfter from "@/public/images/sample/columbia-after.jpg";
import brownUniversityEssayAfter from "@/public/images/sample/columbia-after.jpg";
import ImageCompare from "@/components/sample/image_compare";

export default function Sample() {
  return (
    <div className="mt-[3rem] mb-10 container">
      <h1 className="mt-4 mb-16 text-center text-4xl font-semibold">Sample</h1>
      <div className="flex flex-col gap-10">
        <ImageCompare
          title="Columbia University Summer Pre-College Essay Prompt 2023"
          description="Assist you in generating ideas and refining your writing draft."
          beforeImage={columbiaEssayBefore}
          afterImage={columbiaEssayAfter}
        />
        <ImageCompare
          title="Brown University Summer Pre-College Essay Prompt 2023"
          description="Assist you in generating ideas and refining your writing draft."
          beforeImage={brownUniversityEssayAfter}
          afterImage={brownUniversityEssayAfter}
        />
      </div>
    </div>
  );
}