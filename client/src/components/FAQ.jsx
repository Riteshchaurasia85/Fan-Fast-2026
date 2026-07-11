import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './Common/SectionHeading';

const faqItems = [
  { question: 'Is there a minimum follower count to apply?', answer: "There's no hard minimum — we evaluate creators holistically based on content quality, engagement, and audience connection. Even nano-creators with highly engaged communities are welcome." },
  { question: 'Is travel reimbursement provided?', answer: 'We cover accommodation for all selected creators. Travel reimbursement is offered on a case-by-case basis for international creators. Details are shared in your acceptance letter.' },
  { question: 'Can I apply as a team or co-creators?', answer: 'Yes! You can apply as a duo or small team. Each member should be listed in the application and all relevant social links included.' },
  { question: 'What is the Creator Code of Conduct?', answer: 'FanFest 2026 requires all participating creators to maintain a respectful, inclusive environment for fans and fellow creators. The full CoC is available on our website.' },
  { question: 'Will I be paid to participate?', answer: 'Selected creators receive a comprehensive perks package including accommodation, a dedicated stage slot, and promotional exposure. Paid partnerships are available separately through our brand matching program.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#111113] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Got Questions?" description="Everything you need to know about eligibility, perks, and participation at FanFest 2026." />
        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => (
            <motion.div key={item.question} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[1.5rem] border border-white/10 bg-white/5">
              <button className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <span className="text-lg font-semibold text-white">{item.question}</span>
                <ChevronDown className={`transition ${openIndex === index ? 'rotate-180 text-fuchsia-400' : 'text-slate-400'}`} />
              </button>
              {openIndex === index && <p className="px-6 pb-6 text-slate-400">{item.answer}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
