import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { wordSeprator } from "../HomePageIntro";
import { useNavigate } from "react-router-dom";
type singleSlidesType = {
  data: { title: string; pathName: string };
  index: number;
};
const SingleSlide = ({ data, index }: singleSlidesType) => {
  const nav = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const componentRef = useRef<HTMLDivElement>(null);
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    setIsVisible(entries[0].isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <motion.div initial={{ opacity: isVisible ? 1 : 0 }} ref={componentRef}>
      <motion.h3>{wordSeprator(data.title)}</motion.h3>
      <motion.button
        animate={{ y: isVisible ? 0 : 20 }}
        onClick={() => nav(data.pathName)}
      >
        click now!
      </motion.button>
    </motion.div>
  );
};

export default SingleSlide;
