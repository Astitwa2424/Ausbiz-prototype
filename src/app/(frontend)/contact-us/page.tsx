import { MapPin, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">
            At AusBiz Consulting, we value the opportunity to connect with corporate stakeholders
            and businesses. Whether you're looking to move forward with an inquiry, schedule a
            consultation, or explore how we can support your organization's goals, this page is your
            direct line to us.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section - Left Column */}
          <div>{/* Your existing Payload form will be rendered here */}</div>

          {/* Contact Details - Right Column */}
          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

              {/* Office Address */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Office Address</h3>
                </div>
                <p className="text-gray-600 ml-7">123 Business St, Sydney NSW 2000</p>
              </div>

              {/* Office Hours */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Office Hours</h3>
                </div>
                <div className="text-gray-600 ml-7">
                  <p>Monday to Friday: 9:00 AM – 5:00 PM AEST</p>
                  <p>Saturday and Sunday: Closed</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6">
                <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26537.90346460229!2d151.20169635!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1635825谷歌地图"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
