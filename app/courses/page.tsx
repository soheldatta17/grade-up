"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Users, Brain } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "JEE Advanced Physics",
    category: "JEE",
    instructor: "Dr. Sarah Johnson",
    duration: "48 hours",
    rating: 4.8,
    students: 1200,
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "B.Tech Computer Science",
    category: "BTech",
    instructor: "Prof. Michael Chen",
    duration: "120 hours",
    rating: 4.9,
    students: 850,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "BSc Mathematics",
    category: "BSc",
    instructor: "Dr. Emily White",
    duration: "90 hours",
    rating: 4.7,
    students: 650,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop"
  }
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(course => course.category.toLowerCase() === activeTab);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All Courses</TabsTrigger>
          <TabsTrigger value="jee" onClick={() => setActiveTab("jee")}>JEE</TabsTrigger>
          <TabsTrigger value="btech" onClick={() => setActiveTab("btech")}>B.Tech</TabsTrigger>
          <TabsTrigger value="bsc" onClick={() => setActiveTab("bsc")}>BSc</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} students
                    </span>
                    <span className="flex items-center">
                      <Video className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">★ {course.rating}</span>
                    <Button>Enroll Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}