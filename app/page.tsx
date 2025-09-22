import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Smartphone, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-background/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance leading-tight drop-shadow-2xl">
              Nervous Hippo
            </h1>

            <p className="text-xl sm:text-3xl lg:text-4xl text-white/90 mb-4 text-pretty font-light drop-shadow-lg">
              Casual mobile games with a twist.
            </p>

            <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto text-pretty drop-shadow-md">
              Discover innovative puzzle experiences that challenge your mind while keeping you relaxed. Available now
              on iOS and Android.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <Link href="#tetdoku">
                  <Smartphone className="mr-3 h-6 w-6" />
                  Download on App Store
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl"
                asChild
              >
                <Link href="#tetdoku">
                  <Download className="mr-3 h-6 w-6" />
                  Get it on Google Play
                </Link>
              </Button>
            </div>

            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center backdrop-blur-sm">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tetdoku" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Introducing Tetdoku</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A relaxing yet challenging puzzle game that combines block placement with the strategy of Sudoku. Drag and
              drop blocks, clear lines and squares, and aim for the highest score!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Game Preview */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-border/50">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-xl mb-4 mx-auto flex items-center justify-center">
                    <Zap className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Game Preview</p>
                </div>
              </div>
            </div>

            {/* Game Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">🟦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Easy to learn, hard to master</h3>
                  <p className="text-muted-foreground text-sm">
                    Simple mechanics that anyone can pick up, with depth that keeps you coming back.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">🟨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Relaxing design with endless replayability</h3>
                  <p className="text-muted-foreground text-sm">
                    Soothing visuals and satisfying gameplay that you can enjoy anytime, anywhere.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-destructive font-bold">🟥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Available free on iOS and Android</h3>
                  <p className="text-muted-foreground text-sm">
                    Download now and start playing immediately - no barriers, just fun.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      App Store
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Google Play
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">More Games Coming Soon</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Tetdoku is just the beginning. We're working on more innovative and engaging experiences that will surprise
            and delight players around the world.
          </p>

          <Card className="max-w-md mx-auto p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <Star className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Stay Tuned</h3>
            <p className="text-muted-foreground text-sm">
              Follow us on social media to be the first to know about our upcoming releases.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
