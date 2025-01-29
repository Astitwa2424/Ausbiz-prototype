import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const companyOverviewData = {
  mission: {
    title: 'Mission',
    description:
      "At AusBiz Consulting, our mission is to empower businesses with innovative technology solutions that drive growth, enhance efficiency, and foster sustainable success. We are committed to delivering exceptional consulting services that align with our clients' unique needs and objectives.",
  },
  values: [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
    },
    {
      title: 'Client-Centricity',
      description:
        'Our clients are at the heart of everything we do; their success is our success.',
    },
    {
      title: 'Integrity',
      description:
        'We uphold the highest standards of honesty and ethical practices in all our engagements.',
    },
    {
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork, both within our organization and with our clients.',
    },
    {
      title: 'Excellence',
      description:
        'We strive for excellence in every project, ensuring top-quality results and continuous improvement.',
    },
  ],
  whyChooseUs: {
    title: 'Why Choose Us',
    description:
      'With a team of seasoned experts and a proven track record, AusBiz Consulting is dedicated to helping your organization navigate the complexities of the digital landscape. Our tailored solutions are designed to meet your specific challenges and drive measurable outcomes.',
  },
}

export function CompanyOverview() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {companyOverviewData.mission.title}
        </h2>
        <p className="mt-4 text-gray-300">{companyOverviewData.mission.description}</p>
      </div>

      {/* Core Values Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Core Values</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companyOverviewData.values.map((value, index) => (
            <div
              key={index}
              className="rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-white">{value.title}</h3>
              <p className="mt-2 text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {companyOverviewData.whyChooseUs.title}
        </h2>
        <p className="mt-4 text-gray-300">{companyOverviewData.whyChooseUs.description}</p>
      </div>
    </div>
  )
}
