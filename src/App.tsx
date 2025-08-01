import { Background } from "@/components/layout/background"
import { Navigation } from "@/components/layout/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { EducationSection } from "@/components/sections/education"
import { ContactSection } from "@/components/sections/contact"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { skills } from "@/data/skills"
import { projects } from "@/data/projects"
import { experience } from "@/data/experience"
import { education } from "@/data/education"


function App() {
  const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"]
  const activeSection = useScrollSpy(sections)
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      <Background />
      <Navigation activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/30 bg-[#0a0a0f]/80 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            <span className="text-cyan-400">&copy;</span> {currentYear} Ville-Markus Aho | Full Stack developer | IT Engineer
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
