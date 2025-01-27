import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const trainingOptions = [
  {
    title: 'On-Site Training',
    description: '(2-Day Intensive Workshops)',
    image: '/path-to-local-image.jpg', // Can be replaced with URL
  },
  {
    title: 'Remote Training',
    description: '(1-Hour Weekly Sessions Over 6 Weeks)',
    image: 'https://example.com/remote-training.jpg', // Example of URL image
  },
  {
    title: 'Tech Bootcamp',
    description: '(4 Weeks Training and 6 weeks Internship)',
    image: '/another-local-image.png', // Can be replaced with URL
  },
]

const testimonials = [
  {
    text: 'This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial',
    name: 'Name',
    designation: 'Designation',
    image: '/testimonial-1.jpg', // Can be replaced with URL
  },
  {
    text: 'This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial',
    name: 'Name',
    designation: 'Designation',
    image: 'https://example.com/testimonial-2.jpg', // Example of URL image
  },
  {
    text: 'This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial',
    name: 'Name',
    designation: 'Designation',
    image: '/testimonial-3.jpg', // Can be replaced with URL
  },
  {
    text: 'This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial This is a test testimonial',
    name: 'Name',
    designation: 'Designation',
    image: 'https://example.com/testimonial-4.jpg', // Example of URL image
  },
]

export default function TrainingSection() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6 py-12">
        {/* Training Header */}
        <h2 className="text-3xl font-bold text-center mb-12">TRAINING</h2>

        {/* Training Options */}
        <div className="space-y-6 mb-12">
          {trainingOptions.map((option, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image
                  src={option.image || '/placeholder.svg'}
                  alt={option.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <span className="font-semibold">{option.title}</span>
                <span className="ml-2 text-gray-600">{option.description}</span>
              </div>
              <div className="bg-black rounded-full p-1">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
          <Button variant="outline" className="ml-10">
            Learn More
          </Button>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="p-6">
                <p className="text-sm mb-4 text-gray-600">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={testimonial.image || '/placeholder.svg'}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.designation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center space-y-6 py-12 border-t border-gray-200">
          <h3 className="text-xl font-semibold">
            Ready to leverage our expertise in these technologies?
          </h3>
          <p className="text-gray-600">
            <Link href="/contact" className="underline hover:text-black">
              Contact Us
            </Link>{' '}
            today to discuss how AusBiz Consulting can support your technology initiatives and drive
            your business forward.
          </p>

          <div className="flex items-center justify-between mt-8">
            <div className="relative w-[150px] h-[50px]">
              <Image
                src="/path-to-your-logo.png" // Can be replaced with URL
                alt="AusBiz Consulting"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Terms of use
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Privacy Policy
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-black">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Copyright © 2022 AusBiz Consulting Pty Ltd - All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
