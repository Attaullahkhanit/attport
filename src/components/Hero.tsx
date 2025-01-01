import { Calendar } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { SocialLinks } from "./SocialLinks";

export const Hero = () => {
  return (
    <section className="container min-h-screen flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent  via-primary to-white bg-clip-text text-transparent animate-fade-up" style={{ animationDelay: "200ms" }}>
            LETS BUILD SOMETHING TOGETHER
          </h1>
          <h1 className="py-1 mt-0 mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-700">
            Hi, I am <span className="before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-white relative inline-block">
            <span className="relative text-white"><span className="text-[#5651e5]">Attaullah Khan</span></span>
            </span> 
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5651e5] font-medium tracking-wider animate-fade-up">
            Sr. Front End Developer
          </h2>

        </div>
        <GlassCard className="mb-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <p className="text-lg md:text-xl text-black">
          I am a Senior Front-End React.js Developer with a passion for creating and occasionally designing exceptional digital experiences. As a Lead Senior Front-End Developer, I specialize in developing responsive, dynamic web applications, leveraging the power of generative AI to enhance user experiences. My expertise spans across building scalable, high-performance applications that not only meet business goals but also provide seamless, engaging interfaces. I'm committed to staying at the forefront of technology, continuously exploring innovative solutions to deliver cutting-edge products.</p>
        </GlassCard>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Book a Meeting
          </a>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};