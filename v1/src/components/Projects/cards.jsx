import styles from "./project.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  page_no,
  desc,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{page_no}</p>
          </div>
          <div className={styles.desc}>
            <span>{title}</span>
            <p>{desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
