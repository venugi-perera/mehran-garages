import ServiceLayout from "../../components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { CheckCircle, Gauge, Car, Wrench, AlertTriangle } from "lucide-react";

export default function SuspensionPage() {
  const suspensionServices = [
    {
      title: "Shock Absorbers",
      description: "Professional shock absorber testing and replacement",
      icon: Gauge,
      services: [
        "Shock absorber replacement",
        "Strut replacement and repair",
        "Performance shock upgrades",
        "Shock absorber testing",
        "Gas and oil shock servicing",
      ],
    },
    {
      title: "Springs & Coils",
      description: "Spring replacement and suspension height adjustment",
      icon: Car,
      services: [
        "Coil spring replacement",
        "Leaf spring repair",
        "Lowering spring installation",
        "Air spring replacement",
        "Spring compressor service",
      ],
    },
    {
      title: "Suspension Components",
      description: "Complete suspension system component service",
      icon: Wrench,
      services: [
        "Ball joint replacement",
        "Control arm bushes",
        "Anti-roll bar links",
        "Suspension mounting points",
        "Steering rack bushes",
      ],
    },
  ];

  const suspensionProblems = [
    "Vehicle bounces excessively after hitting bumps",
    "Uneven tyre wear patterns",
    "Vehicle pulls to one side while driving",
    "Nose dives when braking hard",
    "Excessive body roll when cornering",
    "Clunking or knocking noises over bumps",
    "Vehicle sits lower on one side",
    "Steering feels loose or imprecise",
  ];

  return (
    <ServiceLayout
      title="Suspension Systems"
      description="Professional suspension repair and replacement services to ensure optimal ride comfort, handling, and vehicle stability"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {suspensionServices.map((service, index) => {
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

      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 mb-8">
        <div className="flex items-center mb-6">
          <AlertTriangle className="w-8 h-8 text-yellow-600 mr-4" />
          <h2 className="text-2xl font-bold text-yellow-800">
            Suspension Problem Signs
          </h2>
        </div>
        <p className="text-yellow-700 mb-6">
          Watch out for these signs that your suspension system may need
          attention:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suspensionProblems.map((problem, index) => (
            <div key={index} className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              <span className="text-yellow-700">{problem}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Suspension System Components
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Front Suspension
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• MacPherson struts or shock absorbers</li>
              <li>• Coil springs or leaf springs</li>
              <li>• Control arms and ball joints</li>
              <li>• Anti-roll bar and drop links</li>
              <li>• Suspension mounting points</li>
              <li>• Steering rack and tie rods</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Rear Suspension
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Rear shock absorbers or struts</li>
              <li>• Coil springs or leaf springs</li>
              <li>• Trailing arms and bushes</li>
              <li>• Rear anti-roll bar</li>
              <li>• Panhard rod (if fitted)</li>
              <li>• Rear axle components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Suspension Maintenance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Regular Inspection
            </h3>
            <p className="text-gray-700">
              Annual suspension inspection to identify worn components before
              they cause handling problems
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              Quality Parts
            </h3>
            <p className="text-gray-700">
              We use OEM or equivalent quality suspension components for
              reliable, long-lasting repairs
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Professional Service
            </h3>
            <p className="text-gray-700">
              Expert technicians with specialized tools ensure proper suspension
              component installation
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
