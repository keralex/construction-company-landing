import { Building2 } from "lucide-react"
import Container from "../atoms/Container"

function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">AEDIL</span>
          </div>
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {new Date().getFullYear()} Aedil Construcción. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary-600">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary-600">
              Términos de Servicio
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

