
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  const [counts, setCounts] = useState<{[key: number]: number}>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    STATS.forEach((stat, idx) => {
      const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
      if (isNaN(numericValue)) return;

      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCounts(prev => ({ ...prev, [idx]: numericValue }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [idx]: Math.floor(current) }));
        }
      }, duration / steps);
    });
  };

  const formatValue = (value: string, count: number | undefined) => {
    if (count === undefined) return value;
    const suffix = value.match(/[^0-9]+$/)?.[0] || '';
    const prefix = value.match(/^[^0-9]+/)?.[0] || '';
    return `${prefix}${count.toLocaleString('ar-SA')}${suffix}`;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0A5C8F] mb-2 group-hover:scale-110 transition-transform min-w-[100px]">
                {formatValue(stat.value, counts[idx])}
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
