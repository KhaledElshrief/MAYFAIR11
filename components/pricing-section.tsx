"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PricingSection({ lang, dict }: { lang: string; dict: any }) {
  const [showMore, setShowMore] = useState(false) // State to toggle additional content

  const price = dict?.price || {
    title: lang === "ar" ? "خطط التسعير لدينا" : "Our Pricing",
    readMore: lang === "ar" ? "اقرأ المزيد" : "Read More",
    readLess: lang === "ar" ? "اقرأ أقل" : "Read Less",
  }

  const pricingContent = {
    title: {
      en: "Affordable Pricing Plans for Everyone",
      ar: "خطط تسعير ميسورة للجميع",
    },
    content: {
      en: [
        "Choose from a variety of pricing plans tailored to meet your needs. Whether you're traveling solo or with family, we have the perfect plan for you.",
        "Our pricing plans are designed to offer flexibility and value. Enjoy premium services at competitive rates, ensuring a memorable experience.",
        "Upgrade to our premium plans for exclusive benefits, including priority support, additional features, and more.",
      ],
      ar: [
        "اختر من بين مجموعة متنوعة من خطط التسعير المصممة لتلبية احتياجاتك. سواء كنت تسافر بمفردك أو مع العائلة، لدينا الخطة المثالية لك.",
        "تم تصميم خطط التسعير لدينا لتقديم المرونة والقيمة. استمتع بخدمات متميزة بأسعار تنافسية لضمان تجربة لا تُنسى.",
        "قم بالترقية إلى خططنا المميزة للحصول على مزايا حصرية، بما في ذلك الدعم الأولوي والمزيد من الميزات.",
      ],
    },
  }

  const contentToShow = showMore
    ? pricingContent.content[lang as keyof typeof pricingContent.content] || pricingContent.content.en
    : (pricingContent.content[lang as keyof typeof pricingContent.content] || pricingContent.content.en).slice(0, 2)

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">{price.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src="/images/list-price.jpg"
            className="rounded-lg object-cover w-full h-auto max-w-[600px] mx-auto sm:h-[400px] md:h-[600px] lg:h-auto lg:max-w-full"
            alt="Pricing List"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            {pricingContent.title[lang as keyof typeof pricingContent.title] || pricingContent.title.en}
          </h3>
          {contentToShow.map((paragraph, index) => (
            <p key={index} className="text-gray-600">
              {paragraph}
            </p>
          ))}
          <Button
            variant="link"
            className="text-orange-500 p-0"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? price.readLess : price.readMore} →
          </Button>
        </div>
      </div>
    </section>
  )
}