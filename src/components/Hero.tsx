import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Code, Zap, Target } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                <Zap className="h-3 w-3 mr-1" />
                AI-Powered Learning
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master Programming with
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Intelligent Analysis
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Learn to code with our advanced platform featuring real-time error detection, 
                smart debugging suggestions, and personalized exercise generation.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Smart Debugging</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Interactive Tutorials</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group shadow-primary">
                <Play className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Start Learning Now
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Code className="h-5 w-5 mr-2" />
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Exercises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="CodeCraft Programming Platform Interface"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay with floating elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              
              {/* Floating Code Analysis Badge */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium">Code Analysis Active</span>
                </div>
              </div>
              
              {/* Floating Error Detection */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 border shadow-lg">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">0 Errors Detected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};