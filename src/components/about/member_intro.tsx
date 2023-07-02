import Image from 'next/image'

interface MemberIntroProps {
  name: string
  imageSrc: string
  description: string
  credentials: string[]
}

export function MemberIntro({ name, imageSrc, description, credentials }: MemberIntroProps) {
  return (
    <div className='flex items-center gap-12'>
      <Image
        src={imageSrc}
        width={220}
        height={220}
        alt={name}
        className='rounded-full w-full md:w-[13.75rem] h-auto md:h-[13.75rem]'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl text-foreground font-semibold'>{name}</h3>
        <p className='text-muted-foreground leading-relaxed'>
          &emsp;{description}
        </p>
        <div>
          <h4 className='font-semibold'>Credentials</h4>
          <ul className='text-muted-foreground list-inside list-disc'>
            {credentials.map((credential, index) => (
              <li key={index}>{credential}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
