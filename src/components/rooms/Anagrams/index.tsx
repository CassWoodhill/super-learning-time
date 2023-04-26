import React, { useCallback, useState } from "react";
import css from "./style.module.scss";
import { Hint } from "../../atoms/Hint";
import { Input } from "../../atoms/Input";

const ANSWER_WORDS = [
  "you would",
  "have not",
  "havent"
];

const serializeWord = (word: string): string =>
  word.toLowerCase().replace("/[^a-z]/g", "");

const answerInputClassName = (input: string): string =>
  ANSWER_WORDS.includes(serializeWord(input || "")) ? css.correct : "";

export const Anagrams: React.FC = () => {
  const [answerOneValue, setAnswerOne] = useState<string>("");
  const [answerTwoValue, setAnswerTwo] = useState<string>("");
  const [answerThreeValue, setAnswerThree] = useState<string>("");

  const setContraction = useCallback((input: string) => {
    switch (input) {
      case "have not":
      case "havent":
        return "haven't"
      case "you would":
      case "youd":
        return "you'd"
      case "puts not":
        return "putn't"
      default:
        return ""
    }
  }, []);

  return (
    <>
      <div className={css["anagram"]}>
        <h1>Find the correct contractions ?/2</h1>
        {/* Puts not */}
        <table className={css['anagram-table']}>
          <thead>
            <th>Clue</th>
            <th>Anagram answer?</th>
            <th>Contraction...</th>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                {/* Puts not */}
                Nuts cop
              </td>
              <td>
                <Input
                  className={answerInputClassName(answerOneValue)}
                  labelText="Clue one"
                  visuallyHidden
                  id="clue-one"
                  onChange={setAnswerOne}
                />
              </td>
              <td>{setContraction(answerOneValue)}</td>
            </tr>
            <tr>
              <td scope="row">
                {/* You would */}
                Loud Yuwo
              </td>
              <td>
                <Input
                  className={answerInputClassName(answerTwoValue)}
                  labelText="Clue two"
                  visuallyHidden
                  id="clue-two"
                  onChange={setAnswerTwo}
                />
              </td>
              <td>{setContraction(answerTwoValue)}</td>
            </tr>
            <tr>
              <td scope="row">
                {/* Have not */}
                Hot Evan
              </td>
              <td>
                <Input
                  className={answerInputClassName(answerThreeValue)}
                  labelText="Clue three"
                  visuallyHidden
                  id="clue-three"
                  onChange={setAnswerThree}
                />
              </td>
              <td>{setContraction(answerThreeValue)}</td>
            </tr>
            <tr className={css.hint}>
              <td>
                Aye Our
              </td>
              <td>
                You are
              </td>
              <td>You're</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Hint>Find two contractions that make sense</Hint>
    </>
  );
};
