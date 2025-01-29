import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const serviceData = [
  {
    title: 'Cloud Strategy & AWS Solutions',
    subtitle: 'Optimize Your Cloud Investments with Expert AWS Services',
    description:
      'Maximize the value of your cloud investments with our comprehensive AWS and Azure strategy and advisory services.',
    features: [
      'Serverless Architecture: Enhance scalability and reduce operational overhead.',
      'Cost Optimization: Minimize cloud expenditures without compromising performance.',
      'DevOps Solutions: Streamline development with continuous integration and deployment.',
    ],
  },
  {
    title: 'Tech Transformation & Advisory',
    subtitle: 'Drive Digital Transformation with Strategic Technology Advisory',
    description:
      'Shape your technology vision and execute seamless digital transformations with our expert advisory services.',
    features: [
      'Business Analysis: Identify and drive effective technology solutions.',
      'Agile Project Management: Increase flexibility and speed with agile methodologies.',
      'Change Management: Facilitate successful adoption of new technologies.',
    ],
  },
  {
    title: 'Full-Stack Development',
    subtitle: 'Build High-Performance Applications with Cutting-Edge Full-Stack Development',
    description:
      'Create robust and scalable applications using React 19, Next.js 15, Vercel, and Prisma ORM.',
    features: [
      'Modern Frameworks: Utilize React 19 and Next.js 15 for dynamic applications',
      'Scalable Deployments: Reliable application hosting with Vercel.',
      'Database Management: Implement Prisma ORM for robust solutions.',
    ],
  },
  {
    title: 'Data & AI Solutions',
    subtitle: 'Enhance Business Performance with Intelligent Data and AI Solutions',
    description:
      'Leverage AI-Driven Analytics and Synthetic Data to boost machine learning capabilities while ensuring data privacy. We architect and deploy data pipelines using AWS or Azure serverless compute.',
    features: [
      'AI-Driven Solutions: Develop adaptive, intelligent applications.',
      'Synthetic Data Generation: Enhance models while maintaining privacy.',
      'Data Pipelines: Efficient data flow with serverless compute.',
    ],
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Protect Your Digital Assets with Comprehensive Cybersecurity',
    description:
      'Safeguard your organization from cyber threats with our end-to-end cybersecurity services. We ensure compliance, mitigate data breaches, and reduce insurance premiums through robust security frameworks.',
    features: [
      'Compliance Management: Meet all relevant industry standards.',
      'Data Breach Mitigation: Prevent and respond to breaches effectively.',
      'Insurance Premium Reduction: Qualify for lower cybersecurity insurance rates.',
    ],
  },
]

export function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white md:text-2xl">{service.title}</h2>
              <p className="text-sm text-gray-300">{service.subtitle}</p>
              <p className="text-gray-400">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start space-x-2 text-sm text-gray-300"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute inset-0 border-2 border-transparent opacity-0 transition-all duration-300 group-hover:border-primary group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  )
}
