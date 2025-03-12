"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface SponsorProps {
  id: string;
  description: string;
  image: string;
  className?: string;
}

const sponsors: SponsorProps[] = [
  {
    id: "41",
    description: "Sponsor 41",
    image: "/sponsors_logos/41.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "42",
    description: "Sponsor 42",
    image: "/sponsors_logos/42.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "43",
    description: "Sponsor 43",
    image: "/sponsors_logos/43.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "44",
    description: "Sponsor 44",
    image: "/sponsors_logos/44.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "45",
    description: "Sponsor 45",
    image: "/sponsors_logos/45.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "46",
    description: "Sponsor 46",
    image: "/sponsors_logos/46.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "47",
    description: "Sponsor 47",
    image: "/sponsors_logos/47.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "48",
    description: "Sponsor 48",
    image: "/sponsors_logos/48.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "49",
    description: "Sponsor 49",
    image: "/sponsors_logos/49.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "50",
    description: "Sponsor 50",
    image: "/sponsors_logos/50.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "51",
    description: "Sponsor 51",
    image: "/sponsors_logos/51.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "52",
    description: "Sponsor 52",
    image: "/sponsors_logos/52.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "53",
    description: "Sponsor 53",
    image: "/sponsors_logos/53.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "54",
    description: "Sponsor 54",
    image: "/sponsors_logos/54.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "55",
    description: "Sponsor 55",
    image: "/sponsors_logos/55.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "56",
    description: "Sponsor 56",
    image: "/sponsors_logos/56.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
  {
    id: "57",
    description: "Sponsor 57",
    image: "/sponsors_logos/57.png",
    className: "h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container py-12 sm:py-16 md:py-20 lg:py-24">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-primary">
        Empresas que han confiado en nosotros
      </h2>

      <div className="relative mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <Carousel
          opts={{
            loop: true,
            align: "start",
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
            }),
          ]}
          className="w-full max-w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
            {sponsors.map((sponsor) => (
              <CarouselItem
                key={sponsor.id}
                className="pl-2 md:pl-3 lg:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="flex items-center justify-center h-full p-2 sm:p-3 md:p-4">
                  <img
                    src={sponsor.image}
                    alt={sponsor.description}
                    className={sponsor.className}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  );
};
