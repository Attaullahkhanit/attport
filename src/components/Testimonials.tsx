import { useEffect, useRef, useState } from "react";
import { GlassCard } from "./GlassCard";
import { Circle, CircleDot } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    content: "Helped us complete a Python Django-based API. Skills, capabilities, and professionalism are unmatched, and we’ll be returning for more work."
  },
  {
    name: "Michael Chen",
    role: "Founder, MetaWorld",
    content: "Fantastic to work with! Great communication, flexible across time zones, and clear on deliverables. Built high-quality products quickly."
  },
  {
    name: "Emma Davis",
    role: "Lead Developer, AI Solutions",
    content: "Worked very efficiently and delivered exactly what we wanted with minimal onboarding. Very satisfied."
  },
  {
    name: "David Wilson",
    role: "CEO, InnovateTech",
    content: "We migrated our entire infrastructure to AWS with Muhammad Afzal, and the process was smooth and cost-effective."
  },
  {
    name: "Lisa Zhang",
    role: "Product Manager, FutureScale",
    content: "The 3-tier architecture setup Muhammad designed has drastically improved our application’s performance and security."
  },
  {
    name: "John Smith",
    role: "CTO, CloudTech",
    content: "Thanks to Muhammad's expertise in cloud solutions, we’ve reduced costs and increased scalability across our business."
  }
];

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3; // Assuming 3 cards are visible at a time
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % testimonials.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section id="testimonials" className="container max-w-6xl mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">What Clients Say</h2>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-4 px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={index}
              className="flex-none w-[calc(33.333%-1.33rem)] min-w-[calc(33.333%-1.33rem)] flex flex-col gap-4 p-6 snap-center animate-fade-up hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.content}"</p>
            </GlassCard>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            index === activeIndex ? (
              <CircleDot key={index} className="w-4 h-4 text-accent" />
            ) : (
              <Circle key={index} className="w-4 h-4 text-white/50" />
            )
          ))}
        </div>
      </div>
    </section>
  );
};
