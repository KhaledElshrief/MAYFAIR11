"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import emailjs from "emailjs-com"

export default function ContactUs({ lang, dict }: { lang: string; dict: any }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<string | null>(null)

  const contactUs = dict?.contactUs || {
    title: "Contact Us",
    subtitle: "We'd love to hear from you. Fill out the form below to get in touch.",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    submit: "Submit",
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_d83od4d", // Replace with your EmailJS Service ID
        "template_qr8zl8x", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "khaledelshref731@gmail.com", // Ensure this matches the recipient email
        },
        "3gxdaf84Bpn8ocSWp" // Replace with your EmailJS Public Key
      )
      console.log(result.text)
      setStatus("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" }) // Reset form
    } catch (error) {
      console.error(error)
      setStatus("Failed to send message. Please try again.")
    }
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">{contactUs.title}</h2>
            <p className="text-gray-600">{contactUs.subtitle}</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={contactUs.namePlaceholder}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={contactUs.emailPlaceholder}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={contactUs.messagePlaceholder}
              className="px-4 py-2 border border-gray-300 rounded-md w-full h-32"
            ></textarea>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
              {contactUs.submit}
            </Button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}