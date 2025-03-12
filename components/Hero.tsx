import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
/*     <section className="w-full bg-gradient-to-br from-[#F7CEDA] via-white to-[#F7CBD7] py-24 md:py-28 lg:py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-32 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 md:py-16 lg:py-0">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-left">
            <p className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[44px] text-[#1E1E1E] font-montserrat max-w-[590px]">
              Life is not perfect, but your nails can be.
            </p>
            <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-[20px] leading-[32px] text-[#6F6F6F] font-medium font-inter max-w-[590px]">
            Discover exclusive products, stunning nail designs, and book your appointment – all in one place
            </p>
            <div className="mt-8 md:mt-10 ">
              <Link className="bg-[#7A0002] hover:bg-[#5A0001] text-white px-4 py-2.5 font-medium rounded-md" 
              href='/signup'>
                Sign up
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[552px] lg:h-[552px]">
              <Image
                src="/images/hero.png"
                width={502}
                height={502}
                alt="Nail polish"
                className="w-full h-full object-contain rounded-[100px]"
              />
            </div>
          </div>
        </div>
        </div>

    </section> */



    <main>
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F7CEDA] via-white to-[#F7CBD7]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
            <div className="max-w-[590px]">
              <h1 className="text-[#1E1E1E] font-semibold text-3xl md:text-4xl leading-tight font-montserrat mb-6">
                Life is not perfect but your nails should be.
              </h1>
              <p className="text-[#6F6F6F] font-medium text-lg md:text-xl leading-relaxed font-inter mb-8">
              Discover exclusive products, stunning nail designs, and book your appointment – all in one place.
              </p>
              <Link href='/signup' className="bg-[#7A0002] text-white font-medium px-4 py-2.5 rounded-md hover:bg-[#5a0001] transition-colors ">
                Start Now
              </Link>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-[626px] mx-auto">
              {/* Blurred background image */}
              <div className="absolute inset-0 blur-md rounded-[50px]">
                <Image
                  src="/placeholder.svg?height=626&width=626"
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
                  className="w-full h-full object-contain rounded-[50px]"
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

