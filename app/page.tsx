import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Video, Brain } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Future with</span>
              <span className="block text-primary">Expert Education</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-muted-foreground sm:text-2xl md:mt-5 md:max-w-3xl">
              Comprehensive courses for JEE, B.Tech, and BSc with personalized learning paths and AI-powered recommendations.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/courses">
                <Button size="lg">Explore Courses</Button>
              </Link>
              <Link href="/auth/register">
                <Button size="lg" variant="outline">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Study Material</h3>
              <p className="text-muted-foreground">Comprehensive notes and resources crafted by top educators</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Video className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Sessions</h3>
              <p className="text-muted-foreground">Interactive live classes with real-time doubt solving</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-muted-foreground">Personalized recommendations based on your performance</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
              <p className="text-muted-foreground">Connect with peers and mentors for collaborative growth</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest Exam Updates</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <p className="text-sm text-muted-foreground mb-2">April {i}, 2024</p>
                <h3 className="text-xl font-semibold mb-2">JEE Main 2024 Session {i} Results Announced</h3>
                <p className="text-muted-foreground mb-4">Check your results and detailed analysis on the official website...</p>
                <Button variant="link" className="p-0">Read More →</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of successful students who transformed their careers with us.</p>
          <Button size="lg" variant="secondary">
            Start Learning Today
          </Button>
        </div>
      </section>
    </div>
  );
}