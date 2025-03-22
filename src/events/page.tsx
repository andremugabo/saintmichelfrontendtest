import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Saint Michel Cathedral Events"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Events & Programs</h1>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-stone-800">Upcoming Events</h2>
            <p className="text-stone-700 mb-12 max-w-3xl">
              Saint Michel Cathedral hosts a variety of events throughout the year, from concerts and lectures to
              special liturgical celebrations. Join us for these enriching experiences in our historic space.
            </p>

            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="concerts">Concerts</TabsTrigger>
                <TabsTrigger value="tours">Tours & Lectures</TabsTrigger>
                <TabsTrigger value="worship">Worship Services</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {[
                  {
                    title: "Organ Concert",
                    date: "June 15, 2024",
                    time: "7:30 PM",
                    location: "Main Cathedral",
                    description:
                      "Experience the magnificent sound of our historic pipe organ in this special evening concert featuring works by Bach, Widor, and Messiaen.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "concerts",
                  },
                  {
                    title: "Guided Architecture Tour",
                    date: "June 22, 2024",
                    time: "2:00 PM",
                    location: "Meet at West Entrance",
                    description:
                      "Join our expert guides for an in-depth exploration of the cathedral's architectural wonders, from flying buttresses to ribbed vaults.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "tours",
                  },
                  {
                    title: "Choral Evensong",
                    date: "June 29, 2024",
                    time: "5:00 PM",
                    location: "Choir",
                    description:
                      "Listen to our renowned choir perform sacred music in the perfect acoustics of the cathedral during this traditional evening service.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "worship",
                  },
                  {
                    title: "Stained Glass Lecture",
                    date: "July 5, 2024",
                    time: "6:00 PM",
                    location: "Chapter House",
                    description:
                      "Dr. Emma Laurent, art historian, presents a fascinating lecture on the symbolism and craftsmanship of our medieval stained glass windows.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "tours",
                  },
                  {
                    title: "Chamber Music Concert",
                    date: "July 12, 2024",
                    time: "7:00 PM",
                    location: "Lady Chapel",
                    description:
                      "The renowned Quartet Saint Michel performs works by Mozart, Beethoven, and Debussy in the intimate setting of our Lady Chapel.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "concerts",
                  },
                  {
                    title: "Feast Day Celebration",
                    date: "July 29, 2024",
                    time: "10:00 AM",
                    location: "Main Cathedral",
                    description:
                      "Join us for a special Mass celebrating the Feast of Saint Michel, with procession, choir, and orchestra.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "worship",
                  },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-60 md:h-auto">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-stone-800">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-stone-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-stone-700 mb-6">{event.description}</p>
                        <Button>Register</Button>
                      </div>
                    </div>
                  </CardContent>
                ))}
              </TabsContent>

              <TabsContent value="concerts" className="space-y-8">
                {[
                  {
                    title: "Organ Concert",
                    date: "June 15, 2024",
                    time: "7:30 PM",
                    location: "Main Cathedral",
                    description:
                      "Experience the magnificent sound of our historic pipe organ in this special evening concert featuring works by Bach, Widor, and Messiaen.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "concerts",
                  },
                  {
                    title: "Chamber Music Concert",
                    date: "July 12, 2024",
                    time: "7:00 PM",
                    location: "Lady Chapel",
                    description:
                      "The renowned Quartet Saint Michel performs works by Mozart, Beethoven, and Debussy in the intimate setting of our Lady Chapel.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "concerts",
                  },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-60 md:h-auto">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-stone-800">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-stone-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-stone-700 mb-6">{event.description}</p>
                        <Button>Register</Button>
                      </div>
                    </div>
                  </CardContent>
                ))}
              </TabsContent>

              <TabsContent value="tours" className="space-y-8">
                {[
                  {
                    title: "Guided Architecture Tour",
                    date: "June 22, 2024",
                    time: "2:00 PM",
                    location: "Meet at West Entrance",
                    description:
                      "Join our expert guides for an in-depth exploration of the cathedral's architectural wonders, from flying buttresses to ribbed vaults.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "tours",
                  },
                  {
                    title: "Stained Glass Lecture",
                    date: "July 5, 2024",
                    time: "6:00 PM",
                    location: "Chapter House",
                    description:
                      "Dr. Emma Laurent, art historian, presents a fascinating lecture on the symbolism and craftsmanship of our medieval stained glass windows.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "tours",
                  },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-60 md:h-auto">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-stone-800">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-stone-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-stone-700 mb-6">{event.description}</p>
                        <Button>Register</Button>
                      </div>
                    </div>
                  </CardContent>
                ))}
              </TabsContent>

              <TabsContent value="worship" className="space-y-8">
                {[
                  {
                    title: "Choral Evensong",
                    date: "June 29, 2024",
                    time: "5:00 PM",
                    location: "Choir",
                    description:
                      "Listen to our renowned choir perform sacred music in the perfect acoustics of the cathedral during this traditional evening service.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "worship",
                  },
                  {
                    title: "Feast Day Celebration",
                    date: "July 29, 2024",
                    time: "10:00 AM",
                    location: "Main Cathedral",
                    description:
                      "Join us for a special Mass celebrating the Feast of Saint Michel, with procession, choir, and orchestra.",
                    image: "/placeholder.svg?height=400&width=600",
                    category: "worship",
                  },
                ].map((event, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-60 md:h-auto">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-2xl font-bold mb-2 text-stone-800">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-stone-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <p className="text-stone-700 mb-6">{event.description}</p>
                        <Button>Register</Button>
                      </div>
                    </div>
                  </CardContent>
                ))}
              </TabsContent>
            </Tabs>

            <div className="bg-stone-100 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-stone-800">Calendar of Events</h2>
              <p className="text-stone-700 mb-6">
                View our full calendar of events, including regular worship services, concerts, tours, and special
                celebrations.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md h-96 flex items-center justify-center">
                <p className="text-stone-600">Interactive Calendar Would Appear Here</p>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Host Your Event at the Cathedral</h2>
              <p className="mb-6">
                Saint Michel Cathedral offers a unique and inspiring setting for select events such as concerts,
                lectures, and special ceremonies. For inquiries about hosting an event, please contact our Events
                Coordinator.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-blue-800">
                Contact Events Coordinator
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

