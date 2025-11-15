// components/ProjectShowcase.tsx
'use client';

import Image from 'next/image';

const projects = [
  { 
    src: "/careerpath.png", 
    alt: "careerpath site", 
    caption: "Career Path Website", 
    widthLarge: 750, 
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370
  },
  {
    src: "/doda1.png",
    alt: "Doda Properties Website",
    caption: "Doda Properties Website",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370
  },
  {
    src: "/mess1.png",
    alt: "Suvarna Mess Services",
    caption: "Suvarna Mess Services",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370
  },
  {
    src: "/shravan1.png",
    alt: "Shravan Electricals Website",
    caption: "Shravan Electricals Website",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370
  },
  {
    src: "/preplyte1.png",
    alt: "Preplyte",
    caption: "Preplyte",
    widthLarge: 750,
    widthSmall: 562,
    heightLarge: 495,
    heightSmall: 370
  },
  // Add all your other projects here...
];

// Duplicate for seamless desktop marquee loop
const duplicatedProjects = [...projects, ...projects];

export default function ProjectShowcase() {
  return (
    <section 
      id="work" 
      className="relative" 
      role="region" 
      aria-label="Project Showcase"
    >
      {/* Section Divider - Visible on md+ */}
      <div className="h-[64px] w-full border-y border-light-gray hidden md:block"></div>

      {/* Section Title */}
      <div className="container relative section-title-container">
        <div className="lg:py-[2rem] py-7 pl-5 lg:pl-[46px] section-title-wrap">
          {/* Subtitle */}
          <p className="font-suisseMono lg:text-xl text-base leading-[24px] tracking-[0.14px] text-[#8F8F8F] mb-2 uppercase font-normal">
            Want to see our work?
          </p>

          {/* Main Title Line 1 */}
          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium lg:leading-[68px] lg:-tracking-[1.6px] -tracking-[1.2px] text-dark-gray">
              <span>Project</span>
            </h2>
          </div>

          {/* Main Title Line 2 */}
          <div className="title-wrapper overflow-hidden">
            <h2 className="section-title font-suisse lg:text-[60px] text-[32px] leading-[42px] font-medium lg:leading-[68px] lg:-tracking-[1.6px] -tracking-[1.2px] text-dark-gray-50">
              <span>Showcase</span>
            </h2>
          </div>
        </div>

        {/* Title Corner Circles */}
        <div className="circle -left-4 -bottom-5" aria-hidden="true"></div>
        <div className="circle -top-5 -left-4" aria-hidden="true"></div>
        <div className="circle -right-1 -bottom-5 lg:-right-4" aria-hidden="true"></div>
        <div className="circle -top-5 -right-4" aria-hidden="true"></div>
      </div>

      {/* Showcase Container */}
      <div className="border-t w-full border-b md:border-b-0 border-light-gray">
        <div className="container relative">
          <div className="overflow-hidden lg:border-x border-light-gray relative px-0">
            {/* Desktop Marquee - Infinite Scrolling Animation */}
            <div className="marquee-track hidden md:inline-block w-full">
              <div className="w-max gap-6 flex">
                {duplicatedProjects.map((project, index) => (
                  <div
                    key={`desktop-${index}`}
                    className="flex-shrink-0 my-8"
                    style={{ width: `${project.widthLarge}px` }}
                  >
                    {/* Desktop Image Container */}
                    <div className="relative rounded-xl overflow-hidden shadow-sm bg-F1F5F9 h-[333px] md:h-[445px] tab-img-wrap">
                      <Image
                        alt={project.alt}
                        loading={index < 3 ? "eager" : "lazy"}
                        width={project.widthLarge}
                        height={project.heightLarge}
                        className="object-cover w-full h-full"
                        src={project.src}
                      />
                    </div>

                    {/* Desktop Caption */}
                    <p className="font-suisse text-sm leading-[24px] text-[#6B7280] mt-3 font-normal text-center">
                      {project.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="flex overflow-x-auto scrollbar-none gap-4 md:hidden -mx-5 px-5 py-4">
              {projects.map((project, index) => (
                <div
                  key={`mobile-${index}`}
                  className="h-auto flex-shrink-0 flex flex-col gap-3 my-4"
                  style={{ width: `${project.widthSmall}px` }}
                >
                  {/* Mobile Image Container */}
                  <div className="h-[333px] overflow-hidden shadow-sm rounded-xl bg-F1F5F9 relative tab-img-wrap">
                    <Image
                      alt={project.alt}
                      loading="lazy"
                      width={project.widthSmall}
                      height={project.heightSmall}
                      className="object-cover w-full h-full"
                      src={project.src}
                    />
                  </div>

                  {/* Mobile Caption */}
                  <p className="font-suisse text-xs leading-4 text-dark-gray-50 font-normal text-center">
                    {project.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase Corner Circles - Hidden below md */}
          <div className="circle -left-4 -bottom-4 hidden md:block" aria-hidden="true"></div>
          <div className="circle -right-5 -bottom-5 hidden md:block" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
