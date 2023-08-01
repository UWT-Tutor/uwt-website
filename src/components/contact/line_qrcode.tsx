import Image from 'next/image'
import assistantQrcode from '/public/images/assistant-qrcode.jpg'

export default function LineQrcode() {
  return (
    <Image
      src={assistantQrcode}
      width={160}
      height={160}
      className="shadow-lg rounded-md w-full sm:w-[150px]"
      alt="line qrcode"
    />
  )
}