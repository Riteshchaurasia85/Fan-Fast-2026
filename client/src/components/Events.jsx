import { motion } from 'framer-motion';
import SectionHeading from './Common/SectionHeading';

const perks = [
  { number: '01', title: 'All-Access Badge', body: 'Backstage, VIP zones, creator lounge, and all event areas throughout the three days.' },
  { number: '02', title: 'Complimentary Accommodation', body: 'Hotel stay covered for the full duration of the event for verified creators.' },
  { number: '03', title: 'Dedicated Creator Stage', body: 'Your own scheduled time slot on the creator main stage or breakout rooms.' },
  { number: '04', title: 'Professional Content Crew', body: 'On-site videographers and photographers available to document your FanFest moments.' },
  { number: '05', title: 'Promotion Package', body: 'Featured on all official FanFest 2026 social media, website, and email marketing to 500K+ subscribers.' },
  { number: '06', title: 'Exclusive Merch Kit', body: 'Limited-edition FanFest 2026 creator merchandise kit sent to you before the event.' },
];

const Events = () => (
 <section
  id="events"
  className="bg-[#0b0b0f] py-28 lg:py-36"
>
    <div className="mx-auto max-w-[1700px] px-6 lg:px-12">
      <SectionHeading eyebrow="Creator Perks" title="What You Get" description="Every creator who joins FanFest 2026 gets a full support package designed to help you shine." />
      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {perks.map((perk, index) => (
          <motion.article key={perk.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="
group
rounded-[26px]
border
border-white/10
bg-[#17171d]
p-8
transition-all
duration-500
hover:-translate-y-2
hover:border-red-500/40
hover:shadow-[0_0_35px_rgba(255,70,70,0.12)]
">
            <p className="text-[52px] font-black leading-none text-[#ff4747]">{perk.number}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{perk.title}</h3>
            <p className="mt-3 text-base leading-8 text-slate-400">{perk.body}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
