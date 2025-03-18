import { ChevronRight, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NailServiceCardProps {
  title: string
  description: string
  price: string
  imageUrl: string
}

const NailServiceCard = ({ title, description, price, imageUrl }: NailServiceCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white">
      <div className="w-full h-56 bg-[#F9EBEB] relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col items-start gap-1 p-2 w-full relative">
        <span className="text-[#0086CD] font-bold text-base">{price}</span>
        <div className="flex flex-col gap-1.5 w-full">
          <h3 className="text-[#1E1E1E] font-bold text-lg">{title}</h3>
          <p className="text-[#4B4B4B] text-base">{description}</p>
        </div>
        <div className="absolute right-2 top-0">
          <button className="bg-black rounded-md p-1 w-10 h-8 flex items-center justify-center">
            <ShoppingCart size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const nailServices = [
    {
      title: "Gel construction",
      description: "Professional gel nail construction with long-lasting finish and shine.",
      price: "FCFA 8000",
      imageUrl: "/placeholder.svg?height=225&width=378",
    },
    {
      title: "Double pose",
      description: "Double layer application for extra strength and a perfect finish.",
      price: "FCFA 8000",
      imageUrl: "/placeholder.svg?height=225&width=378",
    },
    {
      title: "Gel Nail Extension",
      description: "Extend your natural nails with our premium gel extension service.",
      price: "FCFA 8000",
      imageUrl: "/placeholder.svg?height=225&width=378",
    },
    {
      title: "Set Up and Monitor",
      description: "Complete nail care setup with professional monitoring and maintenance.",
      price: "FCFA 8000",
      imageUrl: "/placeholder.svg?height=225&width=378",
    },
    {
      title: "Acrylic",
      description: "Premium acrylic nail application for durability and beautiful results.",
      price: "FCFA 8000",
      imageUrl: "/placeholder.svg?height=225&width=378",
    },
    {
      title: "Nail Art Design",
      description: "Custom nail art designs to express your unique style and personality.",
      price: "FCFA 8000",
      imageUrl: "/placeholder.svg?height=225&width=378",
    },
  ]

  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-32 py-16 gap-8 w-full">
      <div className="flex flex-col items-start gap-8 w-full max-w-[1183px]">
        {/* Intro paragraph */}
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center px-2.5 py-2.5 bg-[#FFDFDF] rounded-full">
            <span className="text-[#7A0002] font-semibold text-base">GALLERY</span>
          </div>
          <div className="flex flex-col items-center gap-3 mt-4">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center font-montserrat">
              Stunning Nail Designs & Inspirations Made by Gigi DK&apos; Nails
            </h2>
            <p className="text-[#4B4B4B] text-center max-w-2xl">
              Explore our latest creations and find the perfect nail style that suits you.
            </p>
          </div>
        </div>

        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {nailServices.slice(0, 3).map((service, index) => (
            <NailServiceCard
              key={`service-1-${index}`}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {nailServices.slice(3, 6).map((service, index) => (
            <NailServiceCard
              key={`service-2-${index}`}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        {/* See More button */}
        <div className="flex justify-center w-full mt-4">
          <Link href='/gallery' className="flex items-center gap-2 text-[#7A0002] font-semibold text-lg">
            See More
            <div className="bg-[#FFDFDF] rounded-full w-10 h-10 flex items-center justify-center">
              <ChevronRight className="text-[#7A0002]"/>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

