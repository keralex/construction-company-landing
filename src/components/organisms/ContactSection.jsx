import Container from "../atoms/Container"
import Heading from "../atoms/Heading"
import ContactInfo from "../molecules/ContactInfo"
import ContactForm from "../molecules/ContactForm"

function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Heading level={2}>Contáctanos</Heading>
              <p className="text-gray-500">
                Comunícate con nosotros para discutir tus necesidades de construcción o solicitar un presupuesto para tu
                proyecto.
              </p>
            </div>
            <ContactInfo />
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default ContactSection

