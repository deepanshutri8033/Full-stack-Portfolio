import React, { useEffect, useRef, useState } from "react";

const MagicBento = () => {
  return (
    <section className="w-full bg-black text-white py-32 border-t border-white/20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-2">
              Impact & Key Metrics
            </h2>
            <p className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Measurable Performance.
            </p>
          </div>
          <p className="font-sans text-xs md:text-sm text-white/50 max-w-md uppercase tracking-wider">
            Proven track record across competitive hackathons, algorithmic problem solving, stateful AI workflows, and distributed microservices.
          </p>
        </div>

        {/* Strict Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-28 pb-24 border-b border-white/15">

          <SwissItem
            value={2}
            suffix="×"
            label="Hackathon Finalist"
            description="JanNetra smart AI governance platform secured finalist standing competing against 100+ teams."
          />

          <SwissItem
            value={300}
            suffix="+"
            label="Algorithmic Challenges"
            description="Solved 300+ complex algorithmic and data structures challenges across LeetCode and GeeksforGeeks."
          />

          <SwissItem
            value={40}
            suffix="%"
            label="Code Gen & Triage Efficiency"
            description="Accelerated code generation with stateful LangGraph multi-agent streaming and cut hallucination rate by 35%."
          />

          <SwissItem
            value={50}
            suffix="+"
            label="Concurrent Streaming"
            description="Engineered sub-100ms microservices backend handling 50+ concurrent requests via Nginx API Gateway & Redis Pub/Sub."
          />

        </div>

        {/* Awards & Certifications Showcase */}
        <div className="pt-24">
          <div className="mb-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              Awards & Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/20 p-8 hover:border-white transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-3">2026 · HACKATHON</span>
                <h4 className="font-sans text-xl font-bold uppercase tracking-tight mb-2">2× Hackathon Finalist</h4>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Finalist competing against 100+ teams for building JanNetra, an AI civic governance and automated municipal triage platform.
                </p>
              </div>
              <span className="font-mono text-xs text-white/50 mt-6 block">JanNetra Platform</span>
            </div>

            <div className="border border-white/20 p-8 hover:border-white transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-3">2025 · CERTIFICATION</span>
                <h4 className="font-sans text-xl font-bold uppercase tracking-tight mb-2">Full-Stack & DSA</h4>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Apna College certification covering production web development, distributed architecture, and advanced Data Structures & Algorithms.
                </p>
              </div>
              <span className="font-mono text-xs text-white/50 mt-6 block">Apna College Programs</span>
            </div>

            <div className="border border-white/20 p-8 hover:border-white transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-3">2025 · COMPETITIVE</span>
                <h4 className="font-sans text-xl font-bold uppercase tracking-tight mb-2">Competitive Programming</h4>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Solved 300+ algorithmic challenges across LeetCode & GeeksforGeeks, focusing on graph algorithms, dynamic programming, and system optimization.
                </p>
              </div>
              <span className="font-mono text-xs text-white/50 mt-6 block">LeetCode & GFG (300+)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SwissItem = ({ value, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.4 } // Swiss: intentional visibility
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const duration = 1200;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={ref} className="flex flex-col items-start">

      {/* Label */}
      <span className="mb-4 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-white">
        {label}
      </span>

      {/* Number */}
      <h3 className="mb-6 font-sans text-8xl md:text-9xl font-bold tracking-tight leading-none">
        {count.toLocaleString()}
        {suffix}
      </h3>

      {/* Description */}
      <p className="max-w-sm font-sans text-base leading-6 text-white/65">
        {description}
      </p>
    </div>
  );
};

export default MagicBento;
