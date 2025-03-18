"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  content: string
  name: string
  image: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Before AgriNet, I struggled to keep track of my crops and find buyers for my produce. Now, I can monitor my farm's health in real time and receive recommendations tailored to my needs. The marketplace feature has been a game-changer, letting me sell directly to buyers and earn better prices without relying on middlemen. Agrinet has truly simplified farming for me.",
      name: "Assamba Melono Medard",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      content:
        "Agrinet's real-time data insights have revolutionized how we approach agricultural policy. The ability to analyze trends, monitor farming activities, and ensure sustainability has been invaluable in our efforts to support farmers and improve food security. The platform provides the tools we need to drive impactful change in agriculture.",
      name: "Ousmanou Oumarou Yaya",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      content:
        "Agrinet has completely changed how I buy food. I love knowing exactly where my produce comes from, thanks to the product traceability feature. It's reassuring to see the journey from farm to table. Plus, being able to support local farmers directly is a bonus—it feels good to know I'm contributing to sustainable farming practices.",
      name: "Ngono Larissa Gaëlle",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      content:
        "Before AgriNet, I struggled to keep track of my crops and find buyers for my produce. Now, I can monitor my farm's health in real time and receive recommendations tailored to my needs. The marketplace feature has been a game-changer, letting me sell directly to buyers and earn better prices without relying on middlemen. Agrinet has truly simplified farming for me.",
      name: "Assamba Melono Medard",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 5,
      content:
        "Agrinet's real-time data insights have revolutionized how we approach agricultural policy. The ability to analyze trends, monitor farming activities, and ensure sustainability has been invaluable in our efforts to support farmers and improve food security. The platform provides the tools we need to drive impactful change in agriculture.",
      name: "Ousmanou Oumarou Yaya",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 6,
      content:
        "Agrinet has completely changed how I buy food. I love knowing exactly where my produce comes from, thanks to the product traceability feature. It's reassuring to see the journey from farm to table. Plus, being able to support local farmers directly is a bonus—it feels good to know I'm contributing to sustainable farming practices.",
      name: "Ngono Larissa Gaëlle",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1))
  }

  // For mobile view, we'll show one testimonial at a time
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-24 py-16 w-full bg-white">
      <div className="flex flex-col items-start gap-12 w-full max-w-[1186px]">
        {/* Header section */}
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center items-center px-3 py-2 bg-[#FFDFDF] rounded-full mb-4">
            <span className="font-semibold text-sm text-[#7A0002]">TESTIMONIALS</span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="font-montserrat font-semibold text-2xl md:text-3xl lg:text-4xl text-center text-black">
              What Our Clients Say
            </h2>
            <p className="text-base text-center text-[#4B4B4B] max-w-2xl">
              Hear from our customers about their experiences with Gigi DK Nails.
            </p>
          </div>
        </div>

        {/* Testimonials carousel */}
        <div className="relative w-full">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-1 bg-[#E8F7FF] rounded-xl p-6 md:p-7">
                <div className="flex flex-col h-full">
                  <p className="text-[#4B4B4B] text-base mb-9 flex-grow">{testimonial.content}</p>

                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-base text-black">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-[#FFDFDF] rounded-full flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#7A0002]" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-[#FFDFDF] rounded-full flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#7A0002]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

