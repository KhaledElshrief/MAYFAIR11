import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaTwitter, FaSnapchat, FaTiktok } from "react-icons/fa"

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  // Add safety check for dict
  const footer = dict?.footer || {
    menu: "Menu",
    information: "Information",
    contactInfo: "Contact Info",
    copyright: "© 2025 MAYFAIR11. All rights reserved.",
  }

  // Menu items with translations
  const menuItems = [
    { key: "home", href: `/${lang}`, label: { en: "Home", ar: "الرئيسية" } },
    { key: "about", href: `/${lang}/about`, label: { en: "About", ar: "من نحن" } },
    { key: "packages", href: `/${lang}/packages`, label: { en: "Packages", ar: "الباقات" } },
    { key: "blog", href: `/${lang}/blog`, label: { en: "Blog", ar: "المدونة" } },
    { key: "contact", href: `/${lang}/contact`, label: { en: "Contact", ar: "اتصل بنا" } },
  ]

  // Information items with translations
  const infoItems = [
    { key: "destinations", href: `/${lang}/destinations`, label: { en: "Destinations", ar: "الوجهات" } },
    { key: "support", href: `/${lang}/support`, label: { en: "Support", ar: "الدعم" } },
    { key: "terms", href: `/${lang}/terms`, label: { en: "Terms & Conditions", ar: "الشروط والأحكام" } },
    { key: "privacy", href: `/${lang}/privacy`, label: { en: "Privacy Policy", ar: "سياسة الخصوصية" } },
  ]

  // Contact info with translations
  const contactInfo = {
    phone: "+44 7417 510758",
    email: "mfrmayfir11@gmail.com",
    address: {
      en: "Mayfair, London, England", // Updated address format
      ar: "مايفير، لندن، إنجلترا", // Arabic translation of the address
    },
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo.png" // Replace with the path to your logo file in the public folder
                alt="Travelian Logo"
                className="w-10 h-10 object-contain" // Adjust the size as needed
              />
              <span className="text-3xl font-bold text-white">MAYFAIR11</span>
            </div>
            <p className="text-gray-400 text-sm">
              {lang === "ar"
                ? "احجز رحلتك في دقائق واحصل على تحكم كامل لفترة أطول."
                : "Book your trip in minutes, get full control for much longer."}
            </p>          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footer.menu}</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className=" pointer-events-none text-gray-400 hover:text-white">
                    {item.label[lang as keyof typeof item.label] || item.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footer.information}</h3>
            <ul className="space-y-2">
              {infoItems.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="text-gray-400 hover:text-white pointer-events-none">
                    {item.label[lang as keyof typeof item.label] || item.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footer.contactInfo}</h3>
            <ul className="space-y-2 text-gray-400">
              {/* Phone */}
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>

              {/* Email */}
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>

              {/* Address */}
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactInfo.address[lang as keyof typeof contactInfo.address] || contactInfo.address.en
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {contactInfo.address[lang as keyof typeof contactInfo.address] || contactInfo.address.en}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.instagram.com/mayfair.11/?igshid=YmMyMTA2M2Y%3D" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fmayfir11" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://wa.me/mayfair11" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={20} />
              </Link>
              <Link href="https://www.snapchat.com/add/mayfair.11?share_id=CR7ZXWuzSveSo616zB9Gkw&locale=en_GB&sid=340611507da741c39072e006fd0fdff3" className="text-gray-400 hover:text-white">
                <FaSnapchat size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@mayfair.11?_t=8b8jcjmyazn&_r=1" className="text-gray-400 hover:text-white">
                <FaTiktok size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

