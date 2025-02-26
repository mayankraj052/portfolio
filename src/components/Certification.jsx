import certifications from "../data/certification.json";

export default function Certification() {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
              <p className="text-gray-600">From: <span className="font-medium">{cert.from}</span></p>
              {cert.marks && <p className="text-gray-600">Marks: {cert.marks}</p>}
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 hover:underline mt-2 inline-block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
