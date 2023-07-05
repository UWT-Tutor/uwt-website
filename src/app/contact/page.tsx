import Calendly from "@/components/contact/calendly";

export default function Contact() {

  return (
    <div className="container flex flex-col items-center gap-3 mt-10 px-8">
      <h1 className="text-5xl font-semibold">Contact Us</h1>
      <p>alexander@uwtwriting.com</p>
      <div className="my-8">
        <Calendly />
      </div>
    </div>
  )
}
