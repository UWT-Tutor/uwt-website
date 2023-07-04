import Image from 'next/image'

interface MemberIntroProps {
  name: string
  imageSrc: string
  description: string
  credentials: string[]
}

export function MemberIntro({ name, imageSrc, description, credentials }: MemberIntroProps) {
  return (
    <div className='flex items-center gap-4 md:gap-12 flex-wrap'>
      <Image
        src={imageSrc}
        width={220}
        height={220}
        alt={name}
        className='rounded-full w-full md:w-[13.75rem] h-auto md:h-[13.75rem] max-w-[220px]'
      />
      <div className='flex flex-col gap-4 flex-1 min-w-[300px] md:min-w-[400px]'>
        <h3 className='text-3xl md:text-2xl text-foreground font-semibold'>{name}</h3>
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
