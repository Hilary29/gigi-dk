import type React from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface HowWeWorkCardProps {
  title: string
  description: string
  imageUrl: string
}

const HowWeWorkCard: React.FC<HowWeWorkCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-start p-7 gap-9 bg-white rounded-lg shadow-lg flex-1">
      {/* Image placeholder */}
      <div className="w-[128px] h-[106px] rounded-md ">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} width={126} height={126} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-bold text-[#1E1E1E] leading-7">{title}</h3>
          <p className="text-base text-[#4B4B4B] leading-6">{description}</p>
        </div>

        <Link href='/' className="flex items-center gap-1.5 text-[#06A5DB] font-medium">
          Learn More
          <span className="w-5 h-5 border border-[#06A5DB] rounded-full flex items-center justify-center">
            <ArrowRight size={12} className="text-[#06A5DB]" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default function HowWeWork() {
  const howWweWork = [
    {
      title: "AgriNet For Farmers",
      description: "Boost efficiency, track crops, and sell directly to buyers—all in one platform.",
      imageUrl: "/images/how-we-work-1.png",
    },
    {
      title: "AgriNet For Suppliers",
      description: "Connect with farmers, streamline your supply chain, and grow your business network.",
      imageUrl: "/images/how-we-work-2.png",
    },
    {
      title: "AgriNet For Institutions",
      description: "Access quality produce directly from farmers and manage agricultural resources efficiently.",
      imageUrl: "/images/how-we-work-3.png",
    },
  ]

  return (
    <section className="flex flex-col justify-center items-center py-16 px-4 md:px-8 lg:px-32 bg-white w-full">
      <div className="flex flex-col items-start gap-14 w-full max-w-7xl">
        {/* Intro paragraph */}
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center px-3 py-2.5 bg-[#FFDFDF] rounded-full mb-2.5">
            <span className="text-[#7A0002] font-semibold text-base">HOW-WE-WORK</span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="font-montserrat font-semibold text-2xl md:text-3xl text-center text-[#1E1E1E]">
              Life is not perfect but your nails should be.
            </h2>
            <p className="text-base text-[#4B4B4B] text-center max-w-2xl">
              We provide a range of offers to suit every need and occasion. Choose the perfect one for you
            </p>
          </div>
        </div>

        {/* Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {howWweWork.map((howWweWork, index) => (
            <HowWeWorkCard
              key={index}
              title={howWweWork.title}
              description={howWweWork.description}
              imageUrl={howWweWork.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

