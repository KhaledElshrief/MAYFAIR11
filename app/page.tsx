import { redirect } from "next/navigation"
import { defaultLocale } from "@/middleware"

export default function Home() {
  // Redirect root to default locale
  redirect(`/${defaultLocale}`)
}

