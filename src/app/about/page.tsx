import { AboutUs } from '@/components/about/about_us'
import { MeetOurTeam } from '@/components/about/meet_our_team'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className='mt-[3rem] mb-10 container'>
      <AboutUs />
      <MeetOurTeam />
    </div>
  )
}
