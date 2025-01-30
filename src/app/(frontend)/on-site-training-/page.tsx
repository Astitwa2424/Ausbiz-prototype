import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'On-Site Training | AusBiz Consulting',
  description:
    '2-Day Intensive Workshops - Comprehensive, focused training sessions for teams that thrive in face-to-face, collaborative environments.',
  openGraph: mergeOpenGraph({
    title: 'On-Site Training | AusBiz Consulting',
    description:
      '2-Day Intensive Workshops - Comprehensive, focused training sessions for teams that thrive in face-to-face, collaborative environments.',
  }),
}

export default function OnSiteTrainingPage() {
  return (
    <div className="mx-4 lg:mx-auto max-w-6xl pb-12 relative">
      {/* Main Header Section */}
      <div className="bg-[#1a1a1a] text-white rounded-full py-6 px-8 mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">
          On-Site Training: 2-Day Intensive Workshops
        </h1>
      </div>

      {/* Description */}
      <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
        Best for organizations seeking comprehensive, focused training sessions and teams that
        thrive in face-to-face, collaborative environments.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Day 1 Card */}
          <Card className="bg-[#1a1a1a] text-white border-none">
            <CardContent className="p-6 flex gap-4">
              <Calendar className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Day 1</h2>
                <p>Expert-led workshops on selected topics.</p>
              </div>
            </CardContent>
          </Card>

          {/* Day 2 Card */}
          <Card className="bg-[#1a1a1a] text-white border-none">
            <CardContent className="p-6 flex gap-4">
              <Users className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Day 2</h2>
                <p>Practical applications, real-world projects, and interactive Q&A.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Skills */}
        <Card className="bg-white border-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Skills you'll learn</h2>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 flex-shrink-0 text-blue-600" />
                <span>
                  AWS Cloud Services: Serverless Architecture (Lambda, API Gateway, Amplify), Cost
                  Optimization, DevOps
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 flex-shrink-0 text-blue-600" />
                <span>
                  Full-Stack Development: React 19, Next.js 15, Vercel, Prisma ORM, Resend,
                  shadcn/ui
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 flex-shrink-0 text-blue-600" />
                <span>Generative AI & Synthetic Data</span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="w-5 h-5 flex-shrink-0 text-blue-600" />
                <span>Cybersecurity: Compliance, Data Breaches, Insurance Premium Reduction</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <Card className="bg-[#1a1a1a] text-white border-none">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-6 text-lg">
            Contact us to explore tailored training solutions designed for your organization's
            unique needs.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="https://ausbiz-prototype.vercel.app/contact-us">Contact Us</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
