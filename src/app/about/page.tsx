import { AboutUs } from '@/components/about/about_us'
import { MeetOurTeam } from '@/components/about/meet_our_team'

export default function About() {
  return (
    <div className='mt-[3rem] mb-10 max-w-screen-xl mx-8 md:mx-[7.5rem]'>
      <AboutUs />
      <MeetOurTeam />
    </div>
  )
}
