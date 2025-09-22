import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground text-pretty">Effective Date: September 2025</p>
          </div>

          <Card className="p-8">
            <CardContent className="p-0 prose prose-lg max-w-none">
              <div className="space-y-8 text-foreground">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nervous Hippo LLC (“we,” “our,” “us”) collects information you provide directly to us, such as when you contact our support team. 
                    We may also collect certain information automatically when you use our website or games, including device type, operating system, gameplay activity, and analytics data.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We may also receive information from third parties, such as app stores (Apple, Google) in connection with purchases or app usage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our games, updates, or promotions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We may also use aggregated or anonymized data for analytics, research, and marketing purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell your personal information. We may share limited information with: 
                  </p>
                  <ul className="list-disc ml-6 text-muted-foreground leading-relaxed">
                    <li>Service providers (such as analytics or advertising partners)</li>
                    <li>App stores (Apple, Google) as required to process purchases</li>
                    <li>Legal authorities if required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Children’s Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Services are not directed at children under 13. If we learn we have collected personal information from a child under 13 without parental consent, we will delete it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You may disable analytics or advertising personalization through your device settings. You can also contact us to request deletion of personal information we may have collected.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable measures to protect your information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission or storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. International Users</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Services are operated in the United States. If you access them from outside the U.S., you consent to the transfer of your information to the U.S.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. The updated version will be posted here with a new “Effective Date.” Continued use of our Services constitutes acceptance of the revised policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@nervoushippo.com" className="text-blue-600 hover:underline">support@nervoushippo.com</a>.
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
