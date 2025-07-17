import ServiceLayout from "@/components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Wrench, Calendar, Shield } from "lucide-react";

export default function ServicePage() {
  const serviceTypes = [
    {
      title: "Full Service",
      description: "Comprehensive annual service covering all major systems",
      icon: Wrench,
      duration: "2-3 hours",
      includes: [
        "Engine oil and filter change",
        "Brake system inspection",
        "Suspension check",
        "Battery and charging system test",
        "Exhaust system inspection",
        "Cooling system check",
        "Lights and electrical systems",
        "Tyre condition and pressure",
        "Windscreen wipers and washers",
      ],
    },
    {
      title: "Interim Service",
      description:
        "Essential 6-month service to keep your vehicle running smoothly",
      icon: Calendar,
      duration: "1-2 hours",
      includes: [
        "Engine oil and filter change",
        "Fluid level checks",
        "Battery test",
        "Lights inspection",
        "Tyre pressure check",
        "Windscreen washers",
        "Basic safety checks",
      ],
    },
  ];

  return (
    <ServiceLayout
      title="Vehicle Servicing"
      description="Comprehensive vehicle servicing and maintenance to keep your car running at its best with genuine parts and expert technicians"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {serviceTypes.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card key={index} className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
                <div className="text-sm text-blue-600 font-semibold">
                  Duration: {service.duration}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-12 h-12 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Service Guarantee
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              Quality Parts
            </h3>
            <p className="text-gray-700">
              We use only genuine or OEM equivalent parts for all repairs and
              services
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">
              Expert Technicians
            </h3>
            <p className="text-gray-700">
              Our qualified mechanics have years of experience with all vehicle
              makes
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              12 Month Warranty
            </h3>
            <p className="text-gray-700">
              All our work comes with a comprehensive 12-month warranty for
              peace of mind
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Service Intervals
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Regular servicing is essential for vehicle safety, reliability, and
          maintaining your warranty. We recommend following manufacturer
          guidelines for service intervals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Petrol Vehicles
            </h3>
            <p className="text-gray-700">Every 12 months or 12,000 miles</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Diesel Vehicles
            </h3>
            <p className="text-gray-700">Every 12 months or 20,000 miles</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
