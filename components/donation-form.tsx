"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Check } from "lucide-react"

interface DonationFormProps {
  onClose: () => void
}

export default function DonationForm({ onClose }: DonationFormProps) {
  const [donationAmount, setDonationAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [donationFrequency, setDonationFrequency] = useState<string>("one-time")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    // For this example, we'll just show a success message
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <Check className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You for Your Support!</h3>
        <p className="text-center text-stone-600 mb-6">
          Your donation of ${customAmount || donationAmount} will help preserve Saint Michel Cathedral for generations
          to come.
        </p>
        <p className="text-center text-stone-600 mb-6">A receipt has been sent to your email address.</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="donation" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="donation">Donation</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="donation" className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Donation Frequency</Label>
            <RadioGroup
              defaultValue="one-time"
              className="flex space-x-4"
              value={donationFrequency}
              onValueChange={setDonationFrequency}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="annually" id="annually" />
                <Label htmlFor="annually">Annually</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Donation Amount</Label>
            <RadioGroup
              value={donationAmount}
              onValueChange={(value) => {
                setDonationAmount(value)
                if (value !== "custom") {
                  setCustomAmount("")
                }
              }}
              className="grid grid-cols-3 gap-4"
            >
              {["20", "50", "100", "200", "500", "custom"].map((amount) => (
                <div key={amount} className="relative">
                  <RadioGroupItem value={amount} id={`amount-${amount}`} className="sr-only" />
                  <Label
                    htmlFor={`amount-${amount}`}
                    className={`flex h-14 items-center justify-center rounded-md border border-stone-200 bg-white p-2 text-center font-medium ${
                      donationAmount === amount
                        ? "border-2 border-blue-900 bg-blue-50"
                        : "hover:bg-stone-100 hover:text-stone-900"
                    }`}
                  >
                    {amount === "custom" ? "Custom" : `$${amount}`}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {donationAmount === "custom" && (
            <div className="space-y-2">
              <Label htmlFor="custom-amount">Custom Amount ($)</Label>
              <Input
                id="custom-amount"
                type="number"
                min="1"
                step="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                required={donationAmount === "custom"}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="donation-note">Add a Note (Optional)</Label>
            <Textarea
              id="donation-note"
              placeholder="Share why you're supporting the cathedral..."
              className="resize-none"
            />
          </div>

          <Button
            type="button"
            className="w-full"
            onClick={() => {
              const tabsList = document.querySelector('[role="tablist"]') as HTMLElement
              const paymentTab = tabsList?.querySelector('[value="payment"]') as HTMLElement
              paymentTab?.click()
            }}
          >
            Continue to Payment
          </Button>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 py-4">
          <div className="rounded-md border border-stone-200 p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Donation Summary</span>
              <span className="font-bold">${customAmount || donationAmount}</span>
            </div>
            <div className="text-sm text-stone-600">
              {donationFrequency === "one-time"
                ? "One-time donation"
                : donationFrequency === "monthly"
                  ? "Monthly recurring donation"
                  : "Annual recurring donation"}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardholder">Cardholder Name</Label>
            <Input id="cardholder" placeholder="Name on card" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <div className="relative">
              <Input id="card-number" placeholder="1234 5678 9012 3456" required />
              <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email for Receipt</Label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>

          <Button type="submit" className="w-full">
            Complete Donation
          </Button>
        </TabsContent>
      </Tabs>
    </form>
  )
}

