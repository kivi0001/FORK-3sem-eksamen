import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;
const HeaderButton = ({ children, href }) => {
  return (
    <motion.a
      className="uppercase self-center relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 0.8 }}
      href={href}
      initial="initial"
      whileHover="hovered"
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block text-header-hover"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default HeaderButton;
