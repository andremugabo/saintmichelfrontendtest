import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Historical Saint Michel Cathedral"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cathedral History</h1>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-stone-800">A Journey Through Time</h2>

            <div className="relative border-l-4 border-blue-800 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-8 md:pl-0">
              {[
                {
                  year: "1163",
                  title: "Foundation Stone Laid",
                  description:
                    "Bishop Maurice de Sully and King Louis VII laid the foundation stone for the cathedral, beginning the centuries-long construction process.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1182",
                  title: "High Altar Consecrated",
                  description:
                    "The high altar was consecrated, marking the completion of the choir and eastern parts of the cathedral.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1220-1240",
                  title: "Rose Windows Installed",
                  description:
                    "The magnificent rose windows were created and installed, becoming some of the most iconic features of the cathedral.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1345",
                  title: "Main Structure Completed",
                  description:
                    "After nearly 200 years of construction, the main structure of the cathedral was finally completed.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1793",
                  title: "French Revolution Damage",
                  description:
                    "During the French Revolution, the cathedral suffered significant damage. Many sculptures were destroyed and treasures were looted.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1844-1864",
                  title: "Major Restoration",
                  description:
                    "Eugène Viollet-le-Duc led a comprehensive restoration of the cathedral, adding the famous spire and many Gothic elements.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1909",
                  title: "Joan of Arc Beatified",
                  description:
                    "Joan of Arc was beatified in Saint Michel Cathedral, an important moment in French religious history.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "1944",
                  title: "Liberation Celebration",
                  description:
                    "A special Te Deum Mass was held to celebrate the liberation of Paris during World War II.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "2019",
                  title: "The Great Fire",
                  description:
                    "A devastating fire destroyed the spire and much of the roof. The world watched as firefighters battled to save the historic structure.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  year: "2024",
                  title: "Restoration Continues",
                  description:
                    "The ambitious restoration project continues, with plans to reopen the cathedral fully to the public in the coming years.",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:ml-0 md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:mr-0 md:pl-8"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-0 -left-12 md:left-auto md:right-auto md:-ml-2 md:mr-0 w-4 h-4 rounded-full bg-blue-800 border-4 border-white shadow"></div>

                  {/* Year marker */}
                  <div
                    className={`absolute top-0 ${index % 2 === 0 ? "-left-24 md:left-auto md:right-full md:mr-4" : "-left-24 md:left-full md:ml-4"}`}
                  >
                    <span className="text-xl font-bold text-blue-800">{event.year}</span>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="relative h-48 mb-4 rounded overflow-hidden">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-stone-800">{event.title}</h3>
                    <p className="text-stone-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild>
                <Link href="/visit">Plan Your Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

