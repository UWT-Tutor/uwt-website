import Calendly from "@/components/contact/calendly";
import Link from "next/link";

export default function Contact() {

  return (
    <div className="container flex flex-col items-center gap-3 mt-10 px-8">
      <h1 className="text-5xl font-semibold">Contact Us</h1>
      <a href="mailto:alexander@uwtwriting.com?subject=Essay Tutorial Inquiry" className="text-secondary">alexander@uwtwriting.com</a>
      <div className="my-8">
        <Calendly />
      </div>
    </div>
  )
}
