import { MapPin, Clock, ArrowRight } from "lucide-react"
import Button from "../atoms/Button"

function ProjectCard({ title, category, description, location, completion, image }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      <div className="p-6 space-y-1.5">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div className="p-6 pt-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>Finalización: {completion}</span>
        </div>
      </div>
      <div className="flex items-center p-6 pt-0">
        <Button variant="outline" className="w-full">
          Más Información <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard

