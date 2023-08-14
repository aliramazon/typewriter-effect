import React from "react";
import { useTypewriterEffect } from "../hooks";

type FlagProps = {
  flag: string;
};

export const Flag: React.FC<FlagProps> = ({ flag }) => {
  const chars = useTypewriterEffect(flag, 500);

  return (
    <ul>
      {chars &&
        chars.map((char, idx) => {
          return <li key={idx}>{char}</li>;
        })}
    </ul>
  );
};
