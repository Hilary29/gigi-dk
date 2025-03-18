import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <main>
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7CEDA] via-white to-[#F7CBD7]">
      <div className="container mx-auto px-8 sm:px-0 lg:px-32 py-16 lg:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
            <div className="max-w-[590px] ">
              <p className="text-[#1E1E1E] font-semibold text-3xl md:text-5xl leading-tight mb-4 sm:mb-12">
                Life is not perfect, but your nails can be.
              </p>
              <p className="text-[#6F6F6F] font-medium text-lg md:text-xl leading-relaxed font-inter mb-4 sm:mb-12">
              Discover exclusive products, stunning nail designs, and book your appointment – all in one place.
              </p>
              <Link href='/signup' className="bg-primary-500 text-white font-medium text-lg px-4 py-2.5 rounded-md hover:bg-primary-600 transition-colors ">
                Start Now
              </Link>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-[626px] mx-auto">
              {/* Blurred background image */}
              <div className="absolute inset-0 blur-md">
                <Image
                  src="/images/hero.png"
                  alt="Nail polish"
                  width={626}
                  height={626}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="absolute inset-0 scale-95">
                <Image
                  src="/images/hero.png"
                  alt="Nail polish"
                  width={602}
                  height={602}
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

