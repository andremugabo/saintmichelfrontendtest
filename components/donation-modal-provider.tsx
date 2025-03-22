"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import DonationForm from "./donation-form"
import { useLanguage } from "./language-provider"

interface DonationModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined)

export function useDonationModal() {
  const context = useContext(DonationModalContext)
  if (context === undefined) {
    throw new Error("useDonationModal must be used within a DonationModalProvider")
  }
  return context
}

export default function DonationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <DonationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-merriweather">{t("donation.support")}</DialogTitle>
            <DialogDescription>{t("donation.description")}</DialogDescription>
          </DialogHeader>
          <DonationForm onClose={closeModal} />
        </DialogContent>
      </Dialog>
    </DonationModalContext.Provider>
  )
}

