import { motion } from 'framer-motion';
import SectionHeading from './Common/SectionHeading';

const features = [
  { icon: '🎤', title: 'Live Panels & Talks', body: 'Host your own stage session, Q&A, or join a creator roundtable. Real conversations with your real fans.' },
  { icon: '📸', title: 'Meet & Greet Booths', body: 'Dedicated creator booths where fans can interact, take photos, and grab exclusive merchandise.' },
  { icon: '🤝', title: 'Brand Collaborations', body: 'Connect with top-tier sponsors looking for authentic creator partnerships during the event.' },
  { icon: '🎮', title: 'Live Content Challenges', body: 'Compete in cross-creator content battles, streamed live for the audience and judged by fans.' },
  { icon: '🌐', title: 'Global Streaming Reach', body: 'The entire event is live-streamed to millions worldwide — your content extends far beyond the venue.' },
  { icon: '🎉', title: 'Creator After-Party', body: 'An exclusive closing night celebration — network, celebrate, and create memories off-camera too.' },
];

const About = () => (
  <section
  id="about"
  className="bg-[#0b0b0f] py-28 lg:py-36"
>
<div className="mx-auto max-w-[1700px] px-6 lg:px-12"> 
         <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}>
        <SectionHeading eyebrow="What Is FanFest 2026" title="Where Creators Meet Their Fans" description="Three days of panels, activations, live streams, brand collaborations, and unforgettable fan moments — all under one roof." />
      </motion.div>
<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">       
     {features.map((feature, index) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} 
          className="group rounded-[28px] border border-white/10 bg-[#17171d] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(255,70,70,0.12)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#381b22] text-3xl">{feature.icon}</div>
            <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-base leading-8 text-slate-400">{feature.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
