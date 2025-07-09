import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
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
              <h1 className="text-xl font-bold text-white">Kevin Lee</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-white hover:text-amber transition-colors">
                  About
                </a>
                <a href="#skills" className="text-white hover:text-amber transition-colors">
                  Skills
                </a>
                <a href="#projects" className="text-white hover:text-amber transition-colors">
                  Projects
                </a>
                <a href="#experience" className="text-white hover:text-amber transition-colors">
                  Experience
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
                src="/images/hippo.png?height=150&width=150"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto object-cover mb-6 border-4 border-amber/40 shadow-2xl"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cream drop-shadow-lg">Hybrid Mobile/Full Stack Developer</h1>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Seasoned Software Engineer with a proven track record of end-to-end
                ownership of complex systems and apps in the enterprise space.
              </p>
              <div className="flex justify-center gap-4">
                <a
                href="https://github.com/kevin180git/"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Button variant="ghost" size="icon" className="hover:bg-amber/20 text-white hover:text-amber">
                    <Github className="w-5 h-5" />
                    </Button>
                </a>
                <a
                href="https://www.linkedin.com/in/klee0805"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Button variant="ghost" size="icon" className="hover:bg-amber/20 text-white hover:text-amber">
                        <Linkedin className="w-5 h-5" />
                    </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-black/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Technical Skills</h2>
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
                    <Badge className="bg-secondary text-sand border-sand/20">JavaScript</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Tailwind CSS</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Vue</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Angular</Badge>
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
                  <Smartphone className="w-8 h-8 mb-2 text-terracotta" />
                  <CardTitle className="text-cream">Mobile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-sand border-sand/20">Typescript</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Objective-C</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Swift</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Ionic</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Capacitor</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20 hover:border-amber/40 transition-colors">
                <CardHeader>
                  <Globe className="w-8 h-8 mb-2 text-sage" />
                  <CardTitle className="text-cream">Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-secondary text-sand border-sand/20">git</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">SQL</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Sqlite</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Salesforce</Badge>
                    <Badge className="bg-secondary text-sand border-sand/20">Jenkins</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 bg-card border-amber/20 hover:border-amber/40">
                <CardHeader>
                  <img
                    src="/images/tetdoku.png"
                    alt="tetdoku"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center justify-between text-cream">
                    Tetdoku
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
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
                    Hybrid mobile game inspired by tetris and sudoku, with a few upgrades and personal styling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Capacitor
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Tailwind
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Android
                    </Badge>
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      iOS
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 bg-card border-amber/20 hover:border-amber/40">
                <CardHeader>
                  <img
                    src="/images/placeholder.png?height=200&width=400"
                    alt="Fitness challenge app"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center justify-between text-cream">
                    Fitness Challenge App
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-amber/20 text-sand hover:text-amber"
                      >
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
                    Fitness tracking app with social features, allowing users to create and join challenges, track workouts, and share progress.
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
                    src="/images/placeholder.png?height=200&width=400"
                    alt="Weather Analytics Dashboard"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="flex items-center justify-between text-cream">
                    Untitled cat game
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
                    Personally hobby game project, modeled after my friends cats.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-amber/40 text-sand">
                      Vue
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience & Education</h2>
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
                    <p className="text-muted-foreground">GPA: 3.62/4.0</p>
                    <p className="text-muted-foreground">
                      <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Video Game Design, Computer Networking, Cybersecurity
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-amber/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-cream"> Senior Software Engineer</CardTitle>
                      <CardDescription className="text-sand">Home Depot • 2017-2022</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-amber/40 text-sand">Experience</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Tech lead responsible for a hybrid mobile application using the Ionic framework and
                    Typescript
                    </li>
                    <li>Sole engineer with end-to-end ownership of complex systems in an enterprise space: managed SQL catalog revisions, CI/CD pipeline
                    deployments to cloud, backend API integration</li>
                    <li>Liaised directly with third-party vendors for application updates
                    and catalog management, while partnering with field users to
                    deliver support, gather feedback, and ensure solutions aligned
                    with real-world business workflows.
                    </li>
                    <li>Developed cloud-native Java web services using Spring Boot as
                    well as iOS applications in Objective-C and Swift
                    </li>
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
                    <li>Making hybrid mobile games for myself and friends!</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="relative py-16 px-4 bg-transparent overflow-hidden min-h-screen">


          {/* Footer content */}
          <div className="container mx-auto text-center relative z-10 flex items-end justify-center min-h-screen">
            <p className="text-sand drop-shadow-lg text-lg">
              &copy; 2025 Kevin Lee. Built with these hands 👊🏻🤜🏻 and AI.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
