// components/Hero.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="md:border-y border-light-gray mt-[-28px] lg:mt-[-14px] relative overflow-hidden" 
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div className="container relative">
        <div className="lg:px-[46px] px-5 pt-[70px] pb-[46px] flex flex-col sm:flex-row justify-between items-start md:gap-[36px] gap-8">
          {/* Content Column */}
          <article className="flex flex-col w-full grow items-start md:gap-6 gap-5 max-w-[670px] pr-1">
            {/* Badge with Shine Effect */}
            <Link
              href="#cal"
              className="relative overflow-hidden flex items-center gap-1 py-1 px-2 rounded-full shine-effect bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors duration-300"
              aria-label="8 founders booked a call this week"
            >
              {/* Spinning Icon */}
              <svg
                width="16" 
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spinInfinity size-3 md:size-4 flex-shrink-0"
              >
                <path
                  d="M8.84166 0H7.15745V2.18947L7.7635 7.4356L4.48689 3.29601L2.9387 1.74781L1.74778 2.93873L3.29597 4.48692L7.44265 7.76915L2.18947 7.15787H0V8.84208H2.18947L7.44278 8.23078L3.29578 11.5133L1.74759 13.0615L2.93851 14.2524L4.4867 12.7042L7.76868 8.55781L7.15745 13.8105V16H8.84166V13.8105L8.23126 8.56486L11.5133 12.7042L13.0615 14.2524L14.2524 13.0615L12.7042 11.5133L8.57189 8.23689L13.8105 8.84208H16V7.15787H13.8105L8.57202 7.76304L12.704 4.48686L14.2522 2.93866L13.0613 1.74775L11.5131 3.29594L8.23642 7.42857L8.84166 2.18947V0Z"
                  fill="#272727"
                />
              </svg>

            
              {/* Arrow Icon */}
              <svg
                width="16" 
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M10.7807 7.33312L7.20468 3.75712L8.14735 2.81445L13.3327 7.99979L8.14735 13.1851L7.20468 12.2425L10.7807 8.66645H2.66602V7.33312H10.7807Z"
                  fill="#272727"
                />
              </svg>
            </Link>

            {/* Main Heading */}
            <div className="lg:max-w-[550px] max-w-[300px]">
              <h1 
                id="hero-heading"
                className="font-sans font-bold md:-tracking-[2.4px] -tracking-[1px] text-3xl lg:text-6xl leading-10 lg:leading-[68px]"
              >
                Full-Stack Digital Solutions
                <span className="text-[#939393]"> for </span>
                Startups &amp; Enterprises
              </h1>
            </div>

            {/* Description */}
            <p className="font-sans text-dark-gray max-w-[540px] text-base lg:text-lg leading-[24px]">
              Codiezz partners with founders and startups to build impactful web, mobile, AI, and automation solutions that turn ideas into growth and transform user experiences.
            </p>

            {/* CTA Button with Animated Text */}
            <div className="flex gap-3">
              <Link
                href="#cal"
                className="rounded-full font-sans lg:text-lg text-base leading-5 lg:leading-6 font-medium text-white -tracking-[0.5px] lg:py-[14px] py-[10px] lg:px-6 px-4 bg-[#272727E5] group cursor-pointer shadow-[inset_0_0_3px_2px_rgba(255,255,255,0.2),inset_0_0_12px_4px_rgba(255,255,255,0.13),0_4px_3px_-4px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_3px_2px_rgba(255,255,255,0.25),inset_0_0_12px_4px_rgba(255,255,255,0.18),0_4px_3px_-4px_rgba(0,0,0,0.55)] transition-all duration-300 ease-in-out"
                aria-label="Get Started"
              >
                <div className="lg:h-6 h-5 overflow-hidden relative">
                  <p className="animate-slideDown group-hover:animate-slideUp">Get Started</p>
                  <p className="animate-slideDown group-hover:animate-slideUp translate-y-full">Get Started</p>
                </div>
              </Link>
            </div>
          </article>

          {/* Video Column */}
          <div 
            data-lenis-prevent="true" 
            className="max-w-[560px] w-full grow lg:h-[410px] relative"
          >
            <video
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              className="w-full md:h-auto relative -z-10 object-cover rounded-xl shadow-sm"
              poster="https://via.placeholder.com/560x410?text=Hero+Video"
            >
              <source
                src="https://cdn.prod.website-files.com/66fa53d02ce68041b486bfa6/67516598468e03952b828432_Big%20Video-transcode.mp4"
                type="video/mp4"
              />
              <p className="text-center text-gray-500">
                Your browser does not support the video tag. 
                <Link href="#cal" className="underline"> Get in touch</Link> to learn more.
              </p>
            </video>
          </div>
        </div>

        {/* Corner Circle Decorations */}
        <div className="circle left-[-4px] bottom-[-5px] hidden md:block" aria-hidden="true"></div>
        <div className="circle right-[-4px] bottom-[-5px] hidden md:block" aria-hidden="true"></div>
        <div className="circle top-[-4px] left-[-4px] hidden md:block" aria-hidden="true"></div>
        <div className="circle right-[-4px] top-[-5px] hidden md:block" aria-hidden="true"></div>
      </div>
    </section>
  );
}
