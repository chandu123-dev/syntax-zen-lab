import { Button } from "@/components/ui/button";
import { 
  Code, 
  Github, 
  Twitter, 
  Mail, 
  BookOpen, 
  Users, 
  Zap,
  Heart
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CodeCraft
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Empowering developers with intelligent code analysis and personalized learning experiences.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                Live Demo
              </a>
              <a href="#practice" className="text-muted-foreground hover:text-foreground transition-colors">
                Exercises
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          {/* Learn */}
          <div className="space-y-4">
            <h3 className="font-semibold">Learn</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#tutorials" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                <BookOpen className="h-3 w-3 mr-2" />
                Tutorials
              </a>
              <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                <Users className="h-3 w-3 mr-2" />
                Community
              </a>
              <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#help" className="text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
              <a href="#status" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                <Zap className="h-3 w-3 mr-2" />
                System Status
              </a>
              <a href="#feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                Feedback
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 CodeCraft. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-destructive fill-current" />
              <span>for developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};