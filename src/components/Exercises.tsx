import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Trophy, 
  Star, 
  Play, 
  Code,
  Target,
  Brain,
  Zap
} from "lucide-react";

const exercises = [
  {
    id: 1,
    title: "Array Manipulation Basics",
    description: "Learn fundamental array operations with filter, map, and reduce methods.",
    difficulty: "Beginner",
    duration: "15 min",
    points: 100,
    completed: false,
    progress: 0,
    tags: ["JavaScript", "Arrays", "ES6"],
    rating: 4.8
  },
  {
    id: 2,
    title: "Recursive Problem Solving",
    description: "Master recursion with factorial, fibonacci, and tree traversal problems.",
    difficulty: "Intermediate",
    duration: "30 min",
    points: 250,
    completed: true,
    progress: 100,
    tags: ["Algorithms", "Recursion", "Problem Solving"],
    rating: 4.9
  },
  {
    id: 3,
    title: "Async JavaScript Patterns",
    description: "Understand promises, async/await, and error handling in asynchronous code.",
    difficulty: "Advanced",
    duration: "45 min",
    points: 400,
    completed: false,
    progress: 65,
    tags: ["JavaScript", "Async", "Promises"],
    rating: 4.7
  },
  {
    id: 4,
    title: "Data Structure Implementation",
    description: "Build your own stack, queue, and linked list from scratch.",
    difficulty: "Intermediate",
    duration: "40 min",
    points: 300,
    completed: false,
    progress: 25,
    tags: ["Data Structures", "OOP", "Implementation"],
    rating: 4.6
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-success text-success-foreground";
    case "Intermediate": return "bg-warning text-warning-foreground";
    case "Advanced": return "bg-destructive text-destructive-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export const Exercises = () => {
  return (
    <section id="practice" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Target className="h-3 w-3 mr-1" />
            Practice Hub
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Challenge Yourself with
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Smart Exercises
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI generates personalized coding challenges that adapt to your skill level 
            and help you master programming concepts through hands-on practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-primary/10 hover:shadow-lg">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <Badge className={getDifficultyColor(exercise.difficulty)} variant="secondary">
                        {exercise.difficulty}
                      </Badge>
                      {exercise.completed && (
                        <Badge variant="secondary" className="bg-success/20 text-success">
                          <Trophy className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exercise.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground">
                      {exercise.description}
                    </CardDescription>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-warning">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{exercise.rating}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                {exercise.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{exercise.progress}%</span>
                    </div>
                    <Progress value={exercise.progress} className="h-2" />
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exercise.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4" />
                      <span>{exercise.points} pts</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {exercise.completed ? (
                    <Button variant="outline" className="flex-1">
                      <Code className="h-4 w-4 mr-2" />
                      Review Solution
                    </Button>
                  ) : exercise.progress > 0 ? (
                    <Button variant="hero" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  ) : (
                    <Button variant="hero" className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Start Exercise
                    </Button>
                  )}
                  
                  <Button variant="outline" size="icon">
                    <Brain className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Target className="h-4 w-4 mr-2" />
            Load More Exercises
          </Button>
        </div>
      </div>
    </section>
  );
};