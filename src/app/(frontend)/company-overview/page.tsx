import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Users, Shield, Lightbulb, Award, Zap, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Company Overview | AusBiz Consulting',
  description:
    "Learn about AusBiz Consulting's mission, core values, and why businesses choose us as your trusted technology partner.",
  openGraph: mergeOpenGraph({
    title: 'Company Overview | AusBiz Consulting',
    description:
      "Learn about AusBiz Consulting's mission, core values, and why businesses choose us as your trusted technology partner.",
  }),
}

export default function CompanyOverview() {
  return (
    <div className="mx-4 lg:mx-auto max-w-6xl space-y-12 pb-12">
      <h1 className="text-center text-5xl font-bold text-foreground mb-8">Company Profile</h1>

      <Card className="bg-card">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Target className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
          </div>
          <p className="text-xl text-card-foreground text-center max-w-3xl mx-auto">
            {`At AusBiz Consulting, our mission is to empower businesses with innovative technology
            solutions that drive growth, enhance efficiency, and foster sustainable success. We are
            committed to delivering exceptional consulting services that align with our clients'
            unique needs and objectives, ensuring they stay ahead in the rapidly evolving digital
            landscape.`}
          </p>
        </CardContent>
      </Card>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground text-center mb-6">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Innovation',
              description:
                'We embrace cutting-edge technologies to deliver forward-thinking solutions that keep our clients at the forefront of their industries.',
              icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
            },
            {
              title: 'Client-Centricity',
              description:
                'Our clients are at the heart of everything we do; their success is our success. We prioritize understanding and meeting their unique needs.',
              icon: <Users className="w-8 h-8 text-blue-600" />,
            },
            {
              title: 'Integrity',
              description:
                'We uphold the highest standards of honesty and ethical practices in all our engagements, building trust and long-lasting relationships.',
              icon: <Shield className="w-8 h-8 text-blue-600" />,
            },
            {
              title: 'Excellence',
              description:
                'We strive for excellence in every project, ensuring top-quality results and continuous improvement to exceed client expectations.',
              icon: <Award className="w-8 h-8 text-blue-600" />,
            },
            {
              title: 'Adaptability',
              description:
                'In a rapidly changing tech landscape, we stay agile and adaptable, quickly pivoting to meet new challenges and opportunities.',
              icon: <Zap className="w-8 h-8 text-blue-600" />,
            },
            {
              title: 'Global Perspective',
              description:
                "We bring a global mindset to local challenges, leveraging international best practices and insights for our clients' benefit.",
              icon: <Globe className="w-8 h-8 text-blue-600" />,
            },
          ].map((value, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-card-foreground text-center">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-card">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
          </div>
          <div className="text-lg text-card-foreground text-center mb-8 max-w-4xl mx-auto space-y-4">
            <p>
              {`With a team of seasoned experts and a proven track record, AusBiz Consulting is
              dedicated to helping your organization navigate the complexities of the digital
              landscape. Our tailored solutions are designed to meet your specific challenges and
              drive measurable outcomes.`}
            </p>
            <p>
              {`Choose AusBiz Consulting for a partner who is invested in your success, committed to
              excellence, and ready to help you transform your business for the digital age.`}
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-black text-white hover:bg-gray-900"
            >
              <Link href="https://ausbiz-prototype.vercel.app/contact-us">Contact Us Today</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
