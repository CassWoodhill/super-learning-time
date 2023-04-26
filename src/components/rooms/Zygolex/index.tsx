import React, { useCallback } from "react";
import css from "./style.module.scss";
import { ZygolexWord } from "./ZygolexWord";
import { staticClues } from "./clues";
import { ZygolexKey } from "./ZygolexKey";
import { Hint } from "../../atoms/Hint";

export const Zygolex: React.FC = () => {
  return (
    <>
      <h1>Zygolex ?/1</h1>
      <p>Do the words connect either by changing one letter, rhyming or do they connect as synonums</p>
      <div className={css['zygolex-wrapper']}>
        <ZygolexKey />
        <div className={css.zygolex}>
          {staticClues.map((clue, idx) => {
            const { label, inputMatch, type, isInput, showLines, inputIndex, clueMatch } = clue;
            return (
              <ZygolexWord
                key={`word-${idx}`}
                word={label}
                inputWord={inputMatch}
                type={type}
                isInput={isInput}
                showLines={showLines}
                id={idx}
                inputIndex={inputIndex}
                clueMatch={clueMatch}
              />
            );
          })}
        </div>
      </div>
      <Hint>Zygolex puzzle, the words connecting should match the rules that connects the others in the key</Hint>
    </>
  );
};
