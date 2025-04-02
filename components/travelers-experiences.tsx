import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: {
      en: "Sarah Johnson",
      ar: "سارة جونسون",
    },
    avatar: "/images/person-3.png?height=50&width=50",
    rating: 5,
    text: {
      en: "My trip to Italy was absolutely amazing! The itinerary was perfectly planned and the accommodations were fantastic. I'll definitely book with Travelian again.",
      ar: "كانت رحلتي إلى إيطاليا مذهلة تمامًا! تم التخطيط لخط السير بشكل مثالي وكانت أماكن الإقامة رائعة. سأحجز بالتأكيد مع ترافيليان مرة أخرى.",
    },
  },
  {
    id: 2,
    name: {
      en: "Michael Chen",
      ar: "مايكل تشن",
    },
    avatar: "/images/person-2.png?height=50&width=50",
    rating: 5,
    text: {
      en: "The guided tour of Greece exceeded all my expectations. Our guide was knowledgeable and friendly, making the experience truly memorable.",
      ar: "تجاوزت الجولة المصحوبة بمرشدين في اليونان كل توقعاتي. كان مرشدنا على دراية وودودًا، مما جعل التجربة لا تُنسى حقًا.",
    },
  },
  {
    id: 3,
    name: {
      en: "John Doe",
      ar: "جون دو ",
    },
    avatar: "/images/person-1.png?height=50&width=50",
    rating: 5,
    text: {
      en: "From booking to return, everything was seamless. The customer service team was responsive and helpful throughout the entire process.",
      ar: "من الحجز إلى العودة، كان كل شيء سلسًا. كان فريق خدمة العملاء متجاوبًا ومفيدًا طوال العملية بأكملها.",
    },
  },
]

export default function TravelersExperiences({ lang, dict }: { lang: string; dict: any }) {
  // Add safety check for dict
  const testimonialDict = dict?.testimonials || {
    title: "Traveler's Experiences",
  }

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">{testimonialDict.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
                           <Avatar className={`h-10 w-10 ${lang === "ar" ? "ml-3" : "mr-3"}`}>
                <AvatarImage
                  src={testimonial.avatar}
                  alt={testimonial.name[lang as keyof typeof testimonial.name] || testimonial.name.en}
                />
                <AvatarFallback>
                  {(testimonial.name[lang as keyof typeof testimonial.name] || testimonial.name.en)
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">
                  {testimonial.name[lang as keyof typeof testimonial.name] || testimonial.name.en}
                </h3>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {testimonial.text[lang as keyof typeof testimonial.text] || testimonial.text.en}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

