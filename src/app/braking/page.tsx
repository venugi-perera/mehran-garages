import ServiceLayout from "../../components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  CheckCircle,
  BracketsIcon as Brake,
  AlertTriangle,
  Wrench,
  Shield,
} from "lucide-react";

export default function BrakingPage() {
  const brakeServices = [
    {
      title: "Brake Pads & Discs",
      description: "Professional brake pad and disc replacement",
      icon: Brake,
      services: [
        "Brake pad replacement",
        "Brake disc replacement",
        "Brake disc skimming",
        "Performance brake upgrades",
        "Brake pad wear sensors",
      ],
    },
    {
      title: "Brake System Service",
      description: "Complete brake system maintenance and repair",
      icon: Wrench,
      services: [
        "Brake fluid replacement",
        "Brake system bleeding",
        "Brake line inspection",
        "Master cylinder service",
        "Brake servo testing",
      ],
    },
    {
      title: "ABS & Electronic Systems",
      description: "Advanced brake system diagnostics and repair",
      icon: Shield,
      services: [
        "ABS system diagnostics",
        "ESP/ESC system repair",
        "Brake assist systems",
        "Electronic parking brake",
        "Brake sensor replacement",
      ],
    },
  ];

  const warningSigns = [
    "Squealing or grinding noises when braking",
    "Brake pedal feels spongy or soft",
    "Vehicle pulls to one side when braking",
    "Brake warning light on dashboard",
    "Vibration through brake pedal or steering wheel",
    "Longer stopping distances than normal",
  ];

  return (
    <ServiceLayout
      title="Braking Systems"
      description="Complete brake repair and maintenance services to ensure your vehicle stops safely and efficiently with professional brake specialists"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {brakeServices.map((service, index) => {
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

      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-8">
        <div className="flex items-center mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
          <h2 className="text-2xl font-bold text-red-800">
            Brake Warning Signs
          </h2>
        </div>
        <p className="text-red-700 mb-6">
          Don't ignore these warning signs - your safety depends on properly
          functioning brakes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {warningSigns.map((sign, index) => (
            <div key={index} className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-red-700">{sign}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Brake Service Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Inspection
            </h3>
            <p className="text-gray-700 text-sm">
              Comprehensive brake system inspection and measurement
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              Diagnosis
            </h3>
            <p className="text-gray-700 text-sm">
              Identify worn components and system issues
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Repair</h3>
            <p className="text-gray-700 text-sm">
              Professional repair using quality parts
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">Testing</h3>
            <p className="text-gray-700 text-sm">
              Road test and brake performance verification
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Brake Maintenance Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Regular Checks
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Check brake fluid level monthly</li>
              <li>• Listen for unusual brake noises</li>
              <li>• Feel for brake pedal changes</li>
              <li>• Annual brake system inspection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              Driving Tips
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Avoid harsh braking when possible</li>
              <li>• Allow brakes to cool on long descents</li>
              <li>• Don't ride the brake pedal</li>
              <li>• Service brakes every 12 months</li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
