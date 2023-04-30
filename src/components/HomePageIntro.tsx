import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from "react";

const wordDetecter = (word: string): boolean => {
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
  ];
  const result: boolean = !!WordsArray.find(
    (w) => w.toLowerCase() === word.toLowerCase()
  );
  return result;
};

const wordSeprator = (text: string) => {
  const WordsArray: string[] = text.split(" ");
  return WordsArray.map((word, index) => {
    return (
      <span
        key={index}
        className={`word-animation ${
          wordDetecter(word) ? "selected-word" : ""
        }`}
      >
        {word}{" "}
      </span>
    );
  });
};

const HomePageIntro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
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
    <div className="home-page-intro-section">
      <h1>
        Hello Wellcome to The <span>WealthWave</span>
      </h1>
      <span className="txt-rotate">
        " <span className="wrap">{wordSeprator(text)}</span> "
      </span>
    </div>
  );
};

export default HomePageIntro;
