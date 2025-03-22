"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Saint Michel Cathedral Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-merriweather">{t("about.about")}</h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full flex justify-center mb-8 bg-light-gray p-1 rounded-lg">
                <TabsTrigger value="about" className="font-poppins">
                  {t("about.about")}
                </TabsTrigger>
                <TabsTrigger value="priests" className="font-poppins">
                  {t("about.priests")}
                </TabsTrigger>
                <TabsTrigger value="catholic-action" className="font-poppins">
                  {t("about.catholic_action")}
                </TabsTrigger>
                <TabsTrigger value="choirs" className="font-poppins">
                  {t("about.choirs")}
                </TabsTrigger>
                <TabsTrigger value="community" className="font-poppins">
                  {t("about.community")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-6 text-deep-blue font-merriweather">Our History</h2>
                    <p className="text-stone-700 mb-6">
                      Saint Michel Cathedral's foundation stone was laid in 1163, and the main structure was completed
                      in 1345. For over 850 years, this magnificent Gothic cathedral has stood as a symbol of faith,
                      artistry, and human achievement.
                    </p>
                    <p className="text-stone-700 mb-6">
                      The cathedral has witnessed coronations, revolutions, wars, and periods of peace. It has been
                      damaged and restored multiple times throughout its history, most recently after the devastating
                      fire of 2019, which destroyed the spire and much of the roof.
                    </p>
                    <p className="text-stone-700 mb-6">
                      Today, Saint Michel Cathedral continues to serve as both an active place of worship and one of the
                      world's most visited historic monuments, welcoming millions of visitors each year.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-deep-blue font-merriweather">Architecture</h2>
                    <p className="text-stone-700 mb-6">
                      Saint Michel Cathedral is considered one of the finest examples of French Gothic architecture. Its
                      innovative use of the rib vault and flying buttress, its enormous and colorful rose windows, and
                      the naturalism and abundance of its sculptural decoration set it apart from earlier Romanesque
                      architecture.
                    </p>
                    <p className="text-stone-700 mb-6">
                      The cathedral's dimensions are impressive: 130 meters long, 48 meters wide, with a main vault
                      height of 33 meters. The two towers on the western façade are 69 meters high, and the spire
                      (currently being reconstructed) reached 93 meters.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-deep-blue font-merriweather">Mission & Values</h2>
                    <p className="text-stone-700 mb-6">
                      As both a sacred space and a cultural monument, Saint Michel Cathedral is committed to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-stone-700 space-y-2">
                      <li>Preserving our architectural and artistic heritage for future generations</li>
                      <li>Providing a welcoming space for prayer, reflection, and worship</li>
                      <li>Educating visitors about the cathedral's history, art, and spiritual significance</li>
                      <li>Fostering community through music, liturgy, and cultural events</li>
                      <li>Maintaining the cathedral as a symbol of resilience and hope</li>
                    </ul>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-light-gray p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">Cathedral Facts</h3>
                      <ul className="space-y-3 text-stone-700">
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Founded:</span> 1163
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Completed:</span> 1345
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Architectural Style:</span> French Gothic
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Length:</span> 130 meters
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Width:</span> 48 meters
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Height:</span> 33 meters (nave)
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Tower Height:</span> 69 meters
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2">Stained Glass:</span> Over 1,000 square meters
                        </li>
                      </ul>
                    </div>

                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=400"
                        alt="Cathedral Stained Glass"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=400"
                        alt="Cathedral Architecture Detail"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="priests">
                <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                  {t("about.priests")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Father Thomas Laurent",
                      role: "Cathedral Rector",
                      bio: "Father Thomas has served as the rector of Saint Michel Cathedral for over 15 years. He holds a doctorate in Theology from the Pontifical Gregorian University in Rome.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Father Jean Dupont",
                      role: "Associate Pastor",
                      bio: "Father Jean joined our parish in 2018. He specializes in youth ministry and is beloved for his engaging homilies and approachable nature.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Father Michael Ndayisaba",
                      role: "Associate Pastor",
                      bio: "Originally from Rwanda, Father Michael brings a global perspective to our parish. He is fluent in five languages and leads our international outreach programs.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Father Robert Martin",
                      role: "Retired, In Residence",
                      bio: "Father Robert has served the Church for over 50 years. Though retired from administrative duties, he continues to celebrate Mass and hear confessions.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Deacon Paul Lefèvre",
                      role: "Permanent Deacon",
                      bio: "Deacon Paul assists with liturgies, baptisms, and marriage preparation. He also coordinates our parish's social justice initiatives.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                    {
                      name: "Deacon Antoine Mugabo",
                      role: "Permanent Deacon",
                      bio: "Deacon Antoine serves our parish while also working as a physician. He leads our health ministry and organizes medical missions.",
                      image: "/placeholder.svg?height=400&width=400",
                    },
                  ].map((priest, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="relative h-64">
                        <Image
                          src={priest.image || "/placeholder.svg"}
                          alt={priest.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-deep-blue font-merriweather">{priest.name}</h3>
                        <p className="text-gold font-medium mb-2">{priest.role}</p>
                        <p className="text-stone-600">{priest.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="catholic-action">
                <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                  {t("about.catholic_action")}
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-center mb-8">
                    Catholic Action at Saint Michel Cathedral encompasses various ministries and initiatives that put
                    our faith into practice through service, education, and advocacy.
                  </p>

                  <div className="space-y-8">
                    {[
                      {
                        title: "Social Justice Ministry",
                        description:
                          "Our Social Justice Ministry works to address systemic issues of poverty, inequality, and injustice through education, advocacy, and direct action.",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                      {
                        title: "Food Pantry",
                        description:
                          "The Cathedral Food Pantry serves hundreds of families each month, providing nutritious food to those experiencing food insecurity in our community.",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                      {
                        title: "Refugee Support Program",
                        description:
                          "We partner with local organizations to provide support, resources, and community to refugees and immigrants as they establish new lives.",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                      {
                        title: "Environmental Stewardship",
                        description:
                          "Inspired by Laudato Si', our Environmental Stewardship committee works to care for our common home through education, advocacy, and sustainable practices.",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                    ].map((initiative, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div
                          className={`relative h-64 rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-last" : ""}`}
                        >
                          <Image
                            src={initiative.image || "/placeholder.svg"}
                            alt={initiative.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-deep-blue font-merriweather">
                            {initiative.title}
                          </h3>
                          <p className="text-stone-700">{initiative.description}</p>
                          <Button className="mt-4 bg-gold hover:bg-gold/90 text-deep-blue">Get Involved</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="choirs">
                <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                  {t("about.choirs")}
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-center mb-8">
                    Music has always been an integral part of worship at Saint Michel Cathedral. Our choirs enrich our
                    liturgies and help us raise our voices in praise.
                  </p>

                  <div className="space-y-12">
                    {[
                      {
                        name: "Cathedral Choir",
                        description:
                          "Our principal choir sings at the 10:00 AM Sunday Mass and for major feast days and celebrations. The repertoire includes Gregorian chant, Renaissance polyphony, and contemporary sacred music.",
                        rehearsal: "Thursdays, 7:00-9:00 PM",
                        director: "Dr. Marie Clément",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                      {
                        name: "Schola Cantorum",
                        description:
                          "Specializing in Gregorian chant and early music, the Schola Cantorum sings for the 8:30 AM Sunday Mass and special liturgies throughout the year.",
                        rehearsal: "Tuesdays, 6:30-8:30 PM",
                        director: "Prof. Antoine Dubois",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                      {
                        name: "Children's Choir",
                        description:
                          "Open to children ages 8-14, our Children's Choir sings once a month at the 10:00 AM Sunday Mass and for special celebrations like Christmas and Easter.",
                        rehearsal: "Wednesdays, 4:30-5:30 PM",
                        director: "Ms. Claire Fontaine",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                      {
                        name: "Gospel Choir",
                        description:
                          "Our Gospel Choir brings energy and spirit to the 11:30 AM Sunday Mass, with a repertoire of traditional and contemporary gospel music.",
                        rehearsal: "Mondays, 7:00-9:00 PM",
                        director: "Mr. Joseph Mutara",
                        image: "/placeholder.svg?height=400&width=800",
                      },
                    ].map((choir, index) => (
                      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="relative h-64">
                          <Image
                            src={choir.image || "/placeholder.svg"}
                            alt={choir.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2 text-deep-blue font-merriweather">{choir.name}</h3>
                          <p className="text-stone-700 mb-4">{choir.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-bold text-deep-blue">Rehearsal</p>
                              <p className="text-stone-600">{choir.rehearsal}</p>
                            </div>
                            <div>
                              <p className="font-bold text-deep-blue">Director</p>
                              <p className="text-stone-600">{choir.director}</p>
                            </div>
                          </div>
                          <Button className="mt-6 bg-gold hover:bg-gold/90 text-deep-blue">Join This Choir</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="community">
                <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                  {t("about.community")}
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-center mb-8">
                    Saint Michel Cathedral is more than a building—it's a vibrant community of faith. We come together
                    not only for worship but also for fellowship, learning, and service.
                  </p>

                  <div className="space-y-12">
                    <div className="bg-light-gray rounded-lg p-8">
                      <h3 className="text-2xl font-bold mb-4 text-deep-blue font-merriweather">Parish Groups</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            name: "Young Adults Group",
                            description:
                              "For parishioners ages 18-35, with social events, faith formation, and service opportunities.",
                          },
                          {
                            name: "Seniors Fellowship",
                            description:
                              "Regular gatherings for our senior members, including spiritual reflection, outings, and mutual support.",
                          },
                          {
                            name: "Family Ministry",
                            description:
                              "Supporting families through all stages of life with resources, events, and community.",
                          },
                          {
                            name: "Men's Group",
                            description:
                              "Monthly meetings for prayer, discussion, and fellowship among the men of our parish.",
                          },
                          {
                            name: "Women's Guild",
                            description:
                              "A community of women engaged in spiritual growth, service, and social activities.",
                          },
                          {
                            name: "Prayer Groups",
                            description:
                              "Various prayer groups meeting throughout the week, including Rosary, Divine Mercy, and Lectio Divina.",
                          },
                        ].map((group, index) => (
                          <div key={index} className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-bold text-deep-blue mb-2">{group.name}</h4>
                            <p className="text-stone-600">{group.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-deep-blue font-merriweather">Community Events</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            name: "Annual Parish Festival",
                            date: "First weekend in June",
                            description:
                              "A celebration of our parish community with food, music, games, and activities for all ages.",
                          },
                          {
                            name: "International Dinner",
                            date: "October",
                            description:
                              "A potluck dinner showcasing the diverse cultural backgrounds of our parish members.",
                          },
                          {
                            name: "Advent Market",
                            date: "Early December",
                            description:
                              "Handcrafted items, baked goods, and festive activities to prepare for Christmas.",
                          },
                        ].map((event, index) => (
                          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                              <h4 className="text-xl font-bold mb-1 text-deep-blue font-merriweather">{event.name}</h4>
                              <p className="text-gold font-medium mb-2">{event.date}</p>
                              <p className="text-stone-600">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4 text-deep-blue font-merriweather">Join Our Community</h3>
                      <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                        We welcome all who wish to join our parish community. Whether you're new to the area, returning
                        to the Church, or seeking a spiritual home, there's a place for you at Saint Michel Cathedral.
                      </p>
                      <Button className="bg-gold hover:bg-gold/90 text-deep-blue">Register as a Parishioner</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

