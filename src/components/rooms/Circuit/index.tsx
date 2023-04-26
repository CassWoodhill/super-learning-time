import React, { useContext } from "react";
import { CircuitAlphabet } from "./CircuitAlphabet";
import { CircuitInput } from "./CircuitInput";
import { CircuitClue } from "./CircuitClue";
import { StateContext } from "../../../state/StateContext";
import css from "./style.module.scss";
import { Hint } from "../../atoms/Hint";

const circuitClues = ["12", "27", "21", "24", "30", "29"];

export const Circuit: React.FC = () => {
  const { state } = useContext(StateContext);

  return (
    <>
      <h1>Solve the number bonds ?/1</h1>
      <div className={css["clues-row"]}>
        {circuitClues.map((clue: string, idx: number) => {
          const inputValue =
            Number(state.circuit[idx]) + Number(state.circuit[idx + 1]);
          return (
            <>
              <CircuitClue
                input={inputValue}
                value={Number(clue)}
                key={`clue-${idx}`}
              />
            </>
          );
        })}
      </div>
      <div className={css["clues-row"]}>
        {Array.from({ length: 7 }, (_, idx) => {
          return <CircuitInput value={0} id={idx} key={`input-${idx}`} />;
        })}
      </div>
      <CircuitAlphabet />
      <Hint>Solve the numberbonds first then compare to the table</Hint>
    </>
  );
};
