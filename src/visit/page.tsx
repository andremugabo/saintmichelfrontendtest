import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Euro, Calendar, Info, Users } from "lucide-react"
import Link from "next/link"
import DonationButton from "@/components/donation-button"

export default function VisitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Visit Saint Michel Cathedral"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Plan Your Visit</h1>
          </div>
        </section>

        {/* Visit Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-stone-800">Visiting Information</h2>
                <p className="text-stone-700 mb-6">
                  Saint Michel Cathedral welcomes visitors of all faiths and backgrounds. Whether you come for worship,
                  to admire the architecture and art, or to connect with history, we hope your visit will be meaningful
                  and memorable.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Monday to Friday:</span> 8:00 AM - 6:30 PM
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Saturday & Sunday:</span> 8:00 AM - 7:30 PM
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Last entry:</span> 30 minutes before closing
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Euro className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Admission</h3>
                          <p className="text-sm mb-1">
                            <span className="font-medium">General:</span> €10
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Students:</span> €5 (with valid ID)
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Children under 12:</span> Free
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Worship services:</span> Free
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Location</h3>
                          <p className="text-sm mb-1">1 Cathedral Square</p>
                          <p className="text-sm mb-1">City Center</p>
                          <p className="text-sm mb-3">Metro: Cathedral Station (Line 4)</p>
                          <Button asChild variant="outline" size="sm">
                            <a href="#map">View Map</a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Service Times</h3>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Weekday Mass:</span> 8:30 AM, 12:00 PM
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Saturday Vigil:</span> 5:30 PM
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Sunday Masses:</span> 8:30 AM, 10:00 AM, 11:30 AM, 6:30 PM
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Vespers:</span> 5:45 PM daily
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-stone-800">Guided Tours</h2>
                <p className="text-stone-700 mb-6">
                  Enhance your visit with one of our expert-led guided tours. Our knowledgeable guides will share the
                  cathedral's history, art, and architecture in an engaging and informative way.
                </p>

                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Users className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">General Tour</h3>
                          <p className="text-sm mb-3">
                            A comprehensive 60-minute tour covering the cathedral's history, architecture, and art.
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Times:</span> 10:00 AM, 1:00 PM, 3:00 PM daily
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Price:</span> €15 per person (in addition to admission)
                          </p>
                          <p className="text-sm mb-3">
                            <span className="font-medium">Languages:</span> English, French, Spanish, German
                          </p>
                          <Button size="sm">Book a Tour</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Users className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Architecture Focus Tour</h3>
                          <p className="text-sm mb-3">
                            A specialized 90-minute tour focusing on the Gothic architecture and construction
                            techniques.
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Times:</span> 11:30 AM, 2:30 PM (Tuesday, Thursday, Saturday)
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Price:</span> €20 per person (in addition to admission)
                          </p>
                          <p className="text-sm mb-3">
                            <span className="font-medium">Languages:</span> English, French
                          </p>
                          <Button size="sm">Book a Tour</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Users className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Art & Symbolism Tour</h3>
                          <p className="text-sm mb-3">
                            A 75-minute tour exploring the stained glass, sculptures, and religious symbolism.
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Times:</span> 10:30 AM, 2:00 PM (Monday, Wednesday, Friday,
                            Sunday)
                          </p>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Price:</span> €18 per person (in addition to admission)
                          </p>
                          <p className="text-sm mb-3">
                            <span className="font-medium">Languages:</span> English, French, Italian
                          </p>
                          <Button size="sm">Book a Tour</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-stone-800">Accessibility</h2>
                <p className="text-stone-700 mb-6">
                  We are committed to making Saint Michel Cathedral accessible to all visitors. The main floor of the
                  cathedral is wheelchair accessible via a ramp at the north entrance. Accessible restrooms are
                  available.
                </p>
                <p className="text-stone-700 mb-6">
                  For visitors with hearing impairments, we offer assistive listening devices and written tour guides.
                  Service animals are welcome in the cathedral.
                </p>
                <p className="text-stone-700 mb-12">
                  If you have specific accessibility needs or questions, please contact our Visitor Services team at
                  accessibility@saintmichel.org or call +1-234-567-8910 prior to your visit.
                </p>

                <div id="map" className="rounded-lg overflow-hidden h-96 mb-8">
                  <div className="bg-stone-200 h-full w-full flex items-center justify-center">
                    <p className="text-stone-600">Interactive Map Would Appear Here</p>
                  </div>
                </div>

                <div className="text-center">
                  <DonationButton variant="default" size="lg" />
                </div>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 mr-3 text-blue-800 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Visitor Tips</h3>
                        <ul className="text-sm space-y-2">
                          <li>• Arrive early to avoid crowds, especially during peak tourist season (June-August)</li>
                          <li>• Photography is permitted in most areas, but no flash or tripods</li>
                          <li>• Dress respectfully as this is an active place of worship</li>
                          <li>• Guided tours are available in multiple languages</li>
                          <li>• Audio guides can be rented at the entrance</li>
                          <li>• The cathedral shop offers souvenirs and religious items</li>
                          <li>• Silence is appreciated in the main worship space</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="Cathedral Interior"
                    fill
                    className="object-cover"
                  />
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Organ Concert</p>
                        <p className="text-sm text-stone-600">June 15, 2024 • 7:30 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Guided Architecture Tour</p>
                        <p className="text-sm text-stone-600">June 22, 2024 • 2:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Choral Evensong</p>
                        <p className="text-sm text-stone-600">June 29, 2024 • 5:00 PM</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href="/events">View All Events</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

