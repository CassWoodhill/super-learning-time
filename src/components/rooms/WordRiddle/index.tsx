import React from "react";
import css from "./style.module.scss";

export const WordRiddle: React.FC = () => {
  return (
    <div className={css["word-riddle"]}>
      <h1>Who am I ?/1</h1>
      <p>
        <span>My first is in stamina but not in animism</span>
        <span>My second is in athirst but not in satirist</span>
        <span>My third is in orientation but not in orient</span>
        <span>My fourth is in consistent but not in cosine</span>
      </p>
    </div>
  );
};
