"use client"

import { useState } from "react"
import { Building2, Menu, X } from "lucide-react"
import Button from "../atoms/Button"
import Container from "../atoms/Container"

function Header({ onAboutClick, onProjectsClick, onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">AEDIL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <button onClick={onAboutClick} className="text-sm font-medium transition-colors hover:text-primary-600">
              Nosotros
            </button>
            <button onClick={onProjectsClick} className="text-sm font-medium transition-colors hover:text-primary-600">
              Proyectos
            </button>
            <button onClick={onContactClick} className="text-sm font-medium transition-colors hover:text-primary-600">
              Contacto
            </button>
          </nav>

          <Button onClick={onContactClick} className="hidden md:inline-flex">
            Solicitar Presupuesto
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
          <Container>
            <div className="py-2 flex flex-col">
              <button
                onClick={() => {
                  onAboutClick()
                  setMobileMenuOpen(false)
                }}
                className="py-2 text-sm font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => {
                  onProjectsClick()
                  setMobileMenuOpen(false)
                }}
                className="py-2 text-sm font-medium"
              >
                Proyectos
              </button>
              <button
                onClick={() => {
                  onContactClick()
                  setMobileMenuOpen(false)
                }}
                className="py-2 text-sm font-medium"
              >
                Contacto
              </button>
              <Button
                onClick={() => {
                  onContactClick()
                  setMobileMenuOpen(false)
                }}
                className="my-2"
              >
                Solicitar Presupuesto
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Header

