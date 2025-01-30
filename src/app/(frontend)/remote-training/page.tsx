import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Remote Training | AusBiz Consulting',
  description:
    '1-Hour Weekly Sessions Over 6 Weeks - Flexible remote training solutions for your team',
  openGraph: mergeOpenGraph({
    title: 'Remote Training | AusBiz Consulting',
    description:
      '1-Hour Weekly Sessions Over 6 Weeks - Flexible remote training solutions for your team',
  }),
}

export default function RemoteTrainingPage() {
  return (
    <div className="mx-4 lg:mx-auto max-w-6xl pb-12 relative">
      {/* Main Header Section */}
      <div className="bg-[#1a1a1a] text-white rounded-full py-6 px-8 mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold">
          Remote Training: 1-Hour Weekly Sessions Over 6 Weeks
        </h1>
      </div>

      {/* Description */}
      <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
        Best for companies needing flexible scheduling and teams that prefer incremental learning
        with time to absorb new information.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column */}
        <div className="space-y-6">
          <Card className="bg-[#1a1a1a] text-white border-none">
            <CardContent className="p-6 flex gap-4">
              <Calendar className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Weekly Sessions</h2>
                <p>Live, interactive online classes focusing on specific technologies.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] text-white border-none">
            <CardContent className="p-6 flex gap-4">
              <Users className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">On-going Support</h2>
                <p>Access to training materials and post-session Q&A for sustained learning.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Skills */}
        <Card className="bg-white border-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Skills you&apos;ll learn</h2>
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
            Contact us to explore tailored training solutions designed for your organization&apos;s
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
