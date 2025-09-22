import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              About Nervous Hippo LLC
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Creating games that are fun, approachable, and a little unexpected.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <Card className="p-8 bg-muted/20">
              <CardContent className="p-0">
                <p className="text-foreground leading-relaxed mb-6">
                  At Nervous Hippo LLC, we believe games should be fun, approachable, and a little unexpected. Founded
                  in 2025, we're an indie studio focused on creating simple yet engaging experiences for players around
                  the world.
                </p>
                <p className="text-foreground leading-relaxed">
                  Our first release, Tetdoku, blends familiar mechanics into something fresh and addictive. And this is
                  just the beginning — more games are on the way!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Fun First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every decision we make starts with one question: will this make the game more fun?
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Approachable</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our games are designed to be welcoming to players of all skill levels and backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Unexpected</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We love surprising players with creative twists on familiar concepts and mechanics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
