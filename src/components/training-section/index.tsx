import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Linkedin, BookOpen, Video, Laptop } from 'lucide-react'
import Link from 'next/link'

const trainingOptions = [
  {
    title: 'On-Site Training',
    description: '2-Day Intensive Workshops',
    icon: BookOpen,
    link: 'https://ausbiz-prototype.vercel.app/on-site-training-',
  },
  {
    title: 'Remote Training',
    description: '1-Hour Weekly Sessions Over 6 Weeks',
    icon: Video,
    link: 'https://ausbiz-prototype.vercel.app/remote-training',
  },
  {
    title: 'Tech Bootcamp',
    description: '4 Weeks Training and 6 weeks Internship',
    icon: Laptop,
    link: 'https://tech-bootcamp.vercel.app/',
  },
]

const testimonials = [
  {
    text: "The training provided by AusBiz Consulting was instrumental in advancing our team's skills.",
    name: 'Alex Johnson',
    designation: 'CTO, TechCorp',
  },
  {
    text: 'Comprehensive and practical. The bootcamp exceeded our expectations in every way.',
    name: 'Sarah Lee',
    designation: 'HR Manager, InnovateCo',
  },
  {
    text: 'The remote training option allowed our global team to participate and learn together.',
    name: 'Michael Chen',
    designation: 'Project Lead, GlobalTech',
  },
  {
    text: "AusBiz's on-site workshop transformed our approach to cloud solutions. Highly recommended!",
    name: 'Emily Rodriguez',
    designation: 'Cloud Architect, CloudSys',
  },
]

export default function TrainingSection() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 md:px-6">
        {/* Training Header */}
        <h2 className="text-3xl font-bold text-center mb-12">Our Training Programs</h2>

        {/* Training Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trainingOptions.map((option, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <option.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="bg-primary/10 text-primary rounded-full p-1 mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <Button variant="outline" asChild>
                  <Link href={option.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <p className="text-sm mb-4 text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.designation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center space-y-6 py-12 border-t border-gray-200">
          <h3 className="text-2xl font-semibold">Ready to elevate your teams expertise?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact us today to discuss how AusBiz Consulting can support your technology
            initiatives and drive your business forward with our tailored training programs.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="https://ausbiz-prototype.vercel.app/contact-us">Get Started</Link>
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-4">
            <p className="text-2xl font-bold">AusBiz Consulting</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                Terms of use
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} AusBiz Consulting Pty Ltd - All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
