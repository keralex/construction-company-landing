import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "../atoms/Button"
import Container from "../atoms/Container"
import Heading from "../atoms/Heading"

// Importa las imágenes directamente
import bannerImage1 from "../../assets/banner1.jpg"
import bannerImage2 from "../../assets/banner2.jpg"
import bannerImage3 from "../../assets/banner3.jpg"

const slides = [
  {
    id: 1,
    title: "Construyendo el Mundo del Mañana Hoy",
    description:
      "Aedil Construcción ofrece excelencia en proyectos de construcción comercial, residencial e industrial con precisión e integridad.",
    image: bannerImage1,
    primaryCta: { text: "Solicitar Consulta", action: "contact" },
    secondaryCta: { text: "Ver Nuestros Proyectos", action: "projects" },
  },
  {
    id: 2,
    title: "Excelencia en Construcción Desde 2003",
    description: "Dos décadas entregando proyectos de construcción de alta calidad a tiempo y dentro del presupuesto.",
    image: bannerImage2,
    primaryCta: { text: "Nuestros Servicios", action: "services" },
    secondaryCta: { text: "Sobre Nosotros", action: "about" },
  },
  {
    id: 3,
    title: "Soluciones de Construcción Premiadas",
    description: "Reconocidos por nuestro enfoque innovador y compromiso con prácticas de construcción sostenibles.",
    image: bannerImage3,
    primaryCta: { text: "Ver Nuestros Premios", action: "awards" },
    secondaryCta: { text: "Contáctanos", action: "contact" },
  },
]

function HeroBanner({ onContactClick, onProjectsClick }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleCtaClick = (action) => {
    if (action === "contact") {
      onContactClick()
    } else if (action === "projects") {
      onProjectsClick()
    }
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  return (
    <div
      className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`Banner ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <Container className="relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`space-y-4 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0 absolute"
                }`}
                style={{ display: currentSlide === index ? "block" : "none" }}
              >
                <div className="space-y-2">
                  <Heading level={1} className="text-white">
                    {slide.title}
                  </Heading>
                  <p className="max-w-[600px] text-white/90 md:text-xl">{slide.description}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button onClick={() => handleCtaClick(slide.primaryCta.action)}>{slide.primaryCta.text}</Button>
                  <Button variant="secondary" onClick={() => handleCtaClick(slide.secondaryCta.action)}>
                    {slide.secondaryCta.text}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Diapositiva anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Siguiente diapositiva"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroBanner

