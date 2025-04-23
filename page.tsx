import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FilterBar } from "@/components/filter-bar"
import { TempleGrid } from "@/components/temple-grid"
import { TempleEvents } from "@/components/temple-events"
import { DonationSection } from "@/components/donation-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <FilterBar />
          <TempleGrid />
          <TempleEvents />
        </div>
        <DonationSection />
      </main>
      <Footer />
    </div>
  )
}
