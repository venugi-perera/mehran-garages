import ServiceLayout from "../../components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { CheckCircle, Laptop, Database, Zap, Settings } from "lucide-react";

export default function DiagnosticsPage() {
  const diagnosticServices = [
    {
      title: "Engine Diagnostics",
      description: "Comprehensive engine fault finding and analysis",
      icon: Settings,
      features: [
        "ECU fault code reading and clearing",
        "Live data monitoring",
        "Engine performance analysis",
        "Emission system diagnostics",
        "Fuel system testing",
      ],
    },
    {
      title: "ECU Programming",
      description: "Software updates and ECU reprogramming services",
      icon: Laptop,
      features: [
        "ECU software updates",
        "Module programming",
        "Key programming",
        "Immobilizer programming",
        "Module coding and adaptation",
      ],
    },
    {
      title: "Dealer Level Access",
      description: "Professional diagnostic tools with manufacturer access",
      icon: Database,
      features: [
        "OEM diagnostic software",
        "Technical service bulletins",
        "Wiring diagrams access",
        "Component testing procedures",
        "Factory reset procedures",
      ],
    },
    {
      title: "Electrical Diagnostics",
      description: "Advanced electrical system fault finding",
      icon: Zap,
      features: [
        "Circuit testing and analysis",
        "Component functionality testing",
        "Wiring harness inspection",
        "Sensor calibration",
        "Network communication testing",
      ],
    },
  ];

  return (
    <ServiceLayout
      title="Advanced Diagnostics"
      description="Professional vehicle diagnostics with dealer-level access, ECU updates, and comprehensive fault finding using state-of-the-art equipment"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {diagnosticServices.map((service, index) => {
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

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Professional Diagnostic Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Manufacturer Specific Tools
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• BMW ISTA/D and ISTA/P</li>
              <li>• Mercedes XENTRY and DAS</li>
              <li>• Audi/VW ODIS and VCDS</li>
              <li>• Ford IDS and FDRS</li>
              <li>• Toyota Techstream</li>
              <li>• Jaguar Land Rover SDD</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Multi-Brand Platforms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bosch KTS diagnostic systems</li>
              <li>• Launch X431 professional</li>
              <li>• Snap-on VERUS Edge</li>
              <li>• Autel MaxiSys Elite</li>
              <li>• Delphi DS150E</li>
              <li>• OBD-II and CAN bus analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Why Choose Our Diagnostics?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Dealer Level Access
            </h3>
            <p className="text-gray-700">
              Access to manufacturer databases and technical information that
              independent garages typically don't have
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              Expert Technicians
            </h3>
            <p className="text-gray-700">
              Our technicians are trained in advanced diagnostics and stay
              updated with the latest automotive technology
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Comprehensive Reports
            </h3>
            <p className="text-gray-700">
              Detailed diagnostic reports with fault codes, live data, and
              recommended repair procedures
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
