"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import DonationButton from "@/components/donation-button"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Saint Michel Cathedral"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-merriweather">{t("home.welcome")}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">{t("home.experience")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-deep-blue font-poppins">
                <Link href="/services">{t("home.join")}</Link>
              </Button>
              <DonationButton variant="outline" size="lg" className="text-white border-white hover:bg-white/10" />
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-deep-blue font-merriweather">
                  {t("home.welcome_section")}
                </h2>
                <p className="text-stone-700 mb-6">{t("home.welcome_text")}</p>
                <p className="text-stone-700 mb-6">{t("home.welcome_text2")}</p>
                <Button
                  asChild
                  variant="outline"
                  className="group border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white"
                >
                  <Link href="/about" className="flex items-center font-poppins">
                    {t("home.learn_more")}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Interior of Saint Michel Cathedral"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-deep-blue font-merriweather">
              {t("home.highlights")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: t("home.architecture"),
                  description: t("home.architecture_desc"),
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: t("home.stained_glass"),
                  description: t("home.stained_glass_desc"),
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: t("home.relics"),
                  description: t("home.relics_desc"),
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-deep-blue font-merriweather">{item.title}</h3>
                    <p className="text-stone-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Preview */}
        <section className="py-16 bg-deep-blue text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-merriweather">{t("home.upcoming")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Organ Concert",
                  date: "June 15, 2024",
                  description:
                    "Experience the magnificent sound of our historic pipe organ in this special evening concert.",
                },
                {
                  title: "Guided Architecture Tour",
                  date: "June 22, 2024",
                  description:
                    "Join our expert guides for an in-depth exploration of the cathedral's architectural wonders.",
                },
                {
                  title: "Choral Evensong",
                  date: "June 29, 2024",
                  description:
                    "Listen to our renowned choir perform sacred music in the perfect acoustics of the cathedral.",
                },
              ].map((event, index) => (
                <div key={index} className="bg-soft-blue/20 rounded-lg p-6 shadow-lg">
                  <p className="text-gold font-medium mb-2">{event.date}</p>
                  <h3 className="text-xl font-bold mb-2 font-merriweather">{event.title}</h3>
                  <p className="text-gray-200 mb-4">{event.description}</p>
                  <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                    <Link href="/announcements">{t("home.learn_more")}</Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild className="bg-gold hover:bg-gold/90 text-deep-blue font-poppins" size="lg">
                <Link href="/announcements">{t("home.view_all")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

