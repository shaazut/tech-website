import { Server, Shield, Cloud, Code } from "lucide-react"

const services = [
  {
    name: "Cloud Computing",
    description: "Leverage the power of cloud technology to scale your business and improve efficiency.",
    icon: Cloud,
  },
  {
    name: "Cybersecurity",
    description: "Protect your digital assets with our state-of-the-art security solutions.",
    icon: Shield,
  },
  {
    name: "Software Development",
    description: "Custom software solutions tailored to your specific business needs.",
    icon: Code,
  },
  {
    name: "IT Infrastructure",
    description: "Build and maintain a robust IT infrastructure to support your operations.",
    icon: Server,
  },
]

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive IT Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of IT services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

