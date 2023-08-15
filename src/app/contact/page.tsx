import assistantAvatar from '/public/images/assistant.jpg'
import Image from "next/image"
import LineButton from "@/components/contact/line_button";
import LineQrcode from '@/components/contact/line_qrcode';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="container flex flex-col items-center py-20 px-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-semibold">Get in touch!</h1>
        <p className="mt-3">Contact us for more information.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 items-center mt-6 md:mt-14">
        <Image src={assistantAvatar} width={213.1} height={320} className="shadow-lg rounded-xl" alt="assitant avatar" />
        <div className="flex flex-col gap-4 w-full">
          <div className=''>
            <h3 className="font-semibold text-2xl">Roxen</h3>
            <p>Essay Tutorial Specialist</p>
          </div>
          <LineQrcode />
          <LineButton link="https://lin.ee/8Acg6PH" />
        </div>
      </div>
    </div>
  )
}
