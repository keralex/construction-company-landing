import Container from "../atoms/Container"
import Heading from "../atoms/Heading"
import Button from "../atoms/Button"
import ProjectCard from "../molecules/ProjectCard"
import project1Image from "../../assets/project1.jpg"
import project2Image from "../../assets/project2.jpg"
import project3Image from "../../assets/project3.jpg"

function ProjectsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Heading level={2}>Próximos Proyectos</Heading>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre nuestros innovadores proyectos de construcción actualmente en desarrollo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ProjectCard
            title="Torres Riverside"
            category="Desarrollo Comercial"
            description="Un moderno complejo de oficinas con elementos de diseño sostenible e instalaciones de última generación."
            location="Distrito Centro"
            completion="Q2 2026"
            image={project1Image}
          />
          <ProjectCard
            title="Residencias Valle Verde"
            category="Comunidad Residencial"
            description="Comunidad residencial ecológica con tecnología de hogar inteligente y comodidades comunitarias."
            location="Zona Residencial"
            completion="Q4 2025"
            image={project2Image}
          />
          <ProjectCard
            title="Centro de Innovación"
            category="Complejo Industrial"
            description="Instalación de fabricación avanzada diseñada para la eficiencia y adaptabilidad a diversas industrias."
            location="Zona Industrial"
            completion="Q3 2025"
            image={project3Image}
          />
        </div>
        <div className="flex justify-center mt-12">
          <Button>Ver Todos los Proyectos</Button>
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection

