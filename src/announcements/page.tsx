"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, Search } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AnnouncementsPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Saint Michel Cathedral Announcements"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-merriweather">
              {t("announcements.title")}
            </h1>
          </div>
        </section>

        {/* Announcements Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
              {t("announcements.latest")}
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder={t("announcements.search")} className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder={t("announcements.filter")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="parish">Parish News</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="liturgy">Liturgy</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-8 mb-12">
              {/* Important Announcements */}
              <div className="bg-gold/10 border border-gold rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Badge className="bg-gold text-deep-blue">{t("announcements.important")}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-deep-blue font-merriweather">
                  Special Mass Schedule for Holy Week
                </h3>
                <div className="flex items-center text-stone-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 24, 2024</span>
                </div>
                <p className="text-stone-700 mb-4">
                  Please note the special Mass schedule for Holy Week (March 28 - April 3). The Cathedral will have
                  extended confession times and additional services throughout the week.
                </p>
                <Button className="bg-gold hover:bg-gold/90 text-deep-blue">{t("announcements.read_more")}</Button>
              </div>

              {/* Regular Announcements */}
              {[
                {
                  title: "Easter Flower Donations",
                  date: "March 20, 2024",
                  category: "Parish News",
                  excerpt:
                    "Donations for Easter flowers to decorate the Cathedral are now being accepted. You may make a donation in memory of a loved one, which will be acknowledged in the Easter bulletin.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Youth Group Mission Trip Registration",
                  date: "March 18, 2024",
                  category: "Events",
                  excerpt:
                    "Registration is now open for our summer mission trip to serve communities in need. Open to high school students. Space is limited, so register early.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "New Adult Faith Formation Series",
                  date: "March 15, 2024",
                  category: "Education",
                  excerpt:
                    "Join us for a new six-week series on the Eucharist, beginning April 10. Sessions will be held on Wednesday evenings from 7:00-8:30 PM in the Parish Hall.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Cathedral Choir Seeking New Members",
                  date: "March 12, 2024",
                  category: "Music",
                  excerpt:
                    "Our Cathedral Choir is seeking new members in all voice parts. No audition required, just a love of sacred music and a commitment to weekly rehearsals.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Volunteer Appreciation Dinner",
                  date: "March 10, 2024",
                  category: "Community",
                  excerpt:
                    "All parish volunteers are invited to our annual Volunteer Appreciation Dinner on April 15 at 6:00 PM in the Parish Hall. RSVP by April 5.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Cathedral Restoration Project Update",
                  date: "March 5, 2024",
                  category: "Parish News",
                  excerpt:
                    "The restoration of the north transept stained glass windows is now complete. Join us for a special blessing and presentation on the restoration process on March 30.",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((announcement, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="relative h-60 md:h-auto">
                      <Image
                        src={announcement.image || "/placeholder.svg"}
                        alt={announcement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className="text-deep-blue border-deep-blue">
                          {announcement.category}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-deep-blue font-merriweather">{announcement.title}</h3>
                      <div className="flex items-center text-stone-600 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{announcement.date}</span>
                      </div>
                      <p className="text-stone-700 mb-4">{announcement.excerpt}</p>
                      <Button className="bg-deep-blue hover:bg-deep-blue/90">{t("announcements.read_more")}</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white">
                Load More Announcements
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

