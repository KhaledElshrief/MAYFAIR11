// "use client"

// import { useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Grid } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/grid"

// const galleryImages = [
//   {
//     id: 1,
//     src: "/images/gallary-1.jpg?height=300&width=200",
//     alt: {
//       en: "Coastal view",
//       ar: "منظر ساحلي",
//     },
//   },
//   {
//     id: 2,
//     src: "/images/gallary-2.png?height=300&width=200",
//     alt: {
//       en: "Beach sunset",
//       ar: "غروب الشمس على الشاطئ",
//     },
//   },
//   {
//     id: 3,
//     src: "/images/gallary-3.png?height=300&width=200",
//     alt: {
//       en: "Venice canal",
//       ar: "قناة البندقية",
//     },
//   },
//   {
//     id: 4,
//     src: "/images/gallary-4.png?height=300&width=200",
//     alt: {
//       en: "Tourist in city",
//       ar: "سائح في المدينة",
//     },
//   },
//   {
//     id: 5,
//     src: "/images/gallary-1.jpg?height=300&width=200",
//     alt: {
//       en: "Mountain landscape",
//       ar: "منظر جبلي",
//     },
//   },
//   {
//     id: 6,
//     src: "/images/gallary-2.png?height=300&width=200",
//     alt: {
//       en: "Desert safari",
//       ar: "سفاري صحراوي",
//     },
//   },
//   {
//     id: 7,
//     src: "/images/gallary-3.png?height=300&width=200",
//     alt: {
//       en: "Tropical beach",
//       ar: "شاطئ استوائي",
//     },
//   },
//   {
//     id: 8,
//     src: "/images/gallary-4.png?height=300&width=200",
//     alt: {
//       en: "Ancient temple",
//       ar: "معبد قديم",
//     },
//   },
//   {
//     id: 9,
//     src: "/placeholder.svg?height=300&width=200",
//     alt: {
//       en: "City skyline",
//       ar: "أفق المدينة",
//     },
//   },
//   {
//     id: 10,
//     src: "/placeholder.svg?height=300&width=200",
//     alt: {
//       en: "Waterfall",
//       ar: "شلال",
//     },
//   },
//   {
//     id: 11,
//     src: "/placeholder.svg?height=300&width=200",
//     alt: {
//       en: "Northern lights",
//       ar: "الشفق القطبي",
//     },
//   },
//   {
//     id: 12,
//     src: "/placeholder.svg?height=300&width=200",
//     alt: {
//       en: "Safari animals",
//       ar: "حيوانات السفاري",
//     },
//   },
// ]

// export default function DestinationGallery({ lang, dict }: { lang: string; dict: any }) {
//   const swiperPrevRef = useRef<HTMLButtonElement>(null)
//   const swiperNextRef = useRef<HTMLButtonElement>(null)

//   // Add safety check for dict
//   const gallery = dict?.gallery || {
//     title: "Destination Gallery",
//   }

//   return (
//     <section className="py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold">{gallery.title}</h2>
//         <div className="flex space-x-2">
//           <Button variant="outline" size="icon" className="rounded-full z-10" ref={swiperPrevRef}>
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full bg-orange-500 text-white hover:bg-orange-600 z-10"
//             ref={swiperNextRef}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       <div className="gallery-container">
//         <Swiper
//           modules={[Navigation, Grid]}
//           spaceBetween={16}
//           slidesPerView={2}
//           grid={{
//             rows: 1,
//           }}
//           navigation={{
//             prevEl: swiperPrevRef.current,
//             nextEl: swiperNextRef.current,
//           }}
//           onBeforeInit={(swiper) => {
//             // @ts-ignore
//             swiper.params.navigation.prevEl = swiperPrevRef.current
//             // @ts-ignore
//             swiper.params.navigation.nextEl = swiperNextRef.current
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 3,
//             },
//             1024: {
//               slidesPerView: 4,
//             },
//           }}
//           className="gallery-swiper"
//           dir={lang === "ar" ? "rtl" : "ltr"}
//         >
//           {galleryImages.map((image) => (
//             <SwiperSlide key={image.id}>
//               <div className="relative overflow-hidden rounded-lg aspect-[3/4] group">
//                 <Image
//                   src={image.src || "/placeholder.svg"}
//                   alt={image.alt[lang as keyof typeof image.alt] || image.alt.en}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   )
// }

"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImageFallback from "./image-fallback"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Grid } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/grid"
import ImageLightbox from "./image-lightbox"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallary-1.jpg?height=300&width=200",
    alt: {
      en: "Coastal view",
      ar: "منظر ساحلي",
    },
  },
  {
    id: 2,
    src: "/images/gallary-2.png?height=300&width=200",
    alt: {
      en: "Beach sunset",
      ar: "غروب الشمس على الشاطئ",
    },
  },
  {
    id: 3,
    src: "/images/gallary-3.png?height=300&width=200",
    alt: {
      en: "Venice canal",
      ar: "قناة البندقية",
    },
  },
  {
    id: 4,
    src: "/images/gallary-4.png?height=300&width=200",
    alt: {
      en: "Tourist in city",
      ar: "سائح في المدينة",
    },
  },
  {
    id: 5,
    src: "/images/gallary-1.jpg?height=300&width=200",
    alt: {
      en: "Mountain landscape",
      ar: "منظر جبلي",
    },
  },
  {
    id: 6,
    src: "/images/gallary-2.png?height=300&width=200",
    alt: {
      en: "Desert safari",
      ar: "سفاري صحراوي",
    },
  },
  {
    id: 7,
    src: "/images/gallary-3.png?height=300&width=200",
    alt: {
      en: "Tropical beach",
      ar: "شاطئ استوائي",
    },
  },
  {
    id: 8,
    src: "/images/gallary-4.png?height=300&width=200",
    alt: {
      en: "Ancient temple",
      ar: "معبد قديم",
    },
  },
  {
    id: 9,
    src: "/images/gallery.jpg?height=300&width=200",
    alt: {
      en: "City skyline",
      ar: "أفق المدينة",
    },
  },
  {
    id: 10,
    src: "/images/gallery-1.jpg?height=300&width=200",
    alt: {
      en: "Waterfall",
      ar: "شلال",
    },
  },
  {
    id: 11,
    src: "/images/gallery-2.jpg?height=300&width=200",
    alt: {
      en: "Northern lights",
      ar: "الشفق القطبي",
    },
  },
  {
    id: 13,
    src: "/images/gallery-4.jpg?height=300&width=200",
    alt: {
      en: "Safari animals",
      ar: "حيوانات السفاري",
    },
  },
  {
    id: 12,
    src: "/images/gallery-3.jpg?height=300&width=200",
    alt: {
      en: "Safari animals",
      ar: "حيوانات السفاري",
    },
  },
]

export default function DestinationGallery({ lang, dict }: { lang: string; dict: any }) {
  const swiperPrevRef = useRef<HTMLButtonElement>(null)
  const swiperNextRef = useRef<HTMLButtonElement>(null)

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  // Function to open lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentImageIndex(null)
  }

  // Function to navigate to previous image
  const goToPreviousImage = () => {
    if (currentImageIndex === null) return

    const newIndex = currentImageIndex <= 0
      ? galleryImages.length - 1
      : currentImageIndex - 1

    setCurrentImageIndex(newIndex)
  }

  // Function to navigate to next image
  const goToNextImage = () => {
    if (currentImageIndex === null) return

    const newIndex = currentImageIndex >= galleryImages.length - 1
      ? 0
      : currentImageIndex + 1

    setCurrentImageIndex(newIndex)
  }

  // Add safety check for dict
  const gallery = dict?.gallery || {
    title: "Destination Gallery",
  }

  // Get current image data if available
  const currentImage = currentImageIndex !== null ? galleryImages[currentImageIndex] : null

  // Check if RTL mode is active
  const isRtl = lang === "ar"

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{gallery.title}</h2>
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

      <div className="gallery-container">
        <Swiper
          modules={[Navigation, Grid]}
          spaceBetween={16}
          slidesPerView={2}
          grid={{
            rows: 1,
          }}
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
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="gallery-swiper"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className="relative overflow-hidden rounded-lg aspect-[3/4] group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <ImageFallback
                  src={image.src || "/placeholder.svg"}
                  fallbackSrc={`/placeholder.svg?height=300&width=200&text=${encodeURIComponent(image.alt[lang as keyof typeof image.alt] || image.alt.en)}`}
                  alt={image.alt[lang as keyof typeof image.alt] || image.alt.en}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox component */}
      {currentImage && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt[lang as keyof typeof currentImage.alt] || currentImage.alt.en}
          onPrevious={goToPreviousImage}
          onNext={goToNextImage}
          hasPrevious={galleryImages.length > 1}
          hasNext={galleryImages.length > 1}
          isRtl={isRtl}
        />
      )}
    </section>
  )
}


