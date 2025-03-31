import Header from "@/components/header"
import Hero from "@/components/hero"
import PopularDestinations from "@/components/popular-destinations"
import SpecialOffers from "@/components/special-offers"
import BlogSection from "@/components/blog-section"
import TripPlanners from "@/components/trip-planners"
import DestinationGallery from "@/components/destination-gallery"
import TravelersExperiences from "@/components/travelers-experiences"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import Script from "next/script"
import { getDictionary } from "@/lib/dictionary"
import CarOffers from "@/components/car-offers"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <Header lang={lang} dict={dict} />
      <Hero lang={lang} dict={dict} />
      <div className="container mx-auto px-4 space-y-16 py-8">
        <PopularDestinations lang={lang} dict={dict} />
        <SpecialOffers lang={lang} dict={dict} />
        <CarOffers lang={lang} dict={dict} />
        <BlogSection lang={lang} dict={dict} />
        <TripPlanners lang={lang} dict={dict} />
        <DestinationGallery lang={lang} dict={dict} />
        <TravelersExperiences lang={lang} dict={dict} />
      </div>
      <Newsletter lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" />
    </main>
  )
}

