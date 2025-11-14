'use client';

import Image from 'next/image';
import clsx from 'clsx';

// --- Helper Function for Icons ---
const ServiceIcon = ({ iconKey }: { iconKey: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    brand: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6265 4.74701C11.5804 4.83917 11.5057 4.91389 11.4135 4.95997L10.1851 5.57417C9.83413 5.74967 9.83413 6.25053 10.1851 6.42601L11.4135 7.04023C11.5057 7.08629 11.5804 7.16103 11.6265 7.25319L12.2407 8.4816C12.4162 8.83257 12.917 8.83257 13.0925 8.4816L13.7067 7.25319C13.7528 7.16103 13.8275 7.08629 13.9197 7.04023L15.1481 6.42601C15.4991 6.25053 15.4991 5.74967 15.1481 5.57417L13.9197 4.95997C13.8275 4.91389 13.7528 4.83917 13.7067 4.74701L13.0925 3.5186C12.917 3.16763 12.4162 3.16763 12.2407 3.5186L11.6265 4.74701Z" fill="#FB580D" />
      </svg>
    ),
    website: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H28V24H4V8Z" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
    product: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
    nocode: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 16L6 12M22 16L26 20" stroke="#FB580D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    marketing: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
    pitch: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H28V24H4V8Z" stroke="#FB580D" strokeWidth="1.5" />
        <line x1="16" y1="8" x2="16" y2="24" stroke="#FB580D" strokeWidth="1.5" />
      </svg>
    ),
  };
  return icons[iconKey] || (
    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">Icon</div>
  );
};

// --- Services Data ---
const services = [
  {
    icon: 'brand',
    title: 'Brand Identity',
    images: [
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e791a46a6988998b800_Brand%20Identity%2001.avif', alt: 'Echo Ai Brand Identity', rotation: '-rotate-4', zIndex: 'z-20' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e78beffb341585f4927_Brand%20Identity%2002.png', alt: 'Dockin Brand Identity', rotation: 'rotate-4', zIndex: 'z-10', top: '-top-6', left: 'left-[22%]' },
    ],
  },
  {
    icon: 'website',
    title: 'Website Design',
    images: [
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e795e58f6f18e944761_Website%20design%2002.avif', alt: 'Website Design Example 1', rotation: '-rotate-4', zIndex: 'z-10' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e791f395f045567453f_Website%20design%2001.avif', alt: 'Website Design Example 2', rotation: 'rotate-4', zIndex: 'z-20', top: 'bottom-7', left: 'left-[25%]' },
    ],
  },
  {
    icon: 'product',
    title: 'Product Design',
    images: [
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e78e6c6a0608b939d1c_Product%20design%2001.avif', alt: 'Product Design Example 1', rotation: '-rotate-4', zIndex: 'z-20' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e788e0a77e2bf0533d6_Product%20design%2002.avif', alt: 'Product Design Example 2', rotation: 'rotate-4', zIndex: 'z-10', top: 'bottom-2', left: 'left-[14%]' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e7894f38b33d0014649_Product%20design%2003.png', alt: 'Product Design Example 3', rotation: 'rotate-8', zIndex: 'z-0', top: 'bottom-[12px]', left: 'left-[26%]' },
    ],
  },
  {
    icon: 'nocode',
    title: 'No-code Development',
    images: [
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e79d07f6199256cdcbc_No-code%20development%2001.avif', alt: 'No-code Example 1', rotation: '-rotate-4', zIndex: 'z-20' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e797ed568833799f8f2_No-code%20development%2002.avif', alt: 'No-code Example 2', rotation: 'rotate-4', zIndex: 'z-10', top: 'bottom-7', left: 'left-[25%]' },
    ],
  },
  {
    icon: 'marketing',
    title: 'Marketing Materials',
    images: [
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e784a873d746597aa6b_Marketing%20Materials%2001.avif', alt: 'Marketing Example 1', rotation: '-rotate-4', zIndex: 'z-20' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e79b941bfeec564ecb0_Marketing%20Materials%202.avif', alt: 'Marketing Example 2', rotation: 'rotate-4', zIndex: 'z-10', top: '-top-6', left: 'left-[22%]' },
    ],
  },
  {
    icon: 'pitch',
    title: 'Pitch Decks',
    images: [
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e79e083265006b75897_Pitch%20Decks%2001.avif', alt: 'Pitch Deck Example 1', rotation: '-rotate-4', zIndex: 'z-20' },
      { src: 'https://cdn.prod.website-files.com/675aaa451de0011e537740d8/689b0e79e3fa2bb986c26180_Pitch%20Decks%2002.avif', alt: 'Pitch Deck Example 2', rotation: 'rotate-4', zIndex: 'z-10', top: 'bottom-7', left: 'left-[25%]' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative" role="region" aria-label="Our Services">
      {/* Section Divider */}
      <div className="h-[64px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Section Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-8 py-7 pl-5 lg:pl-[46px] section-title-wrap">
          <p className="font-suisseMono lg:text-xl text-base leading-[24px] tracking-[0.14px] text-[#8F8F8F] mb-2 uppercase font-normal">
            Our Services
          </p>
          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium lg:leading-[68px] lg:-tracking-[1.6px] -tracking-[1.2px] text-dark-gray">
              <span>We Excel In</span>
            </h2>
          </div>
        </div>
        {/* Circles for decoration */}
        <div className="circle -left-4 -bottom-5" aria-hidden="true"></div>
        <div className="circle -top-5 -left-4" aria-hidden="true"></div>
        <div className="circle -right-1 -bottom-5 lg:-right-4" aria-hidden="true"></div>
        <div className="circle -top-5 -right-4" aria-hidden="true"></div>
      </div>

      {/* Service Cards */}
      <div className="border-b md:border-b-0 border-light-gray">
        <div className="border-t border-light-gray">
          <div className="container relative px-0">
            {/* Background pattern line */}
            <div className="bg-[url('https://cdn.prod.website-files.com/675aaa451de0011e537740d8/685d3f64f0209252bd7c37e5_line-border.png')] w-full absolute inset-y-0 left-0 hidden md:block pointer-events-none"></div>
            
            {/* Grid */}
            <div className="max-w-[1104px] mx-auto divide-x divide-y divide-light-gray grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative px-4 lg:px-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-[10px] lg:p-[6px] relative group",
                    "first:lg:border-l-0 last:border-r-0",
                    "lg:last:border-b-0"
                  )}
                >
                  <div className="bg-F8F8F8 rounded-[24px] p-8 h-[232px] flex flex-col justify-end overflow-hidden group-hover:bg-[#F0F0F0] transition-colors duration-300">
                    {/* Images Container */}
                    <div className="relative h-[86px] mb-7">
                      {service.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={clsx(
                            "rounded-[8px] bg-white shadow-[0_0.7px_1.4px_0_rgba(0,0,0,0.12),_0_1.4px_5.7px_0_rgba(0,0,0,0.08)] overflow-hidden absolute transition-all duration-300 hover:-translate-y-3 group-hover:-translate-y-3",
                            img.rotation,
                            img.zIndex || 'z-0',
                            img.top || 'top-0',
                            img.left || 'left-0',
                            imgIndex === 0 ? 'animate-bounce-down' : 'animate-bounce-down-2'
                          )}
                          style={{ width: '86px', height: '86px' }}
                        >
                          <Image
                            alt={img.alt}
                            fill
                            className="object-contain"
                            src={img.src}
                            sizes="86px"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Title and Icon */}
                    <div className="flex justify-between items-center">
                      <p className="font-suisse text-xl leading-[20px] text-dark-charcoal font-semibold">
                        {service.title}
                      </p>
                      <ServiceIcon iconKey={service.icon} />
                    </div>
                  </div>

                  {/* Per-Card Circles */}
                  <div className="circle -right-5 -bottom-5 hidden lg:block" aria-hidden="true"></div>
                  <div className="circle -left-5 -bottom-5 hidden lg:block" aria-hidden="true"></div>
                </div>
              ))}
            </div>

            {/* Container Circles */}
            <div className="circle -left-4 -bottom-5 hidden md:block" aria-hidden="true"></div>
            <div className="circle -right-4 -bottom-5 hidden md:block" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
