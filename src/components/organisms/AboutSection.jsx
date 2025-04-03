import { HardHat, Ruler, Hammer, Truck } from "lucide-react"
import Container from "../atoms/Container"
import Heading from "../atoms/Heading"
import FeatureItem from "../molecules/FeatureItem"
import teamImage from "../../assets/team.png"

function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Heading level={2}>Sobre Aedil Construcción</Heading>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Con más de 20 años de experiencia, nos hemos establecido como líderes en la industria de la construcción.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src={teamImage || "/placeholder.svg"}
            alt="Equipo de Aedil"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-bold">Nuestra Misión</h3>
                <p className="text-gray-500 mt-2">
                  Ofrecer servicios de construcción excepcionales que superen las expectativas de los clientes,
                  manteniendo los más altos estándares de seguridad, calidad y sostenibilidad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nuestros Valores</h3>
                <p className="text-gray-500 mt-2">
                  Integridad, excelencia, innovación y compromiso con la satisfacción del cliente guían cada proyecto
                  que emprendemos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nuestra Experiencia</h3>
                <p className="text-gray-500 mt-2">
                  Desde desarrollos residenciales hasta complejos comerciales e instalaciones industriales, nuestro
                  diverso portafolio demuestra nuestra versatilidad y destreza técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <FeatureItem
            icon={HardHat}
            title="Equipo Experto"
            description="Profesionales cualificados con años de experiencia en la industria"
          />
          <FeatureItem
            icon={Ruler}
            title="Materiales de Calidad"
            description="Materiales premium para construcciones duraderas"
          />
          <FeatureItem
            icon={Hammer}
            title="Trabajo de Precisión"
            description="Atención al detalle en cada aspecto de la construcción"
          />
          <FeatureItem
            icon={Truck}
            title="Entrega Puntual"
            description="Comprometidos con el cumplimiento de los plazos del proyecto"
          />
        </div>
      </Container>
    </section>
  )
}

export default AboutSection

