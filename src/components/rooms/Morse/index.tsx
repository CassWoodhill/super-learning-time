import css from "./style.module.scss";
import { ChangeEvent, useEffect, useState } from "react";

const ANSWER = "built";

const codes = [
  "BEGIN",
  "–", //    t
  "•–•", //  r
  "•–", //   a
  "•––•", // p
  "•••", //  s
  "END",
];

const CodeCycler: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIndex((i) => (i < codes.length ? i + 1 : 0));
    }, 1750);

    return () => window.clearTimeout(timeout);
  }, [index]);

  return <h1>{codes[index] || "‎"} ?/1</h1>;
};

export const Morse: React.FC = () => {
  const [answerChars, setAnswerChars] = useState<string[]>([]);

  const onAnswerCharChange =
    (index: number) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        const newAnswerChars = [...answerChars];
        newAnswerChars[index] = event.target.value;
        setAnswerChars(newAnswerChars);
      };

  const isCorrect = answerChars.join("").toLowerCase() === ANSWER.toLowerCase();

  return (
    <div className={css["morse"]}>
      <CodeCycler />
      <div className={css["morse-input"]}>
        <div>
          <input />
          <input />
          <input />
          <input />
          <input />
        </div>
        <div>
          <p>-18</p>
          <p>+3</p>
          <p>+8</p>
          <p>-4</p>
          <p>+1</p>
        </div>
        <div>
          {ANSWER.split("").map((_, i) => (
            <input
              className={isCorrect ? css["green"] : ""}
              onChange={onAnswerCharChange(i)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className={css["morse-decode-hint"]}>M + 7 = T</p>
      </div>
    </div>
  );
};
