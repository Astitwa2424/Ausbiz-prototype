import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import Image from 'next/image'
import { GraduationCap, Building2, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team | AusBiz Consulting',
  description: 'Meet the experienced professionals behind AusBiz Consulting.',
  openGraph: mergeOpenGraph({
    title: 'Our Team | AusBiz Consulting',
    description: 'Meet the experienced professionals behind AusBiz Consulting.',
  }),
}

interface TeamMember {
  name: string
  title: string
  education: string
  experience: string
  github: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Callum Bir',
    title: 'Director',
    education: 'Computer Science and Computer System Engineering, RMIT University Australia (90s)',
    experience: 'Former Oracle, Deloitte, and Microsoft professional',
    github: 'gocallum',
    imageUrl: '/media/callum.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Lead Data Scientist',
    education: 'Computer Science and Computer System Engineering, RMIT University Australia (90s)',
    experience: 'Former Oracle, Deloitte, and Microsoft professional',
    github: 'gocallum',
    imageUrl: '/media/callum.jpg',
  },
  {
    name: 'Alex Johnson',
    title: 'DevOps Specialist',
    education: 'Computer Science and Computer System Engineering, RMIT University Australia (90s)',
    experience: 'Former Oracle, Deloitte, and Microsoft professional',
    github: 'gocallum',
    imageUrl: '/media/callum.jpg',
  },
]

export default function TeamPage() {
  return (
    <div className="mx-4 lg:mx-auto max-w-6xl space-y-12 pb-12">
      <h1 className="text-center text-4xl font-bold text-foreground mb-8">MEET THE TEAM</h1>

      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#0a0f1a] rounded-lg overflow-hidden p-6 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-48 h-48 flex-shrink-0">
              <Image
                src={member.imageUrl || '/placeholder.svg'}
                alt={member.name}
                width={192}
                height={192}
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-white space-y-4">
              <h2 className="text-3xl font-bold">{member.name}</h2>
              <h3 className="text-xl font-semibold">{member.title}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 flex-shrink-0" />
                  <span>{member.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6 flex-shrink-0" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-6 h-6 flex-shrink-0" />
                  <span>GitHub: {member.github}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
