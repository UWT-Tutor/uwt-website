import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import girlTeacher from "/public/images/girl-teacher.png";
import { cn } from "@/lib/utils";

export default function Introduction() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container flex flex-row justify-between items-center gap-0 lg:gap-12">
        <div className="flex flex-col gap-4 items-start">
          <h2 className="text-[1.6rem] lg:text-4xl font-semibold leading-normal">
            Writing a good <span className="text-secondary">essay</span> <br />
            is your first step to{" "}
            <span className="text-secondary">success</span>
          </h2>
          <p className="text-muted-foreground leading-loose text-lg">
            We provide you with in-line editing <br />
            Help you with writing engaging prose and elevating your creative
            output <br />
            One detailed written report per essay that will help you make
            significant improvements on your work <br />
            <strong className="text-foreground">
              There is No binding contract
            </strong>
          </p>
          <Link
            className={cn(buttonVariants({ variant: "secondary" }), "mt-4")}
            href="/pricing"
          >
            See pricing
          </Link>
        </div>
        <div>
          <Image
            src={girlTeacher}
            width={275}
            height={412}
            // Make the image display full width
            className="w-full h-auto hidden lg:block"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
