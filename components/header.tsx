"use client"

import Link from "next/link"
import { useState } from "react"
import { Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation"

export default function Header({ lang, dict }: { lang: string; dict: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Add safety check for dict
  const navigation = dict?.navigation || {
    home: "Home",
    about: "About",
    packages: "Packages",
    blog: "Blog",
    contact: "Contact",
    signUp: "Sign Up",
  }

  // Function to switch language in the URL
  const switchLanguage = (newLang: string) => {
    const currentPath = pathname.replace(`/${lang}`, `/${newLang}`)
    return currentPath
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <img
              src="/images/logo.png" // Replace with the path to your logo file in the public folder
              alt="Travelian Logo"
              className="w-10 h-10 object-contain" // Adjust the size as needed
            />
            <span className="text-3xl font-bold text-white">MAYFAIR11</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 
            `}>
            <Link href={`/${lang}`} className="text-white hover:text-gray-200">
              {navigation.home}
            </Link>
                     <Link
              href={`/${lang}/about`}
              className={`text-white hover:text-gray-200 ${lang === "ar" ? "pr-4" : ""}`}
            >
              {navigation.about}
            </Link>
            <Link href={`/${lang}/packages`} className="text-white hover:text-gray-200">
              {navigation.packages}
            </Link>
            <Link href={`/${lang}/blog`} className="text-white hover:text-gray-200">
              {navigation.blog}
            </Link>
            <Link href={`/${lang}/contact`} className="text-white hover:text-gray-200">
              {navigation.contact}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={switchLanguage("en")} locale="en">
                    English
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={switchLanguage("ar")} locale="ar">
                    العربية
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white">
              {navigation.signUp}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 absolute top-16 left-4 right-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href={`/${lang}`}
                className="text-gray-800 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.home}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="text-gray-800 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.about}
              </Link>
              <Link
                href={`/${lang}/packages`}
                className="text-gray-800 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.packages}
              </Link>
              <Link
                href={`/${lang}/blog`}
                className="text-gray-800 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.blog}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-gray-800 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {navigation.contact}
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">{navigation.signUp}</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

