"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import DonationButton from "./donation-button"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "./language-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { 
      name: t("nav.about"), 
      href: "/about",
      dropdown: [
        { name: t("about.about"), href: "/about" },
        { name: t("about.priests"), href: "/about/priests" },
        { name: t("about.catholic_action"), href: "/about/catholic-action" },
        { name: t("about.choirs"), href: "/about/choirs" },
        { name: t("about.community"), href: "/about/community" },
      ]
    },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.announcements"), href: "/announcements" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-deep-blue font-merriweather">
              Saint Michel Cathedral
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 font-medium">
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link href={dropdownItem.href}>{dropdownItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 hover:text-deep-blue font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
            <LanguageSwitcher />
            <DonationButton variant="secondary" className="bg-gold text-deep-blue hover:bg-gold/90" />
          </nav>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b border-gray-200 py-4">
                    <div className="text-lg font-semibold text-deep-blue">{t("nav.home")}</div>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-5 w-  size=\"icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4 py-6">
                    {navigation.map((item) => (
                      item.dropdown ? (
                        <div key={item.name} className="space-y-2">
                          <div className="font-medium text-deep-blue px-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="text-stone-600 hover:text-deep-blue block px-2 py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-stone-600 hover:text-deep-blue font-medium px-2 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </nav>
                  <div className="mt-auto pb-6">
                    <DonationButton className="w-full bg-gold text-deep-blue hover:bg-gold/90" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

