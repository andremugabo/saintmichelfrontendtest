import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Open_Sans, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import DonationModalProvider from "@/components/donation-modal-provider"
import { LanguageProvider } from "@/components/language-provider"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Saint Michel Cathedral",
  description: "Experience centuries of history, art, and spirituality at Saint Michel Cathedral",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${openSans.variable} ${poppins.variable} font-opensans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <DonationModalProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                {children}
                <Footer />
              </div>
            </DonationModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'