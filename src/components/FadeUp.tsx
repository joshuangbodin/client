import { motion } from "motion/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeUp = ({ children, delay = 0.15, className }: Props) => {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 60,
        damping: 14,
        mass: 0.8,
      }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
