import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  // Safe window height check for SSR
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh(); // Set on mount
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  const { scrollY } = useScroll();

  // Scroll mapping: 
  // As the user scrolls from 0 to 100vh (the Hero height), 
  // the text precisely fades in and slides up. We stagger the start/end points.

  // Section 1: Context Label
  const y1 = useTransform(scrollY, [0, vh * 0.4], [80, 0]);
  const opacity1 = useTransform(scrollY, [0, vh * 0.3], [0, 1]);

  // Section 2: Education
  const y2 = useTransform(scrollY, [vh * 0.1, vh * 0.5], [80, 0]);
  const opacity2 = useTransform(scrollY, [vh * 0.1, vh * 0.4], [0, 1]);

  // Section 3: Experience
  const y3 = useTransform(scrollY, [vh * 0.2, vh * 0.6], [80, 0]);
  const opacity3 = useTransform(scrollY, [vh * 0.2, vh * 0.5], [0, 1]);

  // Section 4: Focus
  const y4 = useTransform(scrollY, [vh * 0.3, vh * 0.7], [80, 0]);
  const opacity4 = useTransform(scrollY, [vh * 0.3, vh * 0.6], [0, 1]);

  return (
    <section className="h-screen w-full bg-white text-black font-sans px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 w-full max-w-[1600px] mx-auto">

        {/* Left Column: Context Label & Profile Picture */}
        <motion.div
          className="md:col-span-4 lg:col-span-4 pt-2 flex flex-col justify-between gap-6"
          style={{ y: y1, opacity: opacity1 }}
        >
          <div>
            <h2 className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-4">
              Background & Data
            </h2>

            {/* Profile Image Frame */}
            <div className="relative group overflow-hidden rounded-2xl border border-black/15 shadow-xl bg-neutral-100 max-w-[280px] md:max-w-full aspect-[4/5] flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Deepanshu Tripathi"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if profile.jpg is not added yet
                  e.currentTarget.style.display = 'none';
                  const fallbackEl = e.currentTarget.parentElement?.querySelector('.profile-fallback');
                  if (fallbackEl) fallbackEl.classList.remove('hidden');
                }}
              />
              <div className="profile-fallback hidden absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-100 to-neutral-200 text-black/70 p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center mb-3 border border-black/10">
                  <svg className="w-10 h-10 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-black/60">Your Photo Here</span>
                <span className="font-sans text-[10px] text-black/40 mt-1">Add profile.jpg to /public</span>
              </div>
            </div>

            {/* Sub-label */}
            <div className="flex items-center gap-2 mt-3 text-xs font-semibold uppercase tracking-wider text-black/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Deepanshu Tripathi</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Data List */}
        <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-10 md:gap-12">

          {/* 01. EDUCATION */}
          <motion.div style={{ y: y2, opacity: opacity2 }} className="flex flex-col gap-2">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-wide opacity-100 mb-1">
              01. Education
            </h3>
            <div className="flex flex-col">
              <p className="font-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                United Institute of Technology, Prayagraj
              </p>
              <p className="font-sans text-lg md:text-xl lg:text-2xl font-normal text-black/70 leading-tight tracking-tight mt-1">
                Bachelor of Technology in Computer Science & Engineering · Graduation: 2028
              </p>
            </div>
          </motion.div>

          {/* 02. EXPERIENCE */}
          <motion.div style={{ y: y3, opacity: opacity3 }} className="flex flex-col gap-2">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-wide opacity-100 mb-1">
              02. Experience
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                  Code Resite
                </p>
                <p className="font-sans text-lg md:text-xl lg:text-2xl font-normal text-black/70 leading-tight tracking-tight">
                  Software Engineering Intern (June 2025 – July 2025 | Remote)
                </p>
                <p className="font-sans text-sm md:text-base font-medium text-black/60 leading-normal tracking-tight mt-1">
                  Contributed to full-stack web features across core project modules, refactored backend REST endpoints, and optimized database queries to reduce latency while improving route execution speed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 03. FOCUS */}
          <motion.div style={{ y: y4, opacity: opacity4 }} className="flex flex-col gap-2">
            <h3 className="font-sans text-xs md:text-sm font-bold uppercase tracking-wide opacity-100 mb-1">
              03. Technical Focus
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="font-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                Full-Stack Engineering & Scalable AI Workflow Design
              </li>
              <li className="font-sans text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                Real-Time WebSockets, Multi-Agent Systems & Cloud Deployments
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;