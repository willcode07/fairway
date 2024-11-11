'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { title: "Our Company", content: "Welcome to Our Innovative Solution" },
    { title: "The Problem", content: "Describe the problem you're solving" },
    { title: "Our Solution", content: "Explain your unique solution" },
    { title: "Market Opportunity", content: "Highlight the market size and potential" },
    { title: "Product/Service", content: "Showcase your product or service" },
    { title: "Business Model", content: "Explain how you make money" },
    { title: "Traction", content: "Share your progress and milestones" },
    { title: "Competition", content: "Differentiate from competitors" },
    { title: "Team", content: "Introduce your amazing team" },
    { title: "Financials", content: "Present key financial projections" },
    { title: "Funding Ask", content: "State your funding requirements" },
    { title: "Contact Us", content: "Get in touch to learn more" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{slides[currentSlide].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{slides[currentSlide].content}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button onClick={prevSlide} variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <div className="text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <Button onClick={nextSlide}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
