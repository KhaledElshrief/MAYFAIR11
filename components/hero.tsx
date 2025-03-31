"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { CalendarIcon, Users } from "lucide-react"

export default function Hero({ lang, dict }: { lang: string; dict: any }) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Add safety check for dict
  const hero = dict?.hero || {
    title: "Start your unforgettable journey with us.",
    subtitle: "Discover the world's most amazing places with exclusive deals",
    destination: "Destination",
    destinationPlaceholder: "Where are you going?",
    checkIn: "Check in",
    pickDate: "Pick a date",
    guests: "Guests",
    oneAdult: "1 Adult",
    twoAdults: "2 Adults",
    twoAdultsOneChild: "2 Adults, 1 Child",
    twoAdultsTwoChildren: "2 Adults, 2 Children",
    search: "Search",
  }

  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{hero.title}</h1>
          <p className="text-lg md:text-xl mb-8">{hero.subtitle}</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mt-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{hero.destination}</label>
              <input
                type="text"
                placeholder={hero.destinationPlaceholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{hero.checkIn}</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: lang === "ar" ? ar : undefined })
                    ) : (
                      <span>{hero.pickDate}</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    locale={lang === "ar" ? ar : undefined}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{hero.guests}</label>
              <div className="relative">
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none">
                  <option>{hero.oneAdult}</option>
                  <option>{hero.twoAdults}</option>
                  <option>{hero.twoAdultsOneChild}</option>
                  <option>{hero.twoAdultsTwoChildren}</option>
                </select>
                <Users className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">{hero.search}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

