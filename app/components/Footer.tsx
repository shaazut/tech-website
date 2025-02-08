import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-white">Shaaz-Tech</span>
            <p className="text-gray-300 text-base">Innovative IT solutions for businesses of all sizes.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      IT Infrastructure
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#about" className="text-base text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#team" className="text-base text-gray-300 hover:text-white">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-base text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Shaaz-Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

