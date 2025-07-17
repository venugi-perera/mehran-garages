import Link from "next/link";
import {
  Car,
  Wrench,
  Settings,
  BracketsIcon as Brake,
  Gauge,
  Snowflake,
  ShipWheelIcon as Wheel,
  Cog,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "MOT Testing",
    description: "Class 4 & Class 7 MOT testing with certified technicians",
    icon: Car,
    href: "/mot-testing",
    details: "Professional MOT testing for cars and light commercial vehicles",
  },
  {
    title: "Vehicle Service",
    description: "Comprehensive vehicle servicing and maintenance",
    icon: Wrench,
    href: "/service",
    details: "Full and interim services to keep your vehicle running smoothly",
  },
  {
    title: "Diagnostics",
    description: "Advanced diagnostic services with dealer-level access",
    icon: Settings,
    href: "/diagnostics",
    details: "ECU updates and dealer-level diagnostic information",
  },
  {
    title: "Braking Systems",
    description: "Complete brake repair and maintenance services",
    icon: Brake,
    href: "/braking",
    details: "Brake pads, discs, fluid changes and brake system repairs",
  },
  {
    title: "Suspension",
    description: "Suspension repair and replacement services",
    icon: Gauge,
    href: "/suspension",
    details: "Shock absorbers, springs, and complete suspension systems",
  },
  {
    title: "Air Conditioning",
    description: "AC repair, servicing and re-gassing",
    icon: Snowflake,
    href: "/air-con",
    details: "Keep cool with our professional AC services",
  },
  {
    title: "Tyres & Alignment",
    description: "High-tech wheel alignment and tyre services",
    icon: Wheel,
    href: "/tyres-alignment",
    details: "Premium tyres and precision wheel alignment technology",
  },
  {
    title: "Clutch Repair",
    description: "Complete clutch repair and replacement",
    icon: Cog,
    href: "/clutches",
    details: "Expert clutch repairs for all vehicle types",
  },
  {
    title: "Timing Systems",
    description: "Timing belts, wet belts, and timing chains",
    icon: Clock,
    href: "/timing-systems",
    details: "Precision timing system repairs and replacements",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-red-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Mehran Garages</h1>
              <p className="text-blue-100">Professional Automotive Services</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">Call Us Today</p>
              <p className="text-xl text-red-200">+44 7846 953888</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] text-white overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Expert Automotive Care</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional vehicle servicing, MOT testing, and repairs with
            state-of-the-art equipment and dealer-level diagnostic capabilities
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Call +44 7846 953888 Today
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-500 mb-4">
                      {service.details}
                    </p>
                    <Link href={service.href}>
                      <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "I have been going to this garage since I got my car 5 years
                  now. My car is old 2005 and almost never gives me trouble. I
                  feel he is fair with his prices and good customer service. I
                  highly recommend."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Elizabeth Ezediaro</strong> • 5 years ago
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Very kind and honest staff! I definitely recommend going to
                  this garage if you don't know where to take your car! 10/10
                  customer service and fantastic prices!"
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Javid Dashti</strong> • 4 years ago
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "These guys are amazing - top quality work and great customer
                  service at best prices for all vehicle maintenance and repair
                  work!"
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Matthew Hearnshaw</strong> • 1 year ago
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "They are very professional and respectful, they will have
                  your car done and ready in no time. They are honest and I use
                  my car very often."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Andrew Kumbula</strong> • 2 years ago
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent engineer always fixes my car at a reasonable price.
                  I wouldn't go anywhere else."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Ripper</strong> • 7 years ago
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Good service. Reasonable price. Person knows what he's doing.
                  Recommend."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Kaspras Knojukas</strong> • 4 years ago
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Mehran Garages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Phone
              </h3>
              <p className="text-lg">+44 7846 953888</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-300">
                Address
              </h3>
              <p>
                29 Church St, Old Basford
                <br />
                Nottingham NG6 0GA
                <br />
                United Kingdom
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Hours
              </h3>
              <p>
                Mon-Fri: 8:00 AM - 5:30 PM
                <br />
                Sat: 8:00 AM - 4:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mehran Garages. All rights reserved.</p>
          <p className="text-blue-200 mt-2">
            Professional automotive services you can trust
          </p>
        </div>
      </footer>
    </div>
  );
}
