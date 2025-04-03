"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function BlogSection({ lang, dict }: { lang: string; dict: any }) {
  const [showMore, setShowMore] = useState(false) // State to toggle additional content

  const blog = dict?.blog || {
    title: lang === "ar" ? "مدونتنا" : "Our Blog",
    readMore: lang === "ar" ? "اقرأ المزيد" : "Read More",
    readLess: lang === "ar" ? "اقرأ أقل" : "Read Less",
  }

  const blogContent = {
    title: {
      en: "Beautiful Italy Let's travel",
      ar: "إيطاليا الجميلة، هيا نسافر",
    },
    content: {
      en: [
        "Italy is most popular for its rich history, art and stunning views of picturesque villages and beautiful countryside. The great regions of the South, like Puglia, Calabria and Sicily, have grown in popularity over the years, while those who visit northern Italy tend to favor places like Florence and Venice.",
        "From the rich heritage of the great regions of the South, like Puglia, Calabria and Sicily, to the stunning views of picturesque villages and beautiful countryside, Italy has so much to offer. Whether you're exploring the ancient ruins or indulging in authentic Italian cuisine, there's something for everyone to enjoy.",
        "Italy also offers breathtaking coastal views, vibrant cities, and a rich culinary tradition that attracts millions of visitors every year. From the Amalfi Coast to the bustling streets of Rome, every corner of Italy has a story to tell.",
      ],
      ar: [
        "تشتهر إيطاليا بتاريخها الغني وفنها ومناظرها الخلابة للقرى الساحرة والريف الجميل. اكتسبت المناطق العظيمة في الجنوب، مثل بوليا وكالابريا وصقلية، شعبية على مر السنين، بينما يميل أولئك الذين يزورون شمال إيطاليا إلى تفضيل أماكن مثل فلورنسا والبندقية.",
        "من التراث الغني للمناطق العظيمة في الجنوب، مثل بوليا وكالابريا وصقلية، إلى المناظر الخلابة للقرى الساحرة والريف الجميل، تقدم إيطاليا الكثير. سواء كنت تستكشف الآثار القديمة أو تستمتع بالمأكولات الإيطالية الأصيلة، هناك شيء للجميع للاستمتاع به.",
        "إيطاليا تقدم أيضًا مناظر ساحلية خلابة، ومدن نابضة بالحياة، وتقاليد طهي غنية تجذب ملايين الزوار كل عام. من ساحل أمالفي إلى شوارع روما المزدحمة، كل زاوية في إيطاليا تحكي قصة.",
      ],
    },
  }

  const contentToShow = showMore
    ? blogContent.content[lang as keyof typeof blogContent.content] || blogContent.content.en
    : (blogContent.content[lang as keyof typeof blogContent.content] || blogContent.content.en).slice(0, 2)

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">{blog.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <video
            src="/images/blog-video.mp4"
            controls
            className="rounded-lg object-cover w-[600px] h-[600px] mx-auto"
          ></video>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            {blogContent.title[lang as keyof typeof blogContent.title] || blogContent.title.en}
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
            {showMore ? blog.readLess : blog.readMore} →
          </Button>
        </div>
      </div>
    </section>
  )
}