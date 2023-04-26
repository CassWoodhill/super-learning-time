import React, { useCallback, useState } from "react";
import { Input } from "../../atoms/Input";
import css from "./style.module.scss";

type CircuitClue = {
  value: number;
  input: number;
};

export const CircuitClue: React.FC<CircuitClue> = ({ value, input }) => {
  const inputAsNumber = input;

  const setClassNameIfMatch = useCallback(
    (value: number, input: number) => {
      if ((value === input - 1 || value === input + 1) && input !== 0) {
        return "is-close-match";
      } else if (value === input) {
        return "is-match";
      } else {
        return "";
      }
    },
    [value, input]
  );

  return (
    <>
      <div
        className={`${css[setClassNameIfMatch(value, inputAsNumber)]} ${
          css["circuit-clue"]
        }`}
      >
        {value}
      </div>
    </>
  );
};
