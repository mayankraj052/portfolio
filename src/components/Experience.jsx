import experience from '../data/experience.json';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 w-1 bg-gray-200 h-full"></div>

          {experience.map((item, index) => (
            <div 
              key={index}
              className="relative md:flex md:items-center md:justify-between md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-10"></div>

              {/* Content Card */}
              <div className="md:w-5/12 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.position}</h3>
                <p className="text-gray-600 font-medium mb-2">{item.company}</p>
                <p className="text-indigo-600 text-sm mb-2">{item.duration}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
