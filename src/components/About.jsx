import profile from '../assets/profile.jpeg';
export default function About() {
    return (
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-1 md:order-none">
              <img 
                src={profile} 
                alt="Mayank Raj"
                className="rounded-2xl shadow-xl w-full h-auto max-w-md mx-auto"
              />
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="text-gray-600 text-lg">
                I'm a passionate Computer Science Engineering student with a strong interest in 
                Artificial Intelligence, Machine Learning, and Web Development. I specialize in building 
                scalable applications using modern technologies like React, TypeScript, and Deep Learning frameworks.
              </p>
              <p className="text-gray-600 text-lg">
                Currently, I am honing my skills in Cloud Computing, Rust, and DevOps, while also exploring 
                advanced AI concepts and ensemble learning techniques for medical data classification.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">📍 Location</span>
                  <span className="text-gray-600">Bihar, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">📧 Email</span>
                  <span className="text-gray-600">mayankrajsingh7646@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
