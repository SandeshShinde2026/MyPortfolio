import { AppCard } from "./app-card";

const APPS = [
  {
    title: "FinTrack iOS",
    description: "A minimalist personal finance tracker built with SwiftUI that helps users budget and monitor their expenses seamlessly.",
    techStack: ["SwiftUI", "CoreData", "Charts"],
  },
  {
    title: "HealthSync",
    description: "An interactive fitness application that syncs with wearables to provide real-time health insights.",
    techStack: ["React Native", "Redux", "HealthKit"],
  },
  {
    title: "SmartHome Controller",
    description: "A unified dashboard for IoT devices, offering fast, responsive control over home appliances.",
    techStack: ["Flutter", "Firebase", "WebSockets"],
  }
];

export function FeaturedApps() {
  return (
    <section className="w-full px-6 py-32 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            Selected mobile applications that highlight clean design and robust engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPS.map((app, i) => (
            <AppCard key={app.title} {...app} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
