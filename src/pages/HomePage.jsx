
import { useRef } from "react"
import Header from "../components/organisms/Header"
import HeroBanner from "../components/organisms/HeroBanner"
import AboutSection from "../components/organisms/AboutSection"
import ProjectsSection from "../components/organisms/ProjectsSection"
import ContactSection from "../components/organisms/ContactSection"
import Footer from "../components/organisms/Footer"

function HomePage() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main className="flex-1">
        <HeroBanner
          onContactClick={() => scrollToSection(contactRef)}
          onProjectsClick={() => scrollToSection(projectsRef)}
        />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

