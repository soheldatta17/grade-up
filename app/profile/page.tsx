"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Brain, Trophy, TrendingUp } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <Card className="p-6 lg:col-span-1">
          <div className="text-center mb-6">
            <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">JS</span>
            </div>
            <h2 className="text-2xl font-bold">John Smith</h2>
            <p className="text-muted-foreground">JEE Aspirant</p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Overall Progress</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <Trophy className="w-6 h-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-muted-foreground">Avg. Score</div>
              </Card>
              <Card className="p-4 text-center">
                <Brain className="w-6 h-6 mx-auto mb-2" />
                <div className="text-2xl font-bold">24</div>
                <div className="text-sm text-muted-foreground">Quizzes Taken</div>
              </Card>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="performance">
            <TabsList className="mb-8">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Subject Performance</h3>
                <div className="space-y-4">
                  {["Physics", "Chemistry", "Mathematics"].map((subject) => (
                    <div key={subject}>
                      <div className="flex justify-between mb-2">
                        <span>{subject}</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Brain className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold">Focus on Thermodynamics</h4>
                      <p className="text-muted-foreground">Based on your recent quiz performance, we recommend reviewing thermodynamics concepts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold">Practice More Integration</h4>
                      <p className="text-muted-foreground">Your calculus scores show room for improvement. Try our advanced integration problems.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="courses">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
                <div className="space-y-4">
                  {["JEE Advanced Physics", "Mathematics Mastery", "Chemistry Fundamentals"].map((course) => (
                    <div key={course} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <BookOpen className="w-6 h-6" />
                        <div>
                          <h4 className="font-semibold">{course}</h4>
                          <p className="text-sm text-muted-foreground">Progress: 75%</p>
                        </div>
                      </div>
                      <Progress value={75} className="w-32" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}