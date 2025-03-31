import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  try {
    // Default to 'en' if the locale is not supported
    const supportedLocale = locale in dictionaries ? locale : "en"
    return dictionaries[supportedLocale as keyof typeof dictionaries]()
  } catch (error) {
    console.error("Error loading dictionary:", error)
    // Return a basic dictionary to prevent errors
    return {
      navigation: {
        home: "Home",
        about: "About",
        packages: "Packages",
        blog: "Blog",
        contact: "Contact",
        signUp: "Sign Up",
      },
      hero: {
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
      },
      // Add other necessary fallback translations
    }
  }
}

