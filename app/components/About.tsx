const About = () => {
  return (
    <div id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Driving Digital Transformation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Shaaz-Tech is a leading IT company dedicated to helping businesses leverage technology for growth and
            innovation.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                To empower businesses with cutting-edge technology solutions that drive efficiency, innovation, and
                growth.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Vision</h3>
              <p className="mt-2 text-base text-gray-500">
                To be the go-to partner for businesses seeking to thrive in the digital age through innovative IT
                solutions.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Expertise</h3>
              <p className="mt-2 text-base text-gray-500">
                With years of experience and a team of skilled professionals, we deliver tailored solutions that meet
                the unique needs of each client.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Commitment</h3>
              <p className="mt-2 text-base text-gray-500">
                We are committed to providing exceptional service, maintaining the highest standards of quality, and
                staying at the forefront of technological advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

