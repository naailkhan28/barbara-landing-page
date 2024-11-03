'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Beaker, TestTube, PoundSterling, Dna, Calendar1, Microscope, PieChart } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <TestTube className="h-6 w-6 mr-2" />
          <span className="font-bold">Barbara</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Meet Barbara: Your AI Lab Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Barbara is an advanced AI agent who helps you design, plan, and run experiments. She'll take care of all the boring stuff, and let you focus on making new discoveries.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="http://localhost:8501">
                <Button>Get Started</Button>
                </Link>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TestTube className="w-6 h-6 mr-2" />
                    Experiment Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                Easily plan complex experiments and manage protocols.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Beaker className="w-6 h-6 mr-2" />
                    Inventory Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Keep track of reagents, samples, and equipment.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PoundSterling className="w-6 h-6 mr-2" />
                    Rapid Procurement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Quickly find the cheapest prices for lab reagents and consumables.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Dna className="w-6 h-6 mr-2" />
                    DNA Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Automatically fetch, design, and order synthetic DNA sequences for your experiments.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-6 h-6 mr-2" />
                    Data Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Generate pretty data visualizations for your experiments and DNA designs.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar1 className="w-6 h-6 mr-2" />
                    Task Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Seamlessly integrate with your calendar and to-do lists to stay organized.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Lab?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Experience the power of AI in your research and let Barbara streamline your biology experiments.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">Schedule a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Barbara AI Lab Assistant. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
