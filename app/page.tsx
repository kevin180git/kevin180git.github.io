import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Smartphone } from "lucide-react"
import { ScrollBackground } from "@/components/scroll-background"
import { NorthernLights } from "@/components/northern-lights"

export default function Portfolio() {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Dynamic scroll-based background */}
      <ScrollBackground />

      {/* Northern lights and stars effect */}
      <NorthernLights />

      {/* All content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm border-b border-amber/20 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-amber">Kevin Lee</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-sand hover:text-amber transition-colors">
                  About
                </a>
                <a href="#skills" className="text-sand hover:text-amber transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-sand hover:text-amber transition-colors">
                  Projects
                </a>
                <a href="#experience" className="text-sand hover:text-amber transition-colors">
                  Experience
                </a>
                <a href="#contact" className="text-sand hover:text-amber transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="relative pt-20 pb-16 px-4 overflow-hidden">
          {/* Background Ghibli landscape image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/ghibli-landscape.png"
              alt="Serene Ghibli-style landscape"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=150&width=150"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-amber/40 shadow-2xl"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cream drop-shadow-lg">Full Stack Developer</h1>
              <p className="text-xl text-sand mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Computer Science graduate passionate about building scalable web applications and solving complex
                problems with clean, efficient code.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Button size="lg" className="gap-2 bg-terracotta hover:bg-terracotta/90 text-background shadow-xl">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-background/80 text-amber border-amber hover:bg-background/90 shadow-xl"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-amber/20 text-sand hover:text-amber">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-amber/20 text-sand hover:text-amber">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-amber/20 text-sand hover:text-amber">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-black/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card border-amber/20 hover:border-amber/40 transition-colors">
                <CardHeader>
                  <Code className="w-8 h-8 mb-2 text-amber" />
                  <CardTitle className="text-cream">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-sand border-sand/20">React</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Next.js</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">TypeScript</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Tailwind CSS</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Vue.js</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20 hover:border-amber/40 transition-colors">
                <CardHeader>
                  <Database className="w-8 h-8 mb-2 text-teal" />
                  <CardTitle className="text-cream">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-sand border-sand/20">Node.js</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Python</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Java</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">PostgreSQL</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20 hover:border-amber/40 transition-colors">
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2 text-sage" />
                  <CardTitle className="text-cream">Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-sand border-sand/20">AWS</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Docker</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Kubernetes</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">CI/CD</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Vercel</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20 hover:border-amber/40 transition-colors">
                <CardHeader>
                  <Smartphone className="w-8 h-8 mb-2 text-terracotta" />
                  <CardTitle className="text-cream">Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-sand border-sand/20">Git</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Linux</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Figma</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Jest</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 bg-card border-amber/20 hover:border-amber/40">
                <CardHeader>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="E-commerce Platform"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center justify-between text-cream">
                    E-commerce Platform
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Stripe
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Tailwind
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 bg-card border-amber/20 hover:border-amber/40">
                <CardHeader>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Task Management App"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center justify-between text-cream">
                    Task Management App
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Collaborative project management tool with real-time updates, drag-and-drop functionality, and team
                    collaboration features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Socket.io
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 bg-card border-amber/20 hover:border-amber/40">
                <CardHeader>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Weather Analytics Dashboard"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center justify-between text-cream">
                    Weather Analytics Dashboard
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Data visualization dashboard displaying weather patterns and analytics with interactive charts and
                    maps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Vue.js
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      D3.js
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      FastAPI
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 bg-black/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-amber">Experience & Education</h2>
            <div className="space-y-8">
                <Card className="bg-card border-amber/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-cream">Bachelor of Science in Computer Science</CardTitle>
                      <CardDescription className="text-sand">Georgia Institute of Technology • 2014-2018</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-amber/40 text-sand">Education</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">GPA: 3.62/4.0 • Dean's List</p>
                    <p className="text-muted-foreground">
                      <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Software
                      Engineering, Computer Networks, Machine Learning
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-cream">Software Engineer</CardTitle>
                      <CardDescription className="text-sand">Home Depot • 2017-2022</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-amber/40 text-sand">Experience</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Developed and maintained React components for customer-facing web applications</li>
                    <li>Collaborated with senior developers to implement new features and fix bugs</li>
                    <li>Participated in code reviews and agile development processes</li>
                    <li>Improved application performance by 25% through code optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-cream">Freelance Mobile/Web Developer</CardTitle>
                      <CardDescription className="text-sand">Self-Employed • 2022-Present</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Freelance
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built custom websites and web applications for small businesses</li>
                    <li>Managed client relationships and project timelines</li>
                    <li>Delivered 15+ projects with 100% client satisfaction rate</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-amber">Let's Work Together</h2>
            <p className="text-lg text-sand mb-8">
              I'm always interested in new opportunities and exciting projects. Let's discuss how I can contribute to
              your team.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="gap-2 bg-terracotta hover:bg-terracotta/90 text-background shadow-xl">
                <Mail className="w-4 h-4" />
                kevinlee850805@gmail.com
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-background/80 text-amber border-amber hover:bg-background/90 shadow-xl"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 px-4 border-t border-amber/20 bg-transparent overflow-hidden min-h-screen">


          {/* Footer content */}
          <div className="container mx-auto text-center relative z-10 flex items-center justify-center min-h-screen">
            <p className="text-sand drop-shadow-lg text-lg">
              &copy; 2024 Kevin Lee. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
