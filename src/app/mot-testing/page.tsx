import ServiceLayout from "../../components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { CheckCircle, Car, Truck } from "lucide-react";

export default function MOTTestingPage() {
  const motServices = [
    {
      title: "Class 4 MOT",
      description: "For cars, light vans and ambulances up to 3,000kg",
      icon: Car,
      features: [
        "Comprehensive safety inspection",
        "Emissions testing",
        "Brake performance testing",
        "Suspension and steering checks",
        "Lights and electrical systems",
        "Bodywork and structure inspection",
      ],
    },
    {
      title: "Class 7 MOT",
      description: "For goods vehicles between 3,000kg and 3,500kg",
      icon: Truck,
      features: [
        "Commercial vehicle inspection",
        "Load capacity verification",
        "Enhanced brake testing",
        "Commercial lighting checks",
        "Tachograph inspection",
        "Commercial vehicle emissions",
      ],
    },
  ];

  return (
    <ServiceLayout
      title="MOT Testing Services"
      description="Professional MOT testing for Class 4 and Class 7 vehicles with certified technicians and state-of-the-art equipment"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {motServices.map((service, index) => {
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
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Why Choose Mehran Garages for MOT?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Certified Technicians
            </h3>
            <p className="text-gray-700 mb-4">
              Our MOT testers are fully qualified and regularly updated on the
              latest testing standards and regulations.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Modern Equipment
            </h3>
            <p className="text-gray-700">
              We use the latest MOT testing equipment to ensure accurate and
              reliable results for your vehicle.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Quick Turnaround
            </h3>
            <p className="text-gray-700 mb-4">
              Most MOT tests completed within 45 minutes, with immediate results
              and certificates issued on-site.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Competitive Pricing
            </h3>
            <p className="text-gray-700">
              Fair and transparent pricing with no hidden costs. We'll also
              provide a free basic health check.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
