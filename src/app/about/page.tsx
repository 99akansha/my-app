import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LandingHeader } from "@/components/landing/header";
import { Sprout, Leaf, Target, Lightbulb, FlaskConical, Bug, Landmark, Droplets, Phone, Mail, ArrowRight } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  { name: 'AI Diagnostics', desc: 'Identify crop diseases and pests instantly by uploading a plant photo.', icon: Sprout, href: '/dashboard/diagnostics' },
  { name: 'Soil Analysis', desc: 'Get detailed soil health reports and crop recommendations from a single image.', icon: FlaskConical, href: '/dashboard/soil-analysis' },
  { name: 'Pest Prediction', desc: 'Forecast pest and disease risks in advance based on weather conditions.', icon: Bug, href: '/dashboard/pest-prediction' },
  { name: 'Crop Advisor', desc: 'Receive AI-powered crop recommendations tailored to your land and budget.', icon: Lightbulb, href: '/dashboard/crop-advisor' },
  { name: 'Market Prices', desc: 'Track real-time mandi prices for your crops to get the best deal.', icon: Landmark, href: '/dashboard/market' },
  { name: 'Smart Irrigation', desc: 'Generate a 7-day weather-based irrigation schedule to save water and boost yield.', icon: Droplets, href: '/dashboard/irrigation-schedule' },
];

export default function AboutPage() {
  return (
    <div className="bg-orange-50 min-h-screen">
      <LandingHeader />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-600 via-amber-500 to-orange-400 py-24 px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Empowering Farmers,<br />
              <span className="text-yellow-200">Our Responsibility</span>
            </h1>
            <p className="mt-6 text-xl text-orange-100 max-w-2xl mx-auto">
              KisanSathi is an AI-powered platform that provides Indian farmers with smart farming tools, real-time data, and expert guidance — completely free.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-8" asChild>
                <Link href="/login">Try the Platform <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
            </div>
            <Card className="border-orange-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-orange-600 text-xl">AI-Powered Crop Health Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-600 leading-relaxed">
                <p>Agriculture faces growing threats from soil degradation, unpredictable weather, and pest outbreaks, leading to reduced yields and significant economic losses for farmers.</p>
                <p>Traditional monitoring methods are often delayed, labor-intensive, and lack precision. KisanSathi solves this by integrating AI-driven analysis with remote sensing and sensor data to provide timely, field-level insights on crop health, soil conditions, and pest risks.</p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: 'Soil Degradation', emoji: '🌱' },
                    { label: 'Pest Outbreaks', emoji: '🐛' },
                    { label: 'Weather Risks', emoji: '⛈️' },
                  ].map(item => (
                    <div key={item.label} className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100">
                      <div className="text-3xl mb-2">{item.emoji}</div>
                      <p className="text-sm font-semibold text-gray-700">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission */}
        <div className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4">Our Mission</span>
              <h2 className="text-3xl font-extrabold text-gray-900">What We Want to Achieve</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Right Information', desc: 'Every farmer deserves accurate farming information delivered at the right time.' },
                { icon: Lightbulb, title: 'Smart Farming', desc: 'Making farming easier and more profitable using AI and modern technology.' },
                { icon: Leaf, title: 'Sustainable Future', desc: 'Achieving better yield while maintaining a healthy balance with the environment.' },
              ].map(item => (
                <div key={item.title} className="text-center bg-white rounded-2xl p-8 shadow-sm border border-orange-100 hover:shadow-md transition">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-md mb-4">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 px-4 bg-white">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4">Features</span>
              <h2 className="text-3xl font-extrabold text-gray-900">What's Inside the Platform</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <Link key={f.name} href={f.href} className="group bg-orange-50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-400 rounded-2xl p-6 border border-orange-100 hover:border-transparent transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-sm">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-white">{f.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-orange-100">{f.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
          <div className="mx-auto max-w-lg text-center">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wide mb-4">Contact Us</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Get In Touch</h2>
            <Card className="border-orange-200 shadow-md">
              <CardContent className="pt-8 pb-8 space-y-4">
                <div className="flex items-center gap-4 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                    <p className="font-bold text-gray-800">+91 9891559739</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="font-bold text-gray-800">akanshajha831@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-md">
                  <Leaf className="h-5 w-5 text-white absolute rotate-12" />
                  <Sprout className="h-4 w-4 text-white/80 absolute -rotate-12 translate-x-1 translate-y-1" />
                </div>
                <span className="text-2xl font-extrabold text-white">Kisan<span className="text-orange-400">Sathi</span></span>
              </Link>
              <p className="mt-4 text-gray-400">Empowering farmers with technology to grow their agricultural business.</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-orange-400"><Twitter /></a>
                <a href="#" className="text-gray-400 hover:text-orange-400"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-orange-400"><Linkedin /></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Solutions</h3>
              <ul className="mt-4 space-y-2">
                {features.map(f => (
                  <li key={f.name}><a href={f.href} className="text-gray-400 hover:text-white">{f.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} KisanSathi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
