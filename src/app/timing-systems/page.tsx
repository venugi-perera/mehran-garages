import ServiceLayout from "../../components/service-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { CheckCircle, Clock, AlertTriangle, Wrench, Zap } from "lucide-react";

export default function TimingSystemsPage() {
  const timingServices = [
    {
      title: "Timing Belts",
      description: "Traditional rubber timing belt replacement service",
      icon: Clock,
      services: [
        "Timing belt replacement",
        "Tensioner and idler pulley service",
        "Water pump replacement (if driven by timing belt)",
        "Timing belt inspection",
        "Engine timing verification",
      ],
    },
    {
      title: "Wet Belts",
      description: "Oil-bathed timing belt systems (Ford EcoBoost, etc.)",
      icon: Wrench,
      services: [
        "Wet belt replacement",
        "Oil pump drive belt service",
        "Engine oil and filter change",
        "Timing system cleaning",
        "Wet belt system diagnostics",
      ],
    },
    {
      title: "Timing Chains",
      description: "Metal timing chain systems and components",
      icon: Zap,
      services: [
        "Timing chain replacement",
        "Chain tensioner service",
        "Chain guide replacement",
        "VVT system service",
        "Timing chain stretch measurement",
      ],
    },
  ];

  const timingWarnings = [
    "Rattling noise from engine on startup",
    "Engine misfiring or running rough",
    "Metal particles in engine oil",
    "Engine timing error codes",
    "Reduced engine performance",
    "Unusual engine noise at idle",
    "Engine won't start after timing service",
    "Visible timing belt wear or cracking",
  ];

  const intervalGuide = [
    {
      system: "Timing Belt (Petrol)",
      interval: "60,000 - 100,000 miles or 4-6 years",
    },
    {
      system: "Timing Belt (Diesel)",
      interval: "80,000 - 120,000 miles or 5-7 years",
    },
    {
      system: "Wet Belt (Ford EcoBoost)",
      interval: "150,000 miles or 10 years",
    },
    {
      system: "Timing Chain",
      interval: "100,000 - 200,000 miles (condition dependent)",
    },
  ];

  return (
    <ServiceLayout
      title="Timing Systems Service"
      description="Expert timing belt, wet belt, and timing chain services to keep your engine running in perfect synchronization"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {timingServices.map((service, index) => {
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
            Critical Warning Signs
          </h2>
        </div>
        <p className="text-red-700 mb-6">
          <strong>IMPORTANT:</strong> Timing system failure can cause
          catastrophic engine damage. Watch for these warning signs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timingWarnings.map((warning, index) => (
            <div key={index} className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="text-red-700">{warning}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Service Intervals
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Regular timing system maintenance is crucial to prevent expensive
          engine damage
        </p>
        <div className="space-y-4">
          {intervalGuide.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <span className="font-semibold text-gray-800">{item.system}</span>
              <span className="text-blue-600 font-medium">{item.interval}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Why Choose Mehran Garages?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Specialist Knowledge
            </h3>
            <p className="text-gray-700">
              Our technicians are trained in all timing system types including
              the latest wet belt technology
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-3">
              Quality Parts
            </h3>
            <p className="text-gray-700">
              We use OEM or equivalent quality timing components with
              comprehensive warranties
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">
              Precision Service
            </h3>
            <p className="text-gray-700">
              Accurate timing setup using specialized tools to ensure perfect
              engine synchronization
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
