"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const destinations = [
  {
    id: 1,
    name: {
      en: "Berlin, Germany",
      ar: "برلين، ألمانيا",
    },
    image: "/images/Col-block.png?height=300&width=250",
  },
  {
    id: 2,
    name: {
      en: "London, UK",
      ar: "لندن، المملكة المتحدة",
    },
    image: "/images/Col-block-2.png?height=300&width=250",
  },
  {
    id: 3,
    name: {
      en: "Venice, Italy",
      ar: "البندقية، إيطاليا",
    },
    image: "/images/Col-block-3.png?height=300&width=250",
  },
  {
    id: 4,
    name: {
      en: "Paris, France",
      ar: "باريس، فرنسا",
    },
    image: "/images/Col-block.png?height=300&width=250",
  },
  {
    id: 5,
    name: {
      en: "Barcelona, Spain",
      ar: "برشلونة، إسبانيا",
    },
    image: "/images/Col-block-2.png?height=300&width=250",
  },
  {
    id: 6,
    name: {
      en: "Amsterdam, Netherlands",
      ar: "أمستردام، هولندا",
    },
    image: "/images/Col-block-3.png?height=300&width=250",
  },
  {
    id: 7,
    name: {
      en: "Prague, Czech Republic",
      ar: "براغ، جمهورية التشيك",
    },
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 8,
    name: {
      en: "Vienna, Austria",
      ar: "فيينا، النمسا",
    },
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    id: 9,
    name: {
      en: "Rome, Italy",
      ar: "روما، إيطاليا",
    },
    image: "/images/Col-block-2.png?height=300&width=250",
  },
]

export default function PopularDestinations({ lang, dict }: { lang: string; dict: any }) {
  const swiperPrevRef = useRef<HTMLButtonElement>(null)
  const swiperNextRef = useRef<HTMLButtonElement>(null)

  // Add safety check for dict
  const popularDestinations = dict?.popularDestinations || {
    title: "Popular Destinations",
    subtitle: "Handpicked destinations across the world, from historical places to natural wonders",
  }

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">{popularDestinations.title}</h2>
          <p className="text-gray-600 mt-2">{popularDestinations.subtitle}</p>
        </div>
        <div className={`flex space-x-2 ${lang === "ar" ? "flex-row-reverse" : ""}`}>
          <Button variant="outline" size="icon" className="rounded-full z-10" ref={swiperPrevRef}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-orange-500 text-white hover:bg-orange-600 z-10"
            ref={swiperNextRef}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: swiperPrevRef.current,
          nextEl: swiperNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = swiperPrevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = swiperNextRef.current
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="destination-swiper"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <Card className="overflow-hidden group cursor-pointer h-[280px]">
              <CardContent className="p-0 relative h-full">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name[lang as keyof typeof destination.name] || destination.name.en}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-white" />
                    <h3 className="text-white font-semibold text-lg">
                      {destination.name[lang as keyof typeof destination.name] || destination.name.en}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

