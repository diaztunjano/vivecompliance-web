"use client";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export const FeaturesTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["start 10%", "end 90%"] : ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (data.length <= 1) return;

      // Calculate which section is currently in view
      const sectionHeight = 1 / data.length;
      const newIndex = Math.min(
        data.length - 1,
        Math.floor(value / sectionHeight)
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, data.length, activeIndex]);

  return (
    <div
      className="w-full bg-background font-sans relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 mb-16 sm:mb-24"
        >
          <motion.h2
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Nuestros
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text tracking-tight">
              Servicios
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0"
          >
            Soluciones integrales para el cumplimiento normativo y la gestión de riesgos
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative max-w-7xl mx-auto">
          <AnimatePresence>
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex justify-start pt-16 md:pt-40 md:gap-16"
              >
                <div className="sticky flex flex-col md:flex-row z-30 items-start top-32 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="hidden md:block md:pl-16 lg:pl-20 xl:pl-24">
                    <h3
                      className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-tight pb-1 bg-gradient-to-r text-transparent bg-clip-text transition-all duration-300 ${
                        activeIndex === index
                          ? 'from-primary to-primary/90 scale-[1.02] origin-left'
                          : 'from-primary/60 to-primary/80'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium tracking-wide mt-2 transition-opacity duration-300 ${
                      activeIndex === index ? 'opacity-100' : 'opacity-80'
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative pl-20 pr-4 md:pl-6 lg:pl-8 w-full">
                  <div className="md:hidden block mb-8 text-left">
                    <h3 className="text-3xl font-bold leading-relaxed pb-1 bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text">
                      {item.title}
                    </h3>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium tracking-wide mt-2">
                      {item.subtitle}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`transition-all duration-500 ${
                      activeIndex === index ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.98]'
                    }`}
                  >
                    {item.content}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className={`absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-primary/60 to-primary ${
                isMobile ? 'from-[0%] to-[100%]' : 'from-[0%] via-[10%]'
              } rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};