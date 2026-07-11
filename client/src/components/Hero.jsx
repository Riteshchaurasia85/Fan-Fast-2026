import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: 'AUG 14–16', label: 'Event Dates' },
  { value: '2026', label: 'Edition' },
  { value: '50K+', label: 'Expected Fans' },
  { value: '200+', label: 'Creator Spots' },
];

const featureItems = ['Creator Panels', 'Meet & Greet Booths', 'Live Challenges', 'After Party'];

const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07070b] px-4 pt-1 pb-1 sm:px-6 lg:px-8"
  >
    <div className="absolute inset-0 radial-gradient(circle at top, rgb(14 12 14 / 28%), transparent 32%), radial-gradient(circle at bottom right, rgb(18 3 32 / 20%), transparent 28%)" />
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl text-center">

          <p className="mb-6 inline-flex rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-fuchsia-200">
            🎬 Open Applications — Limited Spots
          </p>

          <h1 className="font-black leading-[0.9] tracking-[-0.04em] text-[80px] sm:text-[110px] lg:text-[100px]">
            CREATE.
            <br />
            <span className="text-red-500">CONNECT.</span>
            <br />
            DOMINATE.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            FanFest 2026 is calling on creators like you to be part of the biggest fan-powered event of the year. Share your world, grow your audience, and make history.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-fuchsia-400"
            >
              Apply as a Creator
              <ArrowRight className="ml-2" size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
            >
              <Play className="mr-2" size={18} />
              Learn More
            </a>
          </div>

       

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <h3 className="text-4xl font-extrabold uppercase tracking-tight text-amber-400">
                  {item.value}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
