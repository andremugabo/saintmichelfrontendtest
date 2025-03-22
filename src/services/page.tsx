"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Calendar, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Saint Michel Cathedral Services"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-merriweather">{t("services.title")}</h1>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="mass" className="w-full">
              <TabsList className="w-full flex justify-center mb-8 bg-light-gray p-1 rounded-lg">
                <TabsTrigger value="mass" className="font-poppins">
                  {t("services.mass_schedule")}
                </TabsTrigger>
                <TabsTrigger value="sacraments" className="font-poppins">
                  {t("services.sacraments")}
                </TabsTrigger>
                <TabsTrigger value="participation" className="font-poppins">
                  {t("services.participation")}
                </TabsTrigger>
                <TabsTrigger value="preparation" className="font-poppins">
                  {t("services.preparation")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mass">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                    {t("services.mass_schedule")}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="overflow-hidden border-l-4 border-l-deep-blue">
                      <CardContent className="p-0">
                        <div className="bg-deep-blue text-white p-4">
                          <h3 className="text-xl font-bold font-merriweather">{t("services.weekday")}</h3>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                            <div>
                              <p className="text-sm mb-1">
                                <span className="font-medium">Monday - Friday:</span> 7:00 AM, 12:10 PM
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">Saturday:</span> 9:00 AM
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Users className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                            <div>
                              <p className="text-sm">
                                The 12:10 PM weekday Mass is livestreamed on our website and YouTube channel.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-l-4 border-l-gold">
                      <CardContent className="p-0">
                        <div className="bg-gold text-deep-blue p-4">
                          <h3 className="text-xl font-bold font-merriweather">{t("services.saturday")}</h3>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                            <div>
                              <p className="text-sm mb-1">
                                <span className="font-medium">English:</span> 5:00 PM
                              </p>
                              <p className="text-sm">
                                <span className="font-medium">French:</span> 7:00 PM
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Users className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                            <div>
                              <p className="text-sm">
                                Confessions are available from 3:30 PM - 4:30 PM before the Saturday Vigil Mass.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="overflow-hidden border-l-4 border-l-deep-blue mb-12">
                    <CardContent className="p-0">
                      <div className="bg-deep-blue text-white p-4">
                        <h3 className="text-xl font-bold font-merriweather">{t("services.sunday")}</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <Clock className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                              <div>
                                <p className="text-sm mb-1">
                                  <span className="font-medium">8:00 AM:</span> Traditional Latin Mass
                                </p>
                                <p className="text-sm mb-1">
                                  <span className="font-medium">10:00 AM:</span> English Mass with Cathedral Choir
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">11:30 AM:</span> English Mass with Gospel Choir
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <Clock className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                              <div>
                                <p className="text-sm mb-1">
                                  <span className="font-medium">1:00 PM:</span> French Mass
                                </p>
                                <p className="text-sm mb-1">
                                  <span className="font-medium">3:00 PM:</span> Kinyarwanda Mass (First Sunday)
                                </p>
                                <p className="text-sm">
                                  <span className="font-medium">6:30 PM:</span> Youth Mass
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-l-4 border-l-gold">
                    <CardContent className="p-0">
                      <div className="bg-gold text-deep-blue p-4">
                        <h3 className="text-xl font-bold font-merriweather">{t("services.holy_days")}</h3>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                          <div>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Vigil:</span> 5:30 PM
                            </p>
                            <p className="text-sm mb-1">
                              <span className="font-medium">Holy Day:</span> 7:00 AM, 12:10 PM, 7:00 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                          <div>
                            <p className="text-sm">
                              Please check the bulletin or website for the schedule of specific Holy Days, as times may
                              vary.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sacraments">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                    {t("services.sacraments")}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Baptism"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-deep-blue font-merriweather">
                          {t("services.baptism")}
                        </h3>
                        <p className="text-stone-700 mb-4">
                          Baptisms are celebrated on Sundays after the 11:30 AM Mass or by appointment. Parents should
                          contact the parish office at least two months before the desired date.
                        </p>
                        <p className="text-stone-700 mb-4">
                          Preparation classes for parents and godparents are required and are held monthly.
                        </p>
                        <Button className="bg-deep-blue hover:bg-deep-blue/90">Schedule a Baptism</Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Confession"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-deep-blue font-merriweather">
                          {t("services.confessions")}
                        </h3>
                        <p className="text-stone-700 mb-4">The Sacrament of Reconciliation is available:</p>
                        <ul className="list-disc pl-5 mb-4 text-stone-700 space-y-1">
                          <li>Monday - Friday: 11:30 AM - 12:00 PM</li>
                          <li>Saturday: 3:30 PM - 4:30 PM</li>
                          <li>Or by appointment</li>
                        </ul>
                        <p className="text-stone-700">
                          Additional confession times are scheduled during Advent and Lent.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="First Communion"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-deep-blue font-merriweather">
                          {t("services.communion")}
                        </h3>
                        <p className="text-stone-700 mb-4">
                          Children typically receive their First Holy Communion in 2nd grade after completing a two-year
                          preparation program through our Religious Education program or Catholic school.
                        </p>
                        <p className="text-stone-700 mb-4">
                          Adults seeking First Communion should inquire about our RCIA (Rite of Christian Initiation for
                          Adults) program.
                        </p>
                        <Button className="bg-deep-blue hover:bg-deep-blue/90">Learn More</Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Confirmation"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-deep-blue font-merriweather">
                          {t("services.confirmation")}
                        </h3>
                        <p className="text-stone-700 mb-4">
                          The Sacrament of Confirmation is typically celebrated in 8th grade after a two-year
                          preparation program. Confirmation is celebrated annually with the Bishop.
                        </p>
                        <p className="text-stone-700 mb-4">
                          Adult Confirmation preparation is available through our RCIA program.
                        </p>
                        <Button className="bg-deep-blue hover:bg-deep-blue/90">Learn More</Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden md:col-span-2">
                      <div className="relative h-48">
                        <Image
                          src="/placeholder.svg?height=400&width=1200"
                          alt="Marriage"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-deep-blue font-merriweather">
                          {t("services.marriage")}
                        </h3>
                        <p className="text-stone-700 mb-4">
                          Couples should contact the parish at least six months before their desired wedding date.
                          Marriage preparation includes meetings with a priest, pre-marriage counseling, and a
                          pre-marriage retreat.
                        </p>
                        <p className="text-stone-700 mb-4">
                          Saint Michel Cathedral is a popular wedding venue. Due to high demand, we recommend contacting
                          us as early as possible to secure your preferred date.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="bg-deep-blue hover:bg-deep-blue/90">Wedding Information</Button>
                          <Button
                            variant="outline"
                            className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white"
                          >
                            Check Available Dates
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="participation">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                    {t("services.participation")}
                  </h2>

                  <p className="text-lg text-center mb-8">
                    There are many ways to participate in the liturgical life of Saint Michel Cathedral. We welcome your
                    involvement in these ministries.
                  </p>

                  <Accordion type="single" collapsible className="w-full mb-8">
                    {[
                      {
                        title: "Altar Servers",
                        content:
                          "Open to children (after First Communion), teens, and adults who assist the priest during Mass and other liturgical celebrations. Training is provided.",
                      },
                      {
                        title: "Extraordinary Ministers of Holy Communion",
                        content:
                          "Assist in distributing the Eucharist during Mass and may also bring Communion to the sick and homebound. Training and commissioning by the Bishop are required.",
                      },
                      {
                        title: "Lectors",
                        content:
                          "Proclaim the Word of God during liturgical celebrations. Training in public speaking and biblical pronunciation is provided.",
                      },
                      {
                        title: "Music Ministry",
                        content:
                          "Join one of our choirs or serve as a cantor or instrumentalist. See the 'Our Choirs' section for more information.",
                      },
                      {
                        title: "Ushers & Greeters",
                        content:
                          "Welcome people to Mass, assist with seating, take up the collection, and distribute bulletins. This is a wonderful ministry for families to do together.",
                      },
                      {
                        title: "Sacristans",
                        content:
                          "Prepare the altar and sanctuary for Mass and other liturgical celebrations. This behind-the-scenes ministry is essential to our worship.",
                      },
                      {
                        title: "Art & Environment",
                        content:
                          "Help decorate the cathedral for different liturgical seasons and special celebrations. Creative talents are welcome!",
                      },
                    ].map((ministry, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-deep-blue font-medium">{ministry.title}</AccordionTrigger>
                        <AccordionContent className="text-stone-700">
                          {ministry.content}
                          <Button className="mt-4 bg-gold hover:bg-gold/90 text-deep-blue">Volunteer</Button>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="bg-light-gray p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">Become Involved</h3>
                    <p className="text-stone-700 mb-6">
                      If you're interested in serving in any of these ministries, please fill out our Ministry Interest
                      Form or contact our Liturgy Coordinator at liturgy@saintmichel.org or (123) 456-7890.
                    </p>
                    <Button className="bg-deep-blue hover:bg-deep-blue/90">Ministry Interest Form</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preparation">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-deep-blue text-center font-merriweather">
                    {t("services.preparation")}
                  </h2>

                  <p className="text-lg text-center mb-8">
                    Preparing to receive the sacraments is an important journey of faith. Saint Michel Cathedral offers
                    comprehensive preparation programs for all sacraments.
                  </p>

                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="sticky top-24">
                          <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">
                            {t("services.baptism")}
                          </h3>
                          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=400"
                              alt="Baptism"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button className="w-full bg-gold hover:bg-gold/90 text-deep-blue">Register</Button>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <h4 className="font-bold text-deep-blue">For Infants and Children under 7</h4>
                        <p className="text-stone-700">
                          Parents should contact the parish office at least two months before the desired baptism date.
                          Preparation includes:
                        </p>
                        <ul className="list-disc pl-5 text-stone-700 space-y-1">
                          <li>Initial meeting with a priest or deacon</li>
                          <li>Baptism preparation class (offered monthly)</li>
                          <li>Selection of godparents who meet Church requirements</li>
                          <li>Completion of necessary paperwork</li>
                        </ul>

                        <h4 className="font-bold text-deep-blue mt-6">For Children 7-17</h4>
                        <p className="text-stone-700">
                          Children aged 7 and older participate in our Religious Education program to prepare for
                          Baptism along with First Communion and Confirmation.
                        </p>

                        <h4 className="font-bold text-deep-blue mt-6">For Adults</h4>
                        <p className="text-stone-700">
                          Adults seeking Baptism participate in the Rite of Christian Initiation for Adults (RCIA), a
                          process that typically begins in September and culminates at the Easter Vigil.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="sticky top-24">
                          <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">
                            {t("services.communion")}
                          </h3>
                          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=400"
                              alt="First Communion"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button className="w-full bg-gold hover:bg-gold/90 text-deep-blue">Register</Button>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <h4 className="font-bold text-deep-blue">For Children</h4>
                        <p className="text-stone-700">
                          Children typically receive First Communion in 2nd grade after completing a two-year
                          preparation program. The preparation includes:
                        </p>
                        <ul className="list-disc pl-5 text-stone-700 space-y-1">
                          <li>Weekly religious education classes or Catholic school religion classes</li>
                          <li>Regular Mass attendance</li>
                          <li>
                            First Reconciliation preparation and reception (typically a few months before First
                            Communion)
                          </li>
                          <li>First Communion retreat</li>
                          <li>Parent meetings and family activities</li>
                        </ul>

                        <h4 className="font-bold text-deep-blue mt-6">For Adults</h4>
                        <p className="text-stone-700">
                          Adults who have been baptized but have not received First Communion participate in our RCIA
                          program, which provides comprehensive sacramental preparation.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="sticky top-24">
                          <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">
                            {t("services.confirmation")}
                          </h3>
                          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=400"
                              alt="Confirmation"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button className="w-full bg-gold hover:bg-gold/90 text-deep-blue">Register</Button>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <h4 className="font-bold text-deep-blue">For Youth</h4>
                        <p className="text-stone-700">
                          Confirmation preparation for youth typically begins in 7th grade and is a two-year program.
                          The preparation includes:
                        </p>
                        <ul className="list-disc pl-5 text-stone-700 space-y-1">
                          <li>Weekly religious education classes or Catholic school religion classes</li>
                          <li>Regular Mass attendance</li>
                          <li>Service projects and community involvement</li>
                          <li>Confirmation retreat</li>
                          <li>Selection of a sponsor and saint name</li>
                          <li>Interview with a priest or deacon</li>
                        </ul>

                        <h4 className="font-bold text-deep-blue mt-6">For Adults</h4>
                        <p className="text-stone-700">
                          Adults seeking Confirmation participate in our RCIA program or a specialized Adult
                          Confirmation preparation program, depending on their sacramental background.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="sticky top-24">
                          <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">
                            {t("services.marriage")}
                          </h3>
                          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=400"
                              alt="Marriage"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <Button className="w-full bg-gold hover:bg-gold/90 text-deep-blue">Begin Process</Button>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-stone-700">
                          Marriage preparation at Saint Michel Cathedral is a comprehensive process designed to help
                          couples build a strong foundation for a lifelong commitment. The preparation includes:
                        </p>
                        <ul className="list-disc pl-5 text-stone-700 space-y-1">
                          <li>
                            Initial meeting with a priest or deacon (at least 6 months before desired wedding date)
                          </li>
                          <li>Completion of a pre-marriage inventory (FOCCUS or similar)</li>
                          <li>Follow-up sessions to discuss inventory results</li>
                          <li>Pre-Cana weekend retreat or equivalent marriage preparation program</li>
                          <li>Natural Family Planning introduction course</li>
                          <li>Planning of the wedding liturgy</li>
                          <li>Completion of necessary paperwork and documentation</li>
                        </ul>

                        <p className="text-stone-700 mt-4">
                          Special circumstances, such as interfaith marriages, previous marriages requiring annulments,
                          or convalidation of civil marriages, may require additional preparation and documentation.
                        </p>
                      </div>
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

