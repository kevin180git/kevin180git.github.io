import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Terms of Service</h1>
            <p className="text-lg text-muted-foreground text-pretty">Last updated: January 2025</p>
          </div>

          <Card className="p-8">
            <CardContent className="p-0 prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using any services provided by Nervous Hippo LLC, you agree to be bound by these
                    Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nervous Hippo LLC provides mobile gaming applications and related services. Our games are designed
                    to be fun, approachable, and engaging for players of all ages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to use our services in a manner consistent with all applicable laws and regulations. You
                    will not engage in any activity that could harm, disable, or impair our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, features, and functionality of our games and services are owned by Nervous Hippo LLC
                    and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at
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
