import Image from 'next/image'
import lineIcon from '/public/images/line.png'

interface LineButtonProps {
  link: string
}

export default function LineButton(props: LineButtonProps) {
  return (
    <a href={props.link} className="flex flex-row justify-center items-center gap-2 shadow-lg bg-[#06C755] py-2 px-3 rounded-lg cursor-pointer">
      <Image src={lineIcon} width={32} height={32} alt="" />
      <span className="text-white text-lg font-semibold">Contact Us</span>
    </a>
  )
}