import { useState, useEffect } from "react";

export const useTypewriterEffect = (text: string, interval: number = 500) => {
  const [chars, setChars] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setChars((prevChars) => [...prevChars, text[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, interval);

      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, [currentIndex, text, interval]);

  return chars;
};
