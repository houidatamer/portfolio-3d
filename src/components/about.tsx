import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        {/* Title */}
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "spring", 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a creative digital artist and multimedia designer with a strong
          background in 3D modeling, animation, and motion design. I work with
          tools like Blender, After Effects, and Premiere Pro to craft cinematic
          visuals, immersive product showcases, and futuristic web experiences.
          With a passion for storytelling and a sharp eye for visual detail, I
          bring concepts to life through engaging, high-impact design. Let's
          collaborate to turn bold ideas into striking digital realities!
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
