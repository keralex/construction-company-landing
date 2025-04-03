import { Phone, Mail, MapPin, Clock } from "lucide-react"

function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Phone className="h-5 w-5 mr-2 text-primary-600" />
        <span>(555) 123-4567</span>
      </div>
      <div className="flex items-center">
        <Mail className="h-5 w-5 mr-2 text-primary-600" />
        <span>info@aedilconstruccion.com</span>
      </div>
      <div className="flex items-center">
        <MapPin className="h-5 w-5 mr-2 text-primary-600" />
        <span>Avenida Construcción 123, Ciudad Edificio, BC 12345</span>
      </div>
      <div className="flex items-center">
        <Clock className="h-5 w-5 mr-2 text-primary-600" />
        <span>Lunes - Viernes: 8:00 AM - 6:00 PM</span>
      </div>
    </div>
  )
}

export default ContactInfo

