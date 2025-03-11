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

  return (
    <div
      className="w-full bg-background font-sans relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 mb-16 sm:mb-20"
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
                className="flex justify-start pt-12 md:pt-32 md:gap-16"
              >
                <div className="sticky flex flex-col md:flex-row z-30 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-background flex items-center justify-center shadow-lg">
                    <div className="h-5 w-5 rounded-full bg-primary border-2 border-primary/20 transition-all duration-300" />
                  </div>
                  <div className="hidden md:block md:pl-24">
                    <h3 className="text-2xl md:text-5xl font-bold leading-relaxed pb-1 bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text">
                      {item.title}
                    </h3>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium tracking-wide mt-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <div className="md:hidden block mb-6 text-left">
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