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
            <p className="text-lg text-muted-foreground text-pretty">Effective Date: September 2025</p>
          </div>

          <Card className="p-8">
            <CardContent className="p-0 prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Nervous Hippo LLC (“we,” “our,” “us”). By accessing or using our website, games, and related services (collectively, the “Services”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree, please do not use our Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You must be at least 13 years old, or have parental/guardian permission, to use our games. You agree to use the Services in a lawful manner and not engage in any activity that could harm, disrupt, or impair our Services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable license to access and play our games for personal, non-commercial use.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Some Services may require or allow you to create an account. You are responsible for maintaining the security of your account and any activity occurring under it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Purchases and In-App Content</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our games may offer optional in-app purchases. All purchases are processed through the App Store or Google Play Store and are subject to their respective terms. Purchases are generally non-refundable except where required by law or by the store’s policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Please review our <a href="/legal/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, features, and functionality of our Services, including game code, graphics, logos, and trademarks, are owned by Nervous Hippo LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Services are provided “as is” and “as available.” We do not guarantee that the Services will always be available, error-free, or secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent permitted by law, Nervous Hippo LLC will not be liable for any indirect, incidental, or consequential damages resulting from your use of our Services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may suspend or terminate your access to the Services if you violate these Terms or misuse the Services in any way.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms from time to time. The updated version will be posted here with a new “Effective Date.” Continued use of the Services constitutes acceptance of the revised Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms, please contact us at <a href="mailto:support@nervoushippo.com" className="text-blue-600 hover:underline">support@nervoushippo.com</a>.
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
