import SocialLinks from "./SocialLinks";
export default function Hero() {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-indigo-600">Mayank Raj</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          "Seeking an opportunity to apply my technical skills in AI/ML, web
          development, and DevOps while continuously learning and contributing
          to innovative projects."
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}
