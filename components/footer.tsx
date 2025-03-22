"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "./language-provider"
import LanguageSwitcher from "./language-switcher"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-merriweather">Saint Michel Cathedral</h3>
            <p className="text-gray-300 mb-4">
              1 Cathedral Square
              <br />
              City Center
              <br />
              info@saintmichel.org
              <br />
              +1-234-567-8910
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-merriweather">{t("nav.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  {t("services.mass_schedule")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  {t("services.confessions")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  {t("services.sacraments")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  {t("services.participation")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  {t("services.preparation")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-merriweather">{t("nav.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  {t("about.about")}
                </Link>
              </li>
              <li>
                <Link href="/about/priests" className="text-gray-300 hover:text-white">
                  {t("about.priests")}
                </Link>
              </li>
              <li>
                <Link href="/about/catholic-action" className="text-gray-300 hover:text-white">
                  {t("about.catholic_action")}
                </Link>
              </li>
              <li>
                <Link href="/about/choirs" className="text-gray-300 hover:text-white">
                  {t("about.choirs")}
                </Link>
              </li>
              <li>
                <Link href="/about/community" className="text-gray-300 hover:text-white">
                  {t("about.community")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-merriweather">{t("contact.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  {t("contact.address")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  {t("contact.phone")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  {t("contact.email")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  {t("contact.office_hours")}
                </Link>
              </li>
              <li>
                <div className="mt-4">
                  <LanguageSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Saint Michel Cathedral. {t("footer.rights")}
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-white">
              {t("footer.terms")}
            </a>
            <a href="#" className="hover:text-white">
              {t("footer.contact")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

