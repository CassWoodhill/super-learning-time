import React from "react";
import css from "./style.module.scss";

export const CircuitAlphabet: React.FC = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <table className={css["circuit-alphabet"]}>
      <tbody>
        <tr>
          {alphabet.split("").map((letter: string, i: number) => {
            return <td key={`letter-${i}`}>{letter}</td>;
          })}
        </tr>
        <tr>
          {alphabet.split("").map((letter: string, i: number) => {
            return <td key={`number-${i}`}>{i + 1}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};
