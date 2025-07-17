import ServiceLayout from "@/components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  ShipWheelIcon as Wheel,
  Target,
  Gauge,
  Settings,
} from "lucide-react";

export default function TyresAlignmentPage() {
  const tyreServices = [
    {
      title: "Tyre Fitting",
      description: "Professional tyre supply and fitting service",
      icon: Wheel,
      services: [
        "Premium brand tyres",
        "Budget tyre options",
        "Run-flat tyre fitting",
        "Tyre pressure monitoring",
        "Wheel balancing",
      ],
    },
    {
      title: "Wheel Alignment",
      description: "High-tech precision wheel alignment service",
      icon: Target,
      services: [
        "4-wheel laser alignment",
        "Toe, camber, and caster adjustment",
        "Thrust angle correction",
        "Steering wheel centering",
        "Alignment reports",
      ],
    },
    {
      title: "Wheel Services",
      description: "Complete wheel repair and maintenance",
      icon: Settings,
      services: [
        "Alloy wheel refurbishment",
        "Wheel rim repair",
        "Valve replacement",
        "Wheel cleaning service",
        "Custom wheel fitting",
      ],
    },
  ];

  const alignmentBenefits = [
    "Improved fuel economy",
    "Extended tyre life",
    "Better vehicle handling",
    "Reduced steering effort",
    "Safer driving experience",
    "Prevents premature wear",
  ];

  const tyreChecks = [
    "Tread depth measurement",
    "Sidewall damage inspection",
    "Pressure monitoring",
    "Uneven wear patterns",
    "Age and condition assessment",
    "Legal compliance check",
  ];

  return (
    <ServiceLayout
      title="Tyres & High-Tech Alignment"
      description="Premium tyre services and precision wheel alignment using the latest high-tech equipment for optimal vehicle performance and safety"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {tyreServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card key={index} className="border-2 border-blue-200">
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
              <CardContent>
                <ul className="space-y-3">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          High-Tech Alignment Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Advanced Technology
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 3D laser alignment system</li>
              <li>• Computer-controlled measurements</li>
              <li>• Real-time adjustment monitoring</li>
              <li>• Precision angle calculations</li>
              <li>• Digital reporting system</li>
              <li>• Before and after comparisons</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Alignment Parameters
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Toe angle adjustment</li>
              <li>• Camber angle correction</li>
              <li>• Caster angle setting</li>
              <li>• Thrust angle alignment</li>
              <li>• Steering wheel positioning</li>
              <li>• Manufacturer specifications</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-800">
              Alignment Benefits
            </h3>
          </div>
          <ul className="space-y-2">
            {alignmentBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-blue-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Gauge className="w-6 h-6 text-red-600 mr-3" />
            <h3 className="text-xl font-bold text-red-800">
              Tyre Health Checks
            </h3>
          </div>
          <ul className="space-y-2">
            {tyreChecks.map((check, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-red-700">{check}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Tyre Brands We Stock
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Premium
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>Michelin</li>
              <li>Continental</li>
              <li>Bridgestone</li>
              <li>Pirelli</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Mid-Range
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>Goodyear</li>
              <li>Dunlop</li>
              <li>Yokohama</li>
              <li>Hankook</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Budget</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Falken</li>
              <li>Kumho</li>
              <li>Nexen</li>
              <li>Toyo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Specialist
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>Run-flat tyres</li>
              <li>Winter tyres</li>
              <li>Performance tyres</li>
              <li>Commercial tyres</li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
