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
  Snowflake,
  Thermometer,
  Wind,
  Wrench,
} from "lucide-react";

export default function AirConPage() {
  const airConServices = [
    {
      title: "AC Service & Re-gas",
      description: "Complete air conditioning service and refrigerant top-up",
      icon: Snowflake,
      services: [
        "System pressure testing",
        "Refrigerant recovery and recharge",
        "Leak detection and repair",
        "System performance testing",
        "Antibacterial treatment",
      ],
    },
    {
      title: "Component Replacement",
      description: "Professional AC component diagnosis and replacement",
      icon: Wrench,
      services: [
        "Compressor replacement",
        "Condenser repair/replacement",
        "Evaporator service",
        "Expansion valve replacement",
        "AC belt replacement",
      ],
    },
    {
      title: "System Diagnostics",
      description: "Advanced AC system fault finding and repair",
      icon: Thermometer,
      services: [
        "Electronic system diagnostics",
        "Temperature sensor testing",
        "Pressure switch testing",
        "Climate control module repair",
        "Blend door actuator service",
      ],
    },
  ];

  const maintenanceTips = [
    "Run AC system regularly, even in winter",
    "Replace cabin filter every 12 months",
    "Check for unusual noises or smells",
    "Service AC system every 2 years",
    "Keep condenser clean and free from debris",
    "Check AC belt condition regularly",
  ];

  return (
    <ServiceLayout
      title="Air Conditioning Services"
      description="Professional air conditioning repair, servicing, and re-gassing to keep you cool and comfortable all year round"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {airConServices.map((service, index) => {
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

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8">
        <div className="flex items-center mb-6">
          <Wind className="w-8 h-8 text-blue-600 mr-4" />
          <h2 className="text-2xl font-bold text-blue-800">
            AC Service Process
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              System Check
            </h3>
            <p className="text-blue-700 text-sm">
              Comprehensive AC system inspection and pressure testing
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              Recovery
            </h3>
            <p className="text-blue-700 text-sm">
              Safe recovery of old refrigerant and system cleaning
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Recharge
            </h3>
            <p className="text-blue-700 text-sm">
              Precise refrigerant recharge to manufacturer specifications
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-600">Test</h3>
            <p className="text-blue-700 text-sm">
              Performance testing and system verification
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Common AC Problems
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Symptoms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• AC not blowing cold air</li>
              <li>• Weak airflow from vents</li>
              <li>• Strange smells from AC</li>
              <li>• AC compressor not engaging</li>
              <li>• Excessive noise from AC system</li>
              <li>• AC works intermittently</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Common Causes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Low refrigerant levels</li>
              <li>• Blocked cabin filter</li>
              <li>• Faulty compressor</li>
              <li>• Condenser blockage</li>
              <li>• Electrical system faults</li>
              <li>• Worn drive belt</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          AC Maintenance Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {maintenanceTips.map((tip, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">
            <strong>Recommended Service Interval:</strong> Every 2 years or when
            performance decreases
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}
