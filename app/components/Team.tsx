import Image from "next/image"

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Brown",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const Team = () => {
  return (
    <div id="team" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Experts Behind Shaaz-Tech
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our diverse team of skilled professionals is dedicated to delivering innovative IT solutions.
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.name} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-center p-6 space-x-6">
                  <Image
                    className="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0"
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                  />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Team

