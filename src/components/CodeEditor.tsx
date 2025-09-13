import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Bug, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb,
  Code,
  Zap
} from "lucide-react";

const sampleCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate the 10th Fibonacci number
const result = fibonacci(10);
console.log(\`Fibonacci(10) = \${result}\`);`;

const analysisResults = [
  {
    type: "performance",
    icon: Zap,
    title: "Performance Issue",
    message: "Exponential time complexity detected in fibonacci function",
    line: 3,
    severity: "warning"
  },
  {
    type: "suggestion",
    icon: Lightbulb,
    title: "Optimization Suggestion",
    message: "Consider using memoization or iterative approach",
    line: 3,
    severity: "info"
  }
];

const debugSuggestions = [
  "Add memoization to cache previously computed values",
  "Use an iterative approach instead of recursion",
  "Consider using the closed-form formula for Fibonacci numbers",
  "Add input validation for negative numbers"
];

export const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState("editor");
  const [code, setCode] = useState(sampleCode);

  return (
    <section id="demo" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Code className="h-3 w-3 mr-1" />
            Live Demo
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience Our
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Intelligent Code Editor
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Try our AI-powered code analysis in real-time. Edit the code and see instant feedback, 
            error detection, and performance suggestions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-border/50 shadow-2xl">
            <CardHeader className="bg-card border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Code className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span>fibonacci.js</span>
                </CardTitle>
                
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Analyzed
                  </Badge>
                  <Button variant="hero" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Run Code
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full justify-start rounded-none bg-secondary/30 border-b">
                  <TabsTrigger value="editor" className="relative">
                    <Code className="h-4 w-4 mr-2" />
                    Editor
                  </TabsTrigger>
                  <TabsTrigger value="analysis" className="relative">
                    <Bug className="h-4 w-4 mr-2" />
                    Analysis
                    <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                      2
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="suggestions">
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Suggestions
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="editor" className="m-0">
                  <div className="relative">
                    {/* Line Numbers */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-editor-background border-r border-border flex flex-col text-editor-line-numbers text-sm font-mono">
                      {code.split('\n').map((_, index) => (
                        <div key={index} className="h-6 flex items-center justify-end pr-2 text-xs">
                          {index + 1}
                        </div>
                      ))}
                    </div>
                    
                    {/* Code Editor */}
                    <div className="pl-12">
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 p-4 bg-editor-background text-editor-foreground font-mono text-sm resize-none border-0 outline-0 code-editor"
                        spellCheck={false}
                      />
                    </div>
                    
                    {/* Error Highlighting */}
                    <div className="absolute top-[72px] left-12 right-4 h-6 bg-destructive/20 border-l-2 border-destructive pointer-events-none" />
                  </div>
                </TabsContent>
                
                <TabsContent value="analysis" className="m-0 p-6 space-y-4">
                  {analysisResults.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border bg-card/50">
                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                        result.severity === 'warning' ? 'bg-warning/20 text-warning' : 'bg-primary/20 text-primary'
                      }`}>
                        <result.icon className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{result.title}</h4>
                          <Badge variant={result.severity === 'warning' ? 'destructive' : 'secondary'} className="text-xs">
                            Line {result.line}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{result.message}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="suggestions" className="m-0 p-6 space-y-4">
                  <div className="space-y-3">
                    {debugSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                        <div className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <p className="text-sm">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Apply Auto-Fix
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};