const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="max-w-3xl">
    <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">{eyebrow}</p>
    <h2 className="text-[60px] sm:text-[90px] lg:text-[40px]">{title}</h2>
    <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
  </div>
);

export default SectionHeading;
