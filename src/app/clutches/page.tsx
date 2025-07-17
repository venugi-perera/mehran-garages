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
  Cog,
  AlertTriangle,
  Wrench,
  Settings,
} from "lucide-react";

export default function ClutchesPage() {
  const clutchServices = [
    {
      title: "Clutch Replacement",
      description: "Complete clutch kit replacement service",
      icon: Cog,
      services: [
        "Clutch disc replacement",
        "Pressure plate replacement",
        "Release bearing service",
        "Flywheel inspection/replacement",
        "Clutch hydraulics service",
      ],
    },
    {
      title: "Clutch Diagnostics",
      description: "Professional clutch system fault finding",
      icon: Settings,
      services: [
        "Clutch slip testing",
        "Hydraulic system testing",
        "Clutch pedal adjustment",
        "Release mechanism inspection",
        "Flywheel condition assessment",
      ],
    },
    {
      title: "Hydraulic Systems",
      description: "Clutch hydraulic system repair and service",
      icon: Wrench,
      services: [
        "Master cylinder replacement",
        "Slave cylinder service",
        "Hydraulic fluid replacement",
        "System bleeding",
        "Leak detection and repair",
      ],
    },
  ];

  const clutchProblems = [
    "Clutch pedal feels heavy or light",
    "Difficulty engaging gears",
    "Clutch slipping under acceleration",
    "Burning smell from clutch",
    "Clutch pedal sticks to floor",
    "Grinding noise when changing gear",
    "Juddering when moving off",
    "High clutch biting point",
  ];

  return (
    <ServiceLayout
      title="Clutch Repair & Replacement"
      description="Expert clutch repair and replacement services for all vehicle types with quality parts and professional installation"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {clutchServices.map((service, index) => {
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
            Clutch Problem Signs
          </h2>
        </div>
        <p className="text-yellow-700 mb-6">
          Don't ignore these warning signs - clutch problems can lead to
          expensive transmission damage:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clutchProblems.map((problem, index) => (
            <div key={index} className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              <span className="text-yellow-700">{problem}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Clutch Replacement Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Diagnosis
            </h3>
            <p className="text-gray-700 text-sm">
              Comprehensive clutch system inspection and testing
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">Removal</h3>
            <p className="text-gray-700 text-sm">
              Safe removal of gearbox and clutch components
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Installation
            </h3>
            <p className="text-gray-700 text-sm">
              Professional installation of new clutch components
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">Testing</h3>
            <p className="text-gray-700 text-sm">
              Road test and clutch operation verification
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Clutch Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Good Driving Habits
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Don't rest your foot on the clutch pedal</li>
              <li>• Use handbrake on hills, not clutch</li>
              <li>• Avoid riding the clutch in traffic</li>
              <li>• Depress clutch fully when changing gear</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              Maintenance
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Check clutch fluid level regularly</li>
              <li>• Service clutch hydraulics annually</li>
              <li>• Address problems early</li>
              <li>• Use quality replacement parts</li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
