"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Search, Download, Star, Clock } from "lucide-react";
import { useState } from "react";

const notes = {
  physics: [
    {
      id: 1,
      title: "Mechanics - Forces and Motion",
      description: "Comprehensive notes on Newton's laws, momentum, and energy conservation.",
      pages: 45,
      rating: 4.8,
      downloads: 1200,
      lastUpdated: "2024-03-15",
      preview: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa"
    },
    {
      id: 2,
      title: "Wave Optics",
      description: "Detailed explanation of interference, diffraction, and polarization.",
      pages: 32,
      rating: 4.6,
      downloads: 980,
      lastUpdated: "2024-03-10",
      preview: "https://images.unsplash.com/photo-1532634993-15f421e42ec0"
    }
  ],
  chemistry: [
    {
      id: 1,
      title: "Organic Chemistry Fundamentals",
      description: "Essential concepts of organic chemistry with reaction mechanisms.",
      pages: 58,
      rating: 4.9,
      downloads: 1500,
      lastUpdated: "2024-03-12",
      preview: "https://images.unsplash.com/photo-1532634993-15f421e42ec0"
    }
  ],
  mathematics: [
    {
      id: 1,
      title: "Calculus - Integration Techniques",
      description: "Advanced integration methods with solved examples.",
      pages: 64,
      rating: 4.7,
      downloads: 1100,
      lastUpdated: "2024-03-14",
      preview: "https://images.unsplash.com/photo-1509228468518-180dd4864904"
    }
  ]
};

export default function NotesPage() {
  const [activeSubject, setActiveSubject] = useState("physics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes[activeSubject].filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold">Lecture Notes</h1>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search notes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs value={activeSubject} onValueChange={setActiveSubject} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="physics">Physics</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
        </TabsList>

        <TabsContent value={activeSubject}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={note.preview}
                    alt={note.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">{note.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{note.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{note.pages} pages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{note.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{note.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        {new Date(note.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Notes
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}