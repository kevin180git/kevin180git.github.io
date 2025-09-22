import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Legal Information</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Important legal documents and policies for Nervous Hippo LLC and our games.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Terms of Service</span>
                </CardTitle>
                <CardDescription>
                  General terms and conditions for using Nervous Hippo LLC services and games.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/legal/terms">View Terms of Service</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Privacy Policy</span>
                </CardTitle>
                <CardDescription>
                  How we collect, use, and protect your personal information across our services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/legal/privacy">View Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-destructive" />
                  <span>Tetdoku Privacy</span>
                </CardTitle>
                <CardDescription>Specific privacy policy for the Tetdoku mobile game application.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/legal/tetdoku-privacy">View Tetdoku Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-muted/20">
              <CardContent className="p-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you have any questions about our legal policies or need clarification on any terms, please don't
                  hesitate to contact us at{" "}
                  <Link href="mailto:support@nervoushippo.com" className="text-primary hover:underline">
                    support@nervoushippo.com
                  </Link>
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
