import Image from "next/image";
import Badge from "../ui/Badge/Badge";
import { techBadges } from "@/data";
import { motion } from "framer-motion";
import { scaleIn } from "@/animations/variants";
import Tilt from "react-parallax-tilt";

export default function HeroImage() {
  return (
    <div className="relative flex h-[650px] items-center justify-center">
      {/* Glow Effect Background */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-15 blur-[130px]" />

      <div className="relative z-10 h-[560px] w-[420px]">
        <Tilt tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          perspective={1200}
          transitionSpeed={1800}
          scale={1.01}
          gyroscope={true}
          className="relative h-full w-full" >
          <motion.div variants={scaleIn}
            initial="hidden"
            animate="visible" className="relative h-full w-full -mt-3">
            <Image
              src="/images/Profilenew1.png"
              alt="Thushar Shetty"
              fill
              priority
              className="select-none object-contain"
            />
          </motion.div>
        </Tilt>
        {techBadges.map((badge) => (
          <Badge
            key={badge.name}
            icon={badge.icon}
            name={badge.name}
            className={badge.className}
            delay={badge.delay}
            duration={badge.duration}
          />
        ))}
      </div>
    </div>
  );
}
