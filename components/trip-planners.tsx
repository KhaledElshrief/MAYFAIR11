"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const tripPlanners = [
  {
    id: 1,
    title: {
      en: "European Adventure",
      ar: "مغامرة أوروبية",
    },
    image: "/images/plann-1.png?height=200&width=300",
    rating: 4.8,
    days: 14,
    tag: {
      en: "Popular",
      ar: "شائع",
    },
  },
  {
    id: 2,
    title: {
      en: "Paris City Tour",
      ar: "جولة مدينة باريس",
    },
    image: "/images/plann-2.png?height=200&width=300",
    rating: 4.9,
    days: 5,
  },
  {
    id: 3,
    title: {
      en: "Mediterranean Cruise",
      ar: "رحلة بحرية في البحر المتوسط",
    },
    image: "/images/plann-3.png?height=200&width=300",
    rating: 4.7,
    days: 10,
  },
  {
    id: 4,
    title: {
      en: "Japan Explorer",
      ar: "مستكشف اليابان",
    },
    image: "/images/plann-1.png?height=200&width=300",
    rating: 4.9,
    days: 12,
    tag: {
      en: "New",
      ar: "جديد",
    },
  },
  {
    id: 5,
    title: {
      en: "African Safari",
      ar: "سفاري أفريقي",
    },
    image: "/images/plann-2.png?height=200&width=300",
    rating: 4.8,
    days: 8,
  },
  {
    id: 6,
    title: {
      en: "South America Tour",
      ar: "جولة أمريكا الجنوبية",
    },
    image: "/images/plann-3.png?height=200&width=300",
    rating: 4.6,
    days: 15,
  },
  {
    id: 7,
    title: {
      en: "Australian Outback",
      ar: "المناطق النائية الأسترالية",
    },
    image: "/images/plann-1.png?height=200&width=300",
    rating: 4.7,
    days: 10,
  },
  {
    id: 8,
    title: {
      en: "Nordic Adventure",
      ar: "مغامرة نوردية",
    },
    image: "/images/plann-2.png?height=200&width=300",
    rating: 4.8,
    days: 9,
    tag: {
      en: "Featured",
      ar: "مميز",
    },
  },
]

export default function TripPlanners({ lang, dict }: { lang: string; dict: any }) {
  const swiperPrevRef = useRef<HTMLButtonElement>(null)
  const swiperNextRef = useRef<HTMLButtonElement>(null)

  // Add safety check for dict
  const tripPlannersDict = dict?.tripPlanners || {
    title: "Trip Planners",
    subtitle: "Customized itineraries designed by travel experts",
    days: "days",
  }

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">{tripPlannersDict.title}</h2>
          <p className="text-gray-600 mt-2">{tripPlannersDict.subtitle}</p>
        </div>
        <div className="flex space-x-2">
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
          1024: {
            slidesPerView: 3,
          },
        }}
        className="trip-planners-swiper"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {tripPlanners.map((planner) => (
          <SwiperSlide key={planner.id}>
            <Card className="overflow-hidden h-[280px]">
              <CardContent className="p-0 relative h-full">
                <Image
                  src={planner.image || "/placeholder.svg"}
                  alt={planner.title[lang as keyof typeof planner.title] || planner.title.en}
                  fill
                  className="object-cover"
                />
                {planner.tag && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {planner.tag[lang as keyof typeof planner.tag] || planner.tag.en}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-bold text-lg text-white">
                    {planner.title[lang as keyof typeof planner.title] || planner.title.en}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(planner.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white">
                      {planner.days} {tripPlannersDict.days}
                    </span>
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

