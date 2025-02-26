import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  // Place your resume.pdf in public folder
  const resumeUrl = '/resume.pdf';
  
  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Download Resume</h2>
        <a
          href={resumeUrl}
          download
          className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          Download PDF
        </a>
      </div>
    </section>
  );
}