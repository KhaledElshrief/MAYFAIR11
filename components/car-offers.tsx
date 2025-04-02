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
      en: "Tesla Model 3",
      ar: "تسلا موديل 3",
    },
    rating: 4.8,
    reviews: 147,
    description: {
      en: "Experience the future of driving with this electric car.",
      ar: "استمتع بقيادة المستقبل مع هذه السيارة الكهربائية.",
    },
    days: 1, // Rental duration in days
    price: 120, // Price per day in Euros
    originalPrice: 150, // Original price per day in Euros
    image: "/images/car-1.png?height=200&width=300",
  },
  {
    id: 2,
    title: {
      en: "BMW X5",
      ar: "بي إم دبليو X5",
    },
    rating: 4.9,
    reviews: 175,
    description: {
      en: "Luxury SUV with premium features for a comfortable ride.",
      ar: "سيارة دفع رباعي فاخرة مع ميزات متميزة لرحلة مريحة.",
    },
    days: 1,
    price: 200,
    originalPrice: 250,
    image: "/images/car-2.png?height=200&width=300",
  },
  {
    id: 3,
    title: {
      en: "Toyota Corolla",
      ar: "تويوتا كورولا",
    },
    rating: 4.7,
    reviews: 163,
    description: {
      en: "Reliable and fuel-efficient sedan for everyday use.",
      ar: "سيارة سيدان موثوقة وموفرة للوقود للاستخدام اليومي.",
    },
    days: 1,
    price: 50,
    originalPrice: 70,
    image: "/images/car-3.png?height=200&width=300",
  },
  {
    id: 4,
    title: {
      en: "Mercedes-Benz E-Class",
      ar: "مرسيدس بنز الفئة E",
    },
    rating: 4.8,
    reviews: 192,
    description: {
      en: "Elegant and powerful sedan for business or leisure.",
      ar: "سيارة سيدان أنيقة وقوية للأعمال أو الترفيه.",
    },
    days: 1,
    price: 180,
    originalPrice: 220,
    image: "/images/car-4.png?height=200&width=300",
  },
  {
    id: 5,
    title: {
      en: "Ford Mustang",
      ar: "فورد موستانج",
    },
    rating: 4.9,
    reviews: 210,
    description: {
      en: "Iconic sports car with thrilling performance.",
      ar: "سيارة رياضية أيقونية بأداء مثير.",
    },
    days: 1,
    price: 150,
    originalPrice: 180,
    image: "/images/ford.png?height=200&width=300",
  },
  {
    id: 6,
    title: {
      en: "Honda Civic",
      ar: "هوندا سيفيك",
    },
    rating: 4.7,
    reviews: 185,
    description: {
      en: "Compact and efficient car for city driving.",
      ar: "سيارة مدمجة وفعالة للقيادة في المدينة.",
    },
    days: 1,
    price: 60,
    originalPrice: 80,
    image: "/images/honda.png?height=200&width=300",
  },
]
export default function CarOffers({ lang, dict }: { lang: string; dict: any }) {
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
        className="offers-swiper"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={offer.image || "/images/car-1.png"}
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

