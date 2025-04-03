import Input from "../atoms/Input"
import Textarea from "../atoms/Textarea"
import Button from "../atoms/Button"

function ContactForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input id="name" label="Nombre" placeholder="Ingresa tu nombre" />
        <Input id="email" label="Correo Electrónico" type="email" placeholder="Ingresa tu correo" />
      </div>
      <Input id="subject" label="Asunto" placeholder="Ingresa el asunto" />
      <Textarea id="message" label="Mensaje" placeholder="Escribe tu mensaje" />
      <Button className="w-full">Enviar Mensaje</Button>
    </div>
  )
}

export default ContactForm

