"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useDonationModal } from "./donation-modal-provider"
import { useLanguage } from "./language-provider"

interface DonationButtonProps extends ButtonProps {}

export default function DonationButton({ variant = "default", size, className, ...props }: DonationButtonProps) {
  const { openModal } = useDonationModal()
  const { t } = useLanguage()

  return (
    <Button variant={variant} size={size} className={className} onClick={openModal} {...props}>
      {t("donation.support")}
    </Button>
  )
}

