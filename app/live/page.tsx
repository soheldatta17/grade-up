"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Users, Clock } from "lucide-react";

const sessions = [
  {
    id: 1,
    title: "JEE Advanced Problem Solving",
    instructor: "Dr. Sarah Johnson",
    startTime: "10:00 AM",
    duration: "2 hours",
    participants: 245,
    status: "live"
  },
  {
    id: 2,
    title: "Data Structures for B.Tech",
    instructor: "Prof. Michael Chen",
    startTime: "2:00 PM",
    duration: "1.5 hours",
    participants: 180,
    status: "upcoming"
  }
];

export default function LivePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Live Sessions</h1>

      <div className="grid gap-6">
        {sessions.map((session) => (
          <Card key={session.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {session.status === "live" && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    LIVE
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-semibold">{session.title}</h3>
                  <p className="text-muted-foreground">with {session.instructor}</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{session.startTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4" />
                  <span>{session.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{session.participants}</span>
                </div>
                <Button>
                  {session.status === "live" ? "Join Now" : "Set Reminder"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}