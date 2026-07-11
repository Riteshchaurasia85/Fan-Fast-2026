import { motion } from 'framer-motion';
import SectionHeading from './Common/SectionHeading';

const timeline = [
  { step: '1', date: 'May 15 – Jun 30, 2026', title: 'Applications Open', body: 'Submit your creator application form with your details and profile links.' },
  { step: '2', date: 'July 1 – July 15, 2026', title: 'Review & Selection', body: 'Our team reviews all submissions. Shortlisted creators are contacted directly.' },
  { step: '3', date: 'July 20, 2026', title: 'Confirmation & Onboarding', body: 'Selected creators receive official confirmation, event details, and onboarding kit.' },
  { step: '4', date: 'August 14–16, 2026', title: 'FanFest 2026 — LIVE', body: 'Three days of content, connection, and unforgettable fan experiences.' },
];

const Schedule = () => (
  <section className="bg-[#111113] py-24 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Key Dates" title="Application Timeline" description="A simple path from application to the big stage." />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {timeline.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 text-lg font-semibold text-fuchsia-300">{item.step}</div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-400">{item.date}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-400">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Schedule;
