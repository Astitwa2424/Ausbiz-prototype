import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface Service {
  image: string
  title: string
  description: string
  link: string
}

const services: Service[] = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fnSNA34bLSkx-zmfqAwr6AlSPMH96weZErYlBoaptyOXcdJ0dJ9Gb1_pbwTUtPdCg_w&usqp=CAU', // Can be replaced with URL
    title: 'Cloud Strategy & AWS Solutions',
    description:
      'Our serverless solutions using AWS Lambda, API Gateway, and Amplify enhance scalability and reduce costs.',
    link: '#',
  },
  {
    image: 'https://example.com/tech-transformation.jpg', // Example of URL image
    title: 'Tech Transformation & Advisory',
    description:
      'We provide Business Analysis, Agile Project Management, and Change Management to ensure successful implementation',
    link: '#',
  },
  {
    image: '/path-to-local-image-3.jpg', // Can be replaced with URL
    title: 'Full-Stack Development',
    description:
      'Create robust and scalable applications using React.js, Next.js 15, Vercel, and Prisma ORM',
    link: '#',
  },
  {
    image: 'https://example.com/data-ai-solutions.jpg', // Example of URL image
    title: 'Data & AI Solutions',
    description:
      'Leverage AI-Driven Analytics and Synthetic Data to boost machine learning capabilities while ensuring data privacy.',
    link: '#',
  },
  {
    image: '/path-to-local-image-5.jpg', // Can be replaced with URL
    title: 'Cybersecurity',
    description:
      'We ensure compliance, mitigate data breaches, and reduce insurance premiums through robust security frameworks',
    link: '#',
  },
]

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={`${service.title} icon`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold leading-tight text-foreground">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow text-center text-sm text-muted-foreground">
                <p>{service.description}</p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
