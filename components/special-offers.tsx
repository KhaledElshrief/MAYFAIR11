"use client"

import { useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const offers = [
  {
    id: 1,
    title: {
      en: "Lisbon, Portugal",
      ar: "لشبونة، البرتغال",
    },
    rating: 4.8,
    reviews: 147,
    description: {
      en: "Explore the colorful streets and enjoy the local cuisine",
      ar: "استكشف الشوارع الملونة واستمتع بالمأكولات المحلية",
    },
    days: 7,
    price: 650,
    originalPrice: 800,
    image: "/images/Image Container.png?height=200&width=300",
  },
  {
    id: 2,
    title: {
      en: "Athens, Greece",
      ar: "أثينا، اليونان",
    },
    rating: 4.9,
    reviews: 175,
    description: {
      en: "Visit ancient ruins and experience Mediterranean culture",
      ar: "زيارة الآثار القديمة وتجربة ثقافة البحر المتوسط",
    },
    days: 5,
    price: 600,
    originalPrice: 800,
    image: "/images/Image Container-2.png?height=200&width=300",
  },
  {
    id: 3,
    title: {
      en: "Rome, Italy",
      ar: "روما، إيطاليا",
    },
    rating: 4.7,
    reviews: 163,
    description: {
      en: "Discover the eternal city with its rich history",
      ar: "اكتشف المدينة الخالدة بتاريخها الغني",
    },
    days: 6,
    price: 600,
    originalPrice: 750,
    image: "/images/Image Container-3.png?height=200&width=300",
  },
  {
    id: 4,
    title: {
      en: "Barcelona, Spain",
      ar: "برشلونة، إسبانيا",
    },
    rating: 4.8,
    reviews: 192,
    description: {
      en: "Experience Gaudi's architecture and vibrant city life",
      ar: "تجربة عمارة غاودي وحياة المدينة النابضة بالحياة",
    },
    days: 5,
    price: 550,
    originalPrice: 700,
    image: "/images/Image Container.png?height=200&width=300",
  },
  {
    id: 5,
    title: {
      en: "Santorini, Greece",
      ar: "سانتوريني، اليونان",
    },
    rating: 4.9,
    reviews: 210,
    description: {
      en: "Enjoy stunning views and beautiful white-washed buildings",
      ar: "استمتع بإطلالات خلابة ومباني بيضاء جميلة",
    },
    days: 6,
    price: 750,
    originalPrice: 900,
    image: "/images/Image Container-2.png?height=200&width=300",
  },
  {
    id: 6,
    title: {
      en: "Paris, France",
      ar: "باريس، فرنسا",
    },
    rating: 4.7,
    reviews: 185,
    description: {
      en: "Explore the city of love and its iconic landmarks",
      ar: "استكشف مدينة الحب ومعالمها الشهيرة",
    },
    days: 4,
    price: 500,
    originalPrice: 650,
    image: "/images/Image Container-3.png?height=200&width=300",
  },
]

export default function SpecialOffers({ lang, dict }: { lang: string; dict: any }) {
  const swiperPrevRef = useRef<HTMLButtonElement>(null)
  const swiperNextRef = useRef<HTMLButtonElement>(null)

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{dict.specialOffers.title}</h2>
        <div className="flex items-center gap-4">
          <p className="text-gray-600 hidden md:block">{dict.specialOffers.subtitle}</p>
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
          if (swiperPrevRef.current && swiperNextRef.current) {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = swiperPrevRef.current
              swiper.params.navigation.nextEl = swiperNextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }
          }
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="offers-swiper"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title[lang as keyof typeof offer.title] || offer.title.en}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg">
                      {offer.title[lang as keyof typeof offer.title] || offer.title.en}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">
                        {offer.rating} ({offer.reviews})
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    {offer.description[lang as keyof typeof offer.description] || offer.description.en}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>
                      {offer.days} {dict.specialOffers.days}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4 pt-0">
                <div>
                  <span className="text-sm text-gray-500 line-through">€{offer.originalPrice}</span>
                  <p className="text-xl font-bold text-orange-500">€{offer.price}</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">{dict.specialOffers.bookNow}</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

