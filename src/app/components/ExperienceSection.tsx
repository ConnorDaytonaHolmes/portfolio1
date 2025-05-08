export default function ExperienceSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white/[0.02]">
      <h2 className="heading text-3xl md:text-4xl mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto">
        {/* Experience 1 */}
        <div className="fade-in-section mb-12">
          <h3 className="text-xl mb-1">Company Name</h3>
          <p className="text-lg opacity-80 mb-2">Position Title</p>
          <p className="opacity-60 mb-4">Date Range</p>
          <p>Description placeholder. Replace with actual experience details.</p>
        </div>

        {/* Experience 2 */}
        <div className="fade-in-section delay-100">
          <h3 className="text-xl mb-1">Company Name</h3>
          <p className="text-lg opacity-80 mb-2">Position Title</p>
          <p className="opacity-60 mb-4">Date Range</p>
          <p>Description placeholder. Replace with actual experience details.</p>
        </div>
      </div>
    </section>
  );
}