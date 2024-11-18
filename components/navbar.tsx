"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { GraduationCap, BookOpen, Video, Users, Brain, FileText } from "lucide-react";

const navItems = [
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/live", label: "Live Sessions", icon: Video },
  { href: "/videos", label: "Video Lectures", icon: Video },
  { href: "/mcqs", label: "Practice MCQs", icon: Brain },
  { href: "/notes", label: "Lecture Notes", icon: FileText },
  { href: "/profile", label: "My Profile", icon: Users },
];

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">EduXcel</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Link href="/auth/login">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}