import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "./ntf-components/Divider";
import logo from "./../assets/logo/main-logo.png";
export const wordDetecter = (word: string): boolean => {
  const WordsArray: string[] = [
    "wealth",
    "money",
    "mindset",
    "taking",
    "action",
    "opportunities",
    "mindset",
    "prosperity",
    "impact",
    "wave",
    "cryptocurrency",
    "blog",
    "financial",
    "news",
    "wallstreet",
    "journal",
    "profile",
    "wealth",
    "financial",
    "advice",
    "market",
    "insights",
  ];
  const result: boolean = !!WordsArray.find(
    (w) => w.toLowerCase() === word.toLowerCase()
  );
  return result;
};

export const wordSeprator = (text: string) => {
  const WordsArray: string[] = text.split(" ");
  return WordsArray.map((word, index) => {
    return (
      <motion.span
        initial={{ x: 20 }}
        animate={{ x: 30 }}
        key={index}
        className={`word-animation ${
          wordDetecter(word) ? "selected-word" : ""
        }`}
      >
        {word}{" "}
      </motion.span>
    );
  });
};

const HomePageIntro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [_index, setIndex] = useState(1);
  const toRotate = [
    "Building wealth is not about money , it's about mindset and the right wave to ride.",
    "True wealth is not about money, but mindset and habits.",
    "Build wealth by cultivating an abundance mindset and taking action.",
    "Lasting wealth comes from the right mindset and seizing opportunities.",
    "Wealth is more than money , it's a mindset of prosperity.",
    "Success requires an abundance mindset to create wealth and impact.",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1, type: "tween" }}
      className="home-page-intro-section"
    >
      {/* <motion.h1
        initial={{ fontSize: "2rem" }}
        animate={{ fontSize: "3rem" }}
        transition={{ delay: 1.2, duration: 0.5, type: "tween" }}
      >
        Hello Wellcome to The{" "}
        <span>
          WealthWave 
        </span>
      </motion.h1> */}
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "tween",
        }}
        src={logo}
      />
      <Divider width={250} height={5} />
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2, type: "tween" }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 10, bottom: 0 }}
        whileDrag={{ scale: 1.01 }}
        className="txt-rotate"
      >
        " <span className="wrap">{wordSeprator(text)}</span> "
      </motion.span>
    </motion.div>
  );
};

export default HomePageIntro;
