import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Star } from "lucide-react"
import Link from "next/link"

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Our Games</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our collection of casual mobile games designed to entertain, challenge, and surprise you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Tetdoku Game Card */}
            <Card className="overflow-hidden">
              <Link 
                href="https://nervoushippo.com/tetdokuSupport/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-200"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                        src="/images/tetdokuPlain.png"
                        alt="Tetdoku Game Preview"
                        className="object-contain w-full h-full"
                      />  
                </div>
              </Link>
              <CardHeader>
                <Link 
                  href="https://nervoushippo.com/tetdokuSupport/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity duration-200"
                >
                  <CardTitle className="text-2xl">Tetdoku</CardTitle>
                
                <CardDescription className="text-base">
                  A relaxing yet challenging puzzle game that combines block placement with the strategy of Sudoku. Drag
                  and drop blocks, clear lines and squares, and aim for the highest score!
                </CardDescription>
                </Link>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">🟦</span>
                    <span className="text-sm text-muted-foreground">Easy to learn, hard to master</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent">🟨</span>
                    <span className="text-sm text-muted-foreground">Relaxing design with endless replayability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive">🟥</span>
                    <span className="text-sm text-muted-foreground">Available free on iOS and Android</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link 
                    href="https://apps.apple.com/us/app/tetdoku/id6748969433"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on the App Store"
                    className="flex-1">
                    <img 
                      src="/appStore.svg" 
                      alt="Download on the App Store"
                      className="h-12 w-auto mx-auto"
                    />
                  </Link>
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.nervoushippo.tetdoku&hl=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Google Play"
                    className="flex-1">
                    <img 
                      src="/googlePlay.png" 
                      alt="Get it on Google Play"
                      className="h-12 w-auto mx-auto"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Card */}
            <Card className="overflow-hidden border-dashed">
              <div className="aspect-video bg-muted/30 flex items-center justify-center">
                <Star className="h-16 w-16 text-muted-foreground/50" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-muted-foreground">More Games Coming Soon</CardTitle>
                <CardDescription className="text-base">
                  We're working on exciting new experiences that will push the boundaries of casual mobile gaming. Stay
                  tuned for announcements!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Follow us on social media to be the first to know about our upcoming releases and get exclusive
                  previews.
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
