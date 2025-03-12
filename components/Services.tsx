import Image from "next/image"
import { ChevronRight } from "lucide-react"

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
    <div className="flex flex-col items-center p-1.5 w-full md:w-[379px] h-auto bg-white shadow-md rounded-md">
      <div className="w-full h-[199px] rounded-lg overflow-hidden bg-gray-200 shadow-lg">
        <Image
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          width={367}
          height={199}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start p-4 gap-6 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <h3 className="font-semibold text-lg leading-7 text-[#1E1E1E]">{feature.title}</h3>
          <p className="font-normal text-base leading-6 text-[#4B4B4B]">{feature.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-16 py-16 w-full bg-[#FFF1F1]">
      <div className="flex flex-col items-center gap-8 w-full max-w-[1186px]">
        {/* Intro paragraph */}
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center px-2.5 py-2.5 bg-[#FFDFDF] rounded-full">
            <span className="font-semibold text-base text-[#7A0002]">SERVICES</span>
          </div>

          <div className="flex flex-col items-center gap-3 mt-8 w-full">
            <h2 className="font-montserrat font-semibold text-2xl md:text-3xl lg:text-4xl text-center text-[#1E1E1E]">
              Services Tailored to your needs
            </h2>
            <p className="font-inter font-normal text-base text-center text-[#4B4B4B] max-w-[550px]">
              Provide a variety of services to help you keep gorgeous, healthy nails, from simple manicures and
              pedicures to elaborate nail art
            </p>
          </div>
        </div>

        {/* First row of feature cards */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {/* Second row of feature cards */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.slice(3, 6).map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>

        {/* See More button */}
        <div className="flex items-center mt-4">
          <button className="flex items-center gap-2 font-semibold text-lg text-[#7A0002]">
            See More
            <div className="flex items-center justify-center w-10 h-10 bg-[#FFDFDF] rounded-full">
              <ChevronRight className="w-5 h-5 text-[#7A0002]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

