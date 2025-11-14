// components/FAQ.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const faqItems = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer complete branding, UI/UX design, and web development — including landing pages, SaaS dashboards, Webflow/Framer/Next.js builds, and ongoing monthly design/dev support.",
  },
  {
    id: 2,
    question: "How does the Monthly Retainer subscription work?",
    answer:
      "Think of it like a gym membership, but for design & dev. You pay a flat fee each month and get access to our team. We'll talk about what you need, make a plan, and then get to work. You'll get regular updates and can always reach out with new requests.",
  },
  {
    id: 3,
    question: "What's the difference between the Monthly Subscription and Quick Launch?",
    answer:
      "<b>Monthly Subscription:</b> Like having designers and developers on your team. Pay monthly, get ongoing help, no contracts. You can ask for as many things as you want (we just do them one at a time).<br/><br/><b>Quick Launch:</b> Need just one thing done? This is perfect. You pay once, we do the work, and you're done. Great for single projects like 'I need a new website' or 'I need a logo.'",
  },
  {
    id: 4,
    question: "How soon can you start working together?",
    answer: "Typically within 3–7 days depending on current availability.",
  },
  {
    id: 5,
    question: "What do you need to get started?",
    answer:
      "Only 3 things: sign the proposal, agree to work together, and make your first payment. That's it! We keep it simple so we can start helping you quickly.",
  },
  {
    id: 6,
    question: "Can you work with tight deadlines?",
    answer:
      "Yes — if you have a tight deadline, tell us upfront and we’ll prioritize your project accordingly.",
  },
  {
    id: 7,
    question: "What if I don't have brand guidelines or a clear brand identity?",
    answer:
      "No worries — we can create your brand from scratch. Logo, typography, color palette, and a full mini style guide.",
  },
  {
    id: 8,
    question: "What platforms and technologies do you use for website development?",
    answer:
      "We mainly use Framer, Webflow, and Next.js to build websites. These tools help us create fast, good-looking websites that are easy for you to manage.",
  },
  {
    id: 9,
    question: "How many requests can I make with the subscription?",
    answer:
      "Unlimited. We just work on them one at a time (or more, depending on your plan).",
  },
  {
    id: 10,
    question: "How do we communicate and collaborate during projects?",
    answer:
      "Slack + Figma + Loom. Quick async updates with weekly or bi-weekly calls depending on your plan.",
  },
  {
    id: 11,
    question: "How do I provide feedback on designs and deliverables?",
    answer:
      "You can comment directly in Figma, send us a Loom video, or drop feedback via Slack.",
  },
  {
    id: 12,
    question: "Do you handle copywriting, or do I need to provide content?",
    answer:
      "Yes — we handle copywriting. We write in your tone and ensure it matches your brand personality.",
  },
  {
    id: 13,
    question: "Can I pause or cancel my subscription anytime?",
    answer:
      "Absolutely. No contracts. Pause or cancel anytime — you keep all work delivered.",
  },
  {
    id: 14,
    question: "What's your refund policy?",
    answer:
      "We don't offer refunds, but you're free to pause or cancel anytime and keep all work done so far.",
  },
];

// Accordion Toggle Icon
const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={clsx(
      "transition-transform size-5 flex-shrink-0 duration-300",
      isOpen && "rotate-90"
    )}
    aria-hidden="true"
  >
    <path
      d="M12 5V19"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        isOpen && "opacity-0",
        "transition-opacity duration-300"
      )}
    />
  </svg>
);

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqItems[0]?.id ?? null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative" role="region" aria-label="Frequently Asked Questions">
      <div className="h-[64px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Section Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-8 py-7 pl-5 lg:pl-[46px]">
          <p className="font-suisseMono lg:text-xl text-base leading-[24px] tracking-[0.14px] text-[#8F8F8F] mb-2 uppercase font-normal">
            FAQ
          </p>
          <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium text-dark-gray">
            <span>Questions?</span>
          </h2>
          <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium text-dark-gray-50">
            <span>Answers.</span>
          </h2>
        </div>
      </div>

      {/* FAQ List */}
      <div className="border-t border-light-gray">
        <div className="container grid lg:grid-cols-12 grid-cols-1 px-0">
          <div className="lg:col-span-9 relative border-r-0 lg:border-r border-light-gray">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={clsx(
                  "relative border-b border-light-gray",
                  index === faqItems.length - 1 && "lg:border-b-0"
                )}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-${item.id}`}
                  className="md:rounded-[24px] rounded-[14px] cursor-pointer md:m-5 m-3 block transition-all duration-300 w-[calc(100%-24px)] md:w-[calc(100%-40px)]"
                >
                  <div className="flex justify-between items-center gap-4 md:py-7 py-4 pl-4 pr-6">
                    <div className="flex md:gap-6 gap-4 items-center min-w-0 flex-1">
                      <p className="font-suisseMono font-normal md:text-xl text-xs text-[#8F8F8F] whitespace-nowrap flex-shrink-0">
                        / {String(item.id).padStart(2, '0')}
                      </p>
                      <p className="font-suisse font-normal md:text-xl lg:text-2xl text-base leading-[1.3] text-dark-gray">
                        {item.question}
                      </p>
                    </div>
                    <AccordionIcon isOpen={openId === item.id} />
                  </div>
                </button>

                <div
                  id={`faq-${item.id}`}
                  className={clsx(
                    "transition-all duration-500 ease-in-out overflow-hidden",
                    openId === item.id ? "max-h-[1000px] pb-7" : "max-h-0 pb-0"
                  )}
                >
                  <div className="md:ml-[90px] ml-16 md:pr-8 pr-4">
                    <p
                      className="font-suisse lg:text-xl md:text-base text-sm leading-relaxed font-normal text-dark-gray-50"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Fixed: correct logo reference */}
          <div className="lg:col-span-3 relative hidden lg:flex">
            <div className="bg-[url('/logo.png')] bg-dark-gray p-8 rounded-[24px] m-5 flex flex-col gap-9 items-start w-full bg-cover bg-center">
              <div className="rounded-[13px] overflow-hidden size-16 relative">
                <Image
                  alt="Codiezz Logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                  src="/logo.png"
                />
              </div>
              <p className="font-suisse text-2xl leading-tight text-white max-w-[180px]">
                Feel free to reach out whenever{" "}
                <span className="text-[#A2A2A2]">you have questions.</span>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto rounded-full px-5 py-3 text-white font-suisse text-base flex flex-col gap-4 bg-[#FFFFFF2E] border border-white/15 hover:bg-[#FFFFFF3F] transition-colors w-full"
                href="https://wa.me/"
              >
                <span>Ask a question</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
