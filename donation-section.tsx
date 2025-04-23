"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Gift, CreditCard, Landmark, Wallet, Check } from "lucide-react"

export function DonationSection() {
  const [donationAmount, setDonationAmount] = useState("")
  const [selectedTemple, setSelectedTemple] = useState("all")

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value)
  }

  return (
    <div className="py-10 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">Support Sacred Traditions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donations help maintain temples, support priests, and preserve ancient traditions for future
            generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-orange-800">Why Donate?</h3>

            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Landmark className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Temple Maintenance</h4>
                  <p className="text-gray-600">
                    Help maintain ancient temple structures and preserve their architectural heritage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Gift className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Support Priests & Services</h4>
                  <p className="text-gray-600">Support priests and staff who maintain daily rituals and ceremonies.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Community Programs</h4>
                  <p className="text-gray-600">
                    Fund educational programs, festivals, and community services provided by temples.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-orange-100">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardTitle>Make a Donation</CardTitle>
              <CardDescription className="text-orange-50">Support temples across India</CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <Tabs defaultValue="one-time" className="mb-6">
                <TabsList className="bg-orange-50 w-full">
                  <TabsTrigger
                    value="one-time"
                    className="flex-1 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    One-time
                  </TabsTrigger>
                  <TabsTrigger
                    value="monthly"
                    className="flex-1 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                  >
                    Monthly
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="one-time" className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="temple-select">Select Temple</Label>
                    <select
                      id="temple-select"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                      value={selectedTemple}
                      onChange={(e) => setSelectedTemple(e.target.value)}
                    >
                      <option value="all">All Temples (General Fund)</option>
                      <option value="kashi">Kashi Vishwanath Temple</option>
                      <option value="tirupati">Tirupati Balaji Temple</option>
                      <option value="golden">Golden Temple</option>
                      <option value="meenakshi">Meenakshi Amman Temple</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="donation-amount">Donation Amount (₹)</Label>
                    <div className="grid grid-cols-4 gap-2 my-2">
                      {[101, 501, 1001, 2100].map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={donationAmount === amount.toString() ? "default" : "outline"}
                          className={
                            donationAmount === amount.toString()
                              ? "bg-orange-600 hover:bg-orange-700"
                              : "border-orange-200 text-orange-600 hover:bg-orange-50"
                          }
                          onClick={() => setDonationAmount(amount.toString())}
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <Input
                      id="donation-amount"
                      placeholder="Other amount"
                      value={donationAmount}
                      onChange={handleDonationChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Payment Method</Label>
                    <RadioGroup defaultValue="card" className="mt-2">
                      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-orange-50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center cursor-pointer">
                          <CreditCard className="h-4 w-4 mr-2 text-orange-600" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-orange-50 mt-2">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center cursor-pointer">
                          <Wallet className="h-4 w-4 mr-2 text-orange-600" />
                          UPI/Mobile Wallet
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>

                <TabsContent value="monthly" className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="temple-select-monthly">Select Temple</Label>
                    <select
                      id="temple-select-monthly"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                    >
                      <option value="all">All Temples (General Fund)</option>
                      <option value="kashi">Kashi Vishwanath Temple</option>
                      <option value="tirupati">Tirupati Balaji Temple</option>
                      <option value="golden">Golden Temple</option>
                      <option value="meenakshi">Meenakshi Amman Temple</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="monthly-donation-amount">Monthly Amount (₹)</Label>
                    <div className="grid grid-cols-4 gap-2 my-2">
                      {[101, 501, 1001, 2100].map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          className="border-orange-200 text-orange-600 hover:bg-orange-50"
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <Input id="monthly-donation-amount" placeholder="Other amount" className="mt-2" />
                  </div>

                  <div>
                    <Label>Payment Method</Label>
                    <RadioGroup defaultValue="card" className="mt-2">
                      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-orange-50">
                        <RadioGroupItem value="card" id="card-monthly" />
                        <Label htmlFor="card-monthly" className="flex items-center cursor-pointer">
                          <CreditCard className="h-4 w-4 mr-2 text-orange-600" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-orange-50 mt-2">
                        <RadioGroupItem value="upi" id="upi-monthly" />
                        <Label htmlFor="upi-monthly" className="flex items-center cursor-pointer">
                          <Wallet className="h-4 w-4 mr-2 text-orange-600" />
                          UPI/Mobile Wallet
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="bg-orange-50">
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <Gift className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
