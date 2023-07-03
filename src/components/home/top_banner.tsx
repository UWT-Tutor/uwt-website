"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import studentWriting from "/public/images/student-writing.png";

export default function TopBanner() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-16 container py-12 lg:py-20">
        <div className="flex-1 flex flex-col gap-2 w-full">
          <h1 className="text-5xl md:text-6xl text-foreground font-semibold leading-snug md:leading-snug">
            Your Most <br />
            Trusted Writing Tutors
          </h1>
          <p className="text-xl text-muted-foreground">
            For College and Graduate School Application Essays.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href={""}
            >
              Pay as you go
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"/sample"}
            >
              See past works
            </Link>
          </div>
        </div>
        <div className="flex-1 max-w-[620px] w-full">
          <Image
            src={studentWriting}
            sizes="100vw"
            className="w-full h-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
