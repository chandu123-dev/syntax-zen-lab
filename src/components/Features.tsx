import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bug, 
  Brain, 
  Target, 
  BookOpen, 
  Zap, 
  Code2,
  Search,
  Lightbulb,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Code Analysis",
    description: "Advanced static analysis detects patterns, complexity, and potential improvements in your code.",
    badge: "Core Feature",
    color: "text-primary"
  },
  {
    icon: Bug,
    title: "Error Detection",
    description: "Real-time error detection with precise location highlighting and severity classification.",
    badge: "AI-Powered",
    color: "text-destructive"
  },
  {
    icon: Lightbulb,
    title: "Debug Suggestions",
    description: "Intelligent debugging recommendations with step-by-step solutions and best practices.",
    badge: "Smart",
    color: "text-warning"
  },
  {
    icon: Target,
    title: "Exercise Generation",
    description: "Personalized coding challenges generated based on your skill level and learning progress.",
    badge: "Adaptive",
    color: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Interactive Tutorials",
    description: "Hands-on tutorials with live code editing and instant feedback for immersive learning.",
    badge: "Interactive",
    color: "text-primary-glow"
  },
  {
    icon: Cpu,
    title: "Performance Insights",
    description: "Analyze code performance with complexity metrics and optimization suggestions.",
    badge: "Pro Feature",
    color: "text-success"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Powerful Features
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Code Like a Pro
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI with proven educational methods 
            to accelerate your programming journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-primary/10 hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`h-12 w-12 rounded-xl bg-card flex items-center justify-center border ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Code2 className="h-4 w-4" />
                  <span>Learn More</span>
                  <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>Try Now</span>
                </div>
              </CardContent>
              
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};