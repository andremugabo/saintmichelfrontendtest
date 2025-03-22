"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Contact Saint Michel Cathedral"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-merriweather">{t("contact.title")}</h1>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-deep-blue font-merriweather">{t("contact.title")}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-deep-blue">{t("contact.address")}</h3>
                          <p className="text-sm mb-1">1 Cathedral Square</p>
                          <p className="text-sm">City Center</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-deep-blue">{t("contact.phone")}</h3>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Main Office:</span> +1-234-567-8910
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Emergency:</span> +1-234-567-8911
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-deep-blue">{t("contact.email")}</h3>
                          <p className="text-sm mb-1">
                            <span className="font-medium">General:</span> info@saintmichel.org
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Pastor:</span> pastor@saintmichel.org
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 text-deep-blue mt-0.5" />
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-deep-blue">{t("contact.office_hours")}</h3>
                          <p className="text-sm mb-1">
                            <span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Saturday:</span> 9:00 AM - 12:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-light-gray p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4 text-deep-blue font-merriweather">Staff Directory</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-deep-blue">Fr. Thomas Laurent</p>
                      <p className="text-sm text-stone-600">Cathedral Rector</p>
                      <p className="text-sm">pastor@saintmichel.org</p>
                    </div>
                    <div>
                      <p className="font-bold text-deep-blue">Ms. Marie Clément</p>
                      <p className="text-sm text-stone-600">Music Director</p>
                      <p className="text-sm">music@saintmichel.org</p>
                    </div>
                    <div>
                      <p className="font-bold text-deep-blue">Mr. Joseph Mutara</p>
                      <p className="text-sm text-stone-600">Religious Education Director</p>
                      <p className="text-sm">education@saintmichel.org</p>
                    </div>
                    <div>
                      <p className="font-bold text-deep-blue">Mrs. Claire Fontaine</p>
                      <p className="text-sm text-stone-600">Parish Secretary</p>
                      <p className="text-sm">info@saintmichel.org</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-80">
                  <div className="bg-stone-200 h-full w-full flex items-center justify-center">
                    <p className="text-stone-600">{t("contact.location")}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-deep-blue font-merriweather">Send Us a Message</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.form_name")}</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.form_email")}</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.form_subject")}</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.form_message")}</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="bg-gold hover:bg-gold/90 text-deep-blue w-full md:w-auto">
                    {t("contact.form_submit")}
                  </Button>
                </form>

                <div className="mt-12 bg-deep-blue text-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 font-merriweather">Request a Meeting</h3>
                  <p className="mb-6">
                    If you would like to schedule a meeting with one of our priests or staff members, please call the
                    parish office or use the form above to request an appointment.
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>+1-234-567-8910</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

