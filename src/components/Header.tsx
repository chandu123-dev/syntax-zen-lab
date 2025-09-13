import { Button } from "@/components/ui/button";
import { Code, BookOpen, Play, User, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CodeCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#learn" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Learn
            </a>
            <a href="#practice" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Practice
            </a>
            <a href="#analyze" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Analyze
            </a>
            <a href="#tutorials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tutorials
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              <Play className="h-4 w-4 mr-2" />
              Start Coding
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a href="#learn" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Learn
              </a>
              <a href="#practice" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Practice
              </a>
              <a href="#analyze" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Analyze
              </a>
              <a href="#tutorials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Tutorials
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button variant="hero" size="sm" className="justify-start">
                <Play className="h-4 w-4 mr-2" />
                Start Coding
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};