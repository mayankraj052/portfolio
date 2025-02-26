import { FaReact, FaRust, FaJava, FaPython, FaDatabase, FaAws } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiMysql, SiTensorflow } from "react-icons/si";
import skills from "../data/skills.json";

const iconMap = {
  react: <FaReact className="text-indigo-600 text-3xl" />,
  rust: <FaRust className="text-orange-600 text-3xl" />,
  java: <FaJava className="text-red-600 text-3xl" />,
  database: <FaDatabase className="text-green-600 text-3xl" />,
  express: <SiExpress className="text-gray-600 text-3xl" />,
  nextjs: <SiNextdotjs className="text-black text-3xl" />,
  python: <FaPython className="text-yellow-600 text-3xl" />,
  sql: <SiMysql className="text-blue-600 text-3xl" />,
  ml: <SiTensorflow className="text-orange-500 text-3xl" />, // ML icon using TensorFlow
  aws: <FaAws className="text-yellow-500 text-3xl" /> // AWS icon added
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mb-2">{iconMap[skill.icon] || "🔧"}</div> {/* Default icon if not found */}
              <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
