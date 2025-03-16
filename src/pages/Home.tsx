"use client"

import type React from "react"
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  BenefitsSection,
  CTASection,
} from "@/components/home"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Benefits Section */}
      <BenefitsSection />

   

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export default Home

