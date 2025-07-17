import type React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, ShieldCheck, Wrench, Users } from "lucide-react";
import { Button } from "../components/ui/button";

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceLayout({
  children,
  title,
  description,
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-red-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:text-blue-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Mehran Garages</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+44 7846 953888</span>
            </div>
          </div>
        </div>
      </header>

      {/* Service Hero */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3 text-gray-700">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Trusted & Reliable</h3>
              <p>
                Years of proven experience and hundreds of satisfied customers.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-10 h-10 text-red-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p>
                Certified mechanics delivering precise and high-quality service.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
              <p>
                We care about your satisfaction and aim to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 bg-gradient-to-br from-blue-100 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Mehran Garages
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Mehran Garages is your go-to automotive service provider in the UK.
            From diagnostics to full-scale repairs, we offer unmatched service
            quality using modern tools and technologies. Our goal is to keep
            your vehicle safe, smooth, and road-ready at all times.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              Engine Diagnostics
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium">
              Brake Repair
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Oil Change
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
              Air Conditioning
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              MOT Testing
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">{children}</div>
      </main>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg mb-6">
            Contact Mehran Garages today for professional automotive care
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
          >
            Call +44 7846 953888
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mehran Garages. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
