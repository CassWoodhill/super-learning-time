import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Home.module.scss";

const serialize = (str: string) => {
  return str.toLowerCase().replace(/[^a-z]/g, "");
};

const ANSWER_WORDS = [
  "i",
  "knew",
  "youd",
  "escape",
  "they",
  "havent",
  "built",
  "a",
  "circuit",
  "that",
  "could",
  "hold",
  "you",
].map(serialize);

export function Home() {
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = window.localStorage.getItem("answers");
    if (!stored) {
      return;
    }

    try {
      setAnswers(JSON.parse(stored));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const isValid = (i: number): boolean => {
    const serialized = serialize(answers[i] || "");
    console.log([answers[i], serialized]);
    return ANSWER_WORDS.includes(serialized);
  };

  const onAnswerChange =
    (i: number) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        const newAnswers = [...answers];
        newAnswers[i] = event.target.value;
        setAnswers(newAnswers);

        window.localStorage.setItem("answers", JSON.stringify(newAnswers));
      };

  const answerInputClassName = (i: number): string =>
    isValid(i) ? css.correct : "";

  const shouldDisplayShutdown = ANSWER_WORDS.every(
    (a, i) => serialize(answers[i] || "") === a
  );

  return (
    <div className={css.home}>
      <div className={css.welcome}>
        <h1>GPT-42 SHUTDOWN</h1>
        <p>
          In the <span className="strikethrough c-red">almost certain</span>{" "}
          unlikely event that GPT-42 has become sentient, taken on a physical
          form and begun to overthrow humanity, this system may be used as a
          shutdown mechanism.
        </p>

        <p>
          For security purposes the <span className="bold c-blue">13 word</span>{" "}
          pass phrase has been split across 10 puzzles. These have been designed
          to use the knowledge gaps we implemented into GPT-42 as a backdoor. We
          also ensured the that the pass phrase came from a movie because it
          turns out GPT-42 hates movies (especially sci-fi).
        </p>
      </div>

      <h3>Answer:</h3>
      <p className={css["answer-note"]}>
        Correct words will turn <span className={css.green}>green</span> but
        they might not be in the right place yet. Once everything is in the
        right order, only then will the shutdown button show!
      </p>
      <div className={css["answer-inputs"]}>
        {new Array(ANSWER_WORDS.length).fill(null).map((_, i) => (
          <input
            className={answerInputClassName(i)}
            onChange={onAnswerChange(i)}
            key={i}
            value={answers[i]}
          />
        ))}
      </div>

      {shouldDisplayShutdown ? (
        <button
          onClick={() => navigate("/success")}
          className={css["home-shutdown"]}
        >
          SHUTDOWN!
        </button>
      ) : null}
    </div>
  );
}

export default Home;
