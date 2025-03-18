import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

// Define the feature card type
type FeatureCard = {
  id: number
  title: string
  description: string
  image: string
}

// Sample feature data
const features: FeatureCard[] = [
  {
    id: 1,
    title: "Monitor Your Fields with Ease",
    description: "Get real-time updates on soil, weather, and crop health with IoT-powered insights",
    image: "/placeholder.svg?height=199&width=367",
  },
  {
    id: 2,
    title: "Optimize Your Crop Yield",
    description: "Use data-driven insights to maximize your harvest and reduce resource waste",
    image: "/placeholder.svg?height=199&width=367",
  },
  {
    id: 3,
    title: "Streamline Farm Operations",
    description: "Simplify planning, scheduling, and resource management with our intuitive tools",
    image: "/placeholder.svg?height=199&width=367",
  },
  {
    id: 4,
    title: "Access Expert Support",
    description: "Connect with agricultural specialists for personalized advice and troubleshooting",
    image: "/placeholder.svg?height=199&width=367",
  },
  {
    id: 5,
    title: "Track Market Trends",
    description: "Stay informed about market prices and trends to make better selling decisions",
    image: "/placeholder.svg?height=199&width=367",
  },
  {
    id: 6,
    title: "Manage Resources Efficiently",
    description: "Optimize water, fertilizer, and other resources with precision agriculture techniques",
    image: "/placeholder.svg?height=199&width=367",
  },
]

// Feature Card Component
const FeatureCard = ({ feature }: { feature: FeatureCard }) => {
  return (
    <div className="flex flex-col items-center p-1.5 w-full bg-white shadow-md rounded-md transition-transform hover:scale-[1.02]">
      <div className="w-full h-[150px] sm:h-[180px] md:h-[199px] rounded-lg overflow-hidden bg-gray-200 shadow-lg">
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          width={367}
          height={199}
          className="w-full h-full object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col items-start p-3 sm:p-4 gap-3 sm:gap-6 w-full">
        <div className="flex flex-col items-start gap-1 sm:gap-1.5 w-full">
          <h3 className="font-semibold text-base sm:text-lg leading-tight sm:leading-7 text-[#1E1E1E]">
            {feature.title}
          </h3>
          <p className="font-normal text-sm sm:text-base leading-snug sm:leading-6 text-[#4B4B4B]">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 w-full bg-[#FFF1F1]">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-[1186px]">
        {/* Intro paragraph */}
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center px-2.5 py-2 sm:py-2.5 bg-[#FFDFDF] rounded-full">
            <span className="font-semibold text-sm sm:text-base text-[#7A0002]">SERVICES</span>
          </div>

          <div className="flex flex-col items-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8 w-full">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-[#1E1E1E]">
              Services Tailored to your needs
            </h2>
            <p className="font-inter font-normal text-sm sm:text-base text-center text-[#4B4B4B] max-w-[550px] px-2">
              Provide a variety of services to help you keep gorgeous, healthy nails, from simple manicures and
              pedicures to elaborate nail art
            </p>
          </div>
        </div>

        {/* Feature cards grid - single grid for all cards */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {/* See More button */}
        <div className="flex items-center mt-2 sm:mt-4">
          <Link href='/services' className="flex items-center gap-1 sm:gap-2 font-semibold text-base sm:text-lg text-primary-500 hover:opacity-90 transition-opacity">
            See More
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#FFDFDF] rounded-full">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

