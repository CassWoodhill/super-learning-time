import React from "react";
import grid from "./images/grid.png";
import clues from "./images/clues.png";
import css from "./style.module.scss";
import { Hint } from "../../atoms/Hint";

export const PigpenCipher: React.FC = () => {
  return (
    <>
      <h1>Did they...? ?/2</h1>
      <div className={css.pigpen}>
        <img src={grid} alt="" />
        <img src={clues} alt="" />
      </div>
      <Hint>Pigpen cipher</Hint>
    </>
  );
};
