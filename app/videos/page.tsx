"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { PlayCircle, Clock, BookOpen } from "lucide-react";

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const videos = [
  {
    id: 1,
    title: "Understanding Wave Optics",
    subject: "Physics",
    duration: "45:20",
    instructor: "Dr. Sarah Johnson",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Learn about wave optics, interference, and diffraction patterns."
  },
  {
    id: 2,
    title: "Organic Chemistry Basics",
    subject: "Chemistry",
    duration: "38:15",
    instructor: "Prof. Michael Chen",
    thumbnail: "https://images.unsplash.com/photo-1532634993-15f421e42ec0",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Introduction to organic chemistry fundamentals."
  }
];

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Video Lectures</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2">
          {selectedVideo ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <div className="aspect-video">
                <ReactPlayer
                  url={selectedVideo.url}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <div className="p-6 bg-card">
                <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                <p className="text-muted-foreground mb-4">{selectedVideo.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedVideo.duration}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {selectedVideo.subject}
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Select a video to start learning</p>
            </div>
          )}
        </div>

        {/* Video List */}
        <div className="space-y-4">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="overflow-hidden cursor-pointer" 
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {video.instructor}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {video.duration}
                    </span>
                    <Button variant="outline" size="sm">Watch Now</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}