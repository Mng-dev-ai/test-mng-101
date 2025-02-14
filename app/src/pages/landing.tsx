import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"
import { 
  ArrowRight, 
  Rocket, 
  Globe, 
  Lock, 
  Zap,
  Code,
  Database,
  Shield,
  Layers,
  Server,
  Cpu,
  GitBranch,
  Webhook
} from "lucide-react"

const TECHNOLOGIES = [
  { name: "React", icon: Code, color: "text-blue-500" },
  { name: "TypeScript", icon: Cpu, color: "text-blue-600" },
  { name: "Tailwind", icon: Layers, color: "text-teal-500" },
  { name: "Zustand", icon: Database, color: "text-purple-500" },
  { name: "Vite", icon: Zap, color: "text-yellow-500" },
  { name: "Zod", icon: Shield, color: "text-green-500" }
]

const PERFORMANCE_METRICS = [
  { label: "Build Speed", value: "70% Faster", icon: Rocket },
  { label: "Bundle Size", value: "< 100kb", icon: Server },
  { label: "Code Quality", value: "TypeScript", icon: GitBranch }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Previous Header and Hero Section... */}

      {/* Technology Stack Section */}
      <section className="container mx-auto py-16 bg-accent/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leverage the most modern and performant web technologies 
            to build scalable applications.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {TECHNOLOGIES.map(({ name, icon: Icon, color }) => (
            <Card key={name} className="p-6 text-center hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Icon className={`h-12 w-12 ${color}`} />
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {PERFORMANCE_METRICS.map(({ label, value, icon: Icon }) => (
            <Card key={label} className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">{value}</h3>
              <p className="text-muted-foreground">{label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="container mx-auto py-16 bg-accent/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Seamless Integrations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite tools and services effortlessly.
          </p>
        </div>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <div className="grid md:grid-cols-4 gap-4">
              {["React", "Next.js", "Remix", "Gatsby"].map(tool => (
                <Card key={tool} className="p-4 text-center">
                  <CardHeader>
                    <CardTitle>{tool}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="backend">
            <div className="grid md:grid-cols-4 gap-4">
              {["Node.js", "Express", "Nest.js", "GraphQL"].map(tool => (
                <Card key={tool} className="p-4 text-center">
                  <CardHeader>
                    <CardTitle>{tool}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="deployment">
            <div className="grid md:grid-cols-4 gap-4">
              {["Vercel", "Netlify", "AWS", "Heroku"].map(tool => (
                <Card key={tool} className="p-4 text-center">
                  <CardHeader>
                    <CardTitle>{tool}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Developer Experience */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Supercharge Your Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed to make developers more productive and happy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Webhook,
              title: "Plug & Play Components",
              description: "Pre-built, customizable UI components"
            },
            {
              icon: Shield,
              title: "Type Safety",
              description: "Full TypeScript support out of the box"
            },
            {
              icon: Zap,
              title: "Fast Development",
              description: "Instant server start and lightning-fast HMR"
            }
          ].map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4 gap-4">
                <Icon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-16 bg-accent/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Flexible Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your project needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "$0",
              features: [
                "Basic Components",
                "Community Support",
                "Standard Integrations"
              ]
            },
            {
              title: "Pro",
              price: "$29",
              features: [
                "All Starter Features",
                "Priority Support",
                "Advanced Components",
                "Custom Themes"
              ]
            },
            {
              title: "Enterprise",
              price: "Custom",
              features: [
                "All Pro Features",
                "Dedicated Support",
                "Unlimited Integrations",
                "Security Audit"
              ]
            }
          ].map(({ title, price, features }) => (
            <Card key={title} className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <div className="text-3xl font-bold text-primary mb-6">{price}</div>
              <ul className="space-y-3 mb-6">
                {features.map(feature => (
                  <li key={feature} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={title === "Pro" ? "default" : "outline"}>
                Choose {title}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Previous CTA and Footer Sections... */}
    </div>
  )
}