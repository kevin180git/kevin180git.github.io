import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TetdokuPrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Tetdoku Privacy Policy</h1>
            <p className="text-lg text-muted-foreground text-pretty">Last updated: January 2025</p>
          </div>

          <Card className="p-8">
            <CardContent className="p-0 prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">About This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This privacy policy specifically covers the Tetdoku mobile game application. It explains how we
                    collect, use, and protect your information when you play Tetdoku.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Data Collection in Tetdoku</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tetdoku may collect gameplay data such as your high scores, level progress, and game preferences to
                    enhance your gaming experience and provide personalized content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Local Storage</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your game progress and settings are primarily stored locally on your device. This ensures your data
                    remains private and accessible even when offline.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use analytics tools to understand how players interact with Tetdoku, helping us improve the
                    game experience. This data is anonymized and aggregated.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tetdoku may integrate with platform services (App Store, Google Play) for features like leaderboards
                    or achievements. These services have their own privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions specific to Tetdoku's privacy practices, please contact us at
                    support@nervoushippo.com.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
