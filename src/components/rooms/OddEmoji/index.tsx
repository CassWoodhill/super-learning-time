import React from "react";
import css from "./style.module.scss";
import { Hint } from "../../atoms/Hint";

export const OddEmoji: React.FC = () => {
  return (
    <>
      <div className={css["odd-emoji"]}>
        <h1>Not the third person ?/2</h1>
        <p>
          <span>👁️</span>
          <span>🐑</span>
          <span>🍨</span>
        </p>
      </div>
      <Hint>Find the correct homophones</Hint>
    </>
  );
};
