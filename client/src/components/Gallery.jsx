import { motion } from 'framer-motion';
import SectionHeading from './Common/SectionHeading';

const creators = [
  { name: 'YouTubers', icon: '▶' },
  { name: 'TikTokers', icon: '✨' },
  { name: 'Instagrammers', icon: '📸' },
  { name: 'Podcasters', icon: '🎙️' },
  { name: 'Streamers', icon: '🎮' },
  { name: 'Bloggers', icon: '✍️' },
  { name: 'Digital Artists', icon: '🎨' },
  { name: 'Fitness Creators', icon: '💪' },
  { name: 'Food Creators', icon: '🍜' },
  { name: 'Fashion Creators', icon: '👗' },
];

const Gallery = () => (
  <section id="gallery" className="relative overflow-hidden bg-[#05060a] py-24 sm:py-28">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,70,239,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),transparent_30%)]" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Eligibility"
        title="Who Can Apply?"
        description="We welcome creators across every niche, platform, and audience size. If you create — this is for you."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {creators.map((creator, index) => (
          <motion.div
            key={creator.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.03 }}
            className="flex flex-col items-center justify-center rounded-[1.25rem] border border-white/10 bg-slate-900/80 p-6 text-center shadow-[0_16px_50px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10"
          >
            <div className="text-4xl text-white">
              {creator.icon}
            </div>
            <p className="mt-4 text-base font-semibold text-white">{creator.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
