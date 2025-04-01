import { Button } from "@/components/ui/button"

export default function Newsletter({ lang, dict }: { lang: string; dict: any }) {
  // Add safety check for dict
  const newsletter = dict?.newsletter || {
    title: "Our Newsletter",
    subtitle: "Subscribe to our newsletter",
    placeholder: "Your email address",
    subscribe: "Subscribe",
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{newsletter.title}</h2>
            <p className="text-gray-600">{newsletter.subtitle}</p>
          </div>
          <div className={`mt-4 md:mt-0 flex w-full md:w-auto ${lang === "ar" ? "flex-row-reverse" : ""}`}>
          <input
              type="email"
              placeholder={newsletter.placeholder}
              className="px-4 py-2 border border-gray-300 rounded-l-md w-full md:w-64"
            />
            <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">{newsletter.subscribe}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

