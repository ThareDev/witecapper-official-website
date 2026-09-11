export default function Blog() {
  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-dark-1">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-center min-h-[40vh]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-crimson" />
            <span className="font-oswald text-xs tracking-[0.3em] uppercase text-crimson">Words</span>
            <div className="w-8 h-px bg-crimson" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-white">UNDER DEVELOPMENT</h2>
        </div>
      </div>
    </section>
  );
}