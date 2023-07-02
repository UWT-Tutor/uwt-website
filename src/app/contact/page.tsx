import Script from "next/script";

export default function Contact() {
  return (
    <div className="container flex flex-col items-center gap-3 mt-10 px-8">
      <h1 className="text-5xl font-semibold">Contact Us</h1>
      <p>alexander@uwtwriting.com</p>
      <div data-url="https://calendly.com/uwtwriting" className="mt-8 calendly-inline-widget w-full lg:w-[700px] h-[630px]"></div>
      <Script src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </div>
  )
}
