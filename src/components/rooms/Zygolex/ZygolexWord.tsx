import React, { useCallback, useContext, useEffect, useState } from "react";
import css from "./style.module.scss";
import { Input } from "../../atoms/Input";
import { StateContext } from "../../../state/StateContext";
import { updateZygolexAnswers } from "../../../state/actions";

type ZygolexWordProps = {
  word: string;
  inputWord: string;
  type: string;
  id: number;
  inputIndex: number;
  clueMatch?: {
    label: string;
    index: number;
  }[];
  updateIndex?: number;
  isInput?: boolean;
  showLines?: boolean;
  className?: string;
};

export const ZygolexWord: React.FC<ZygolexWordProps> = ({
  word,
  inputWord,
  type,
  id,
  inputIndex,
  clueMatch,
  isInput,
  showLines,
  className,
}) => {
  const { dispatch, state } = useContext(StateContext);
  const [isWordMatch, setIsWordMatch] = useState<boolean>(false);
  const [inputLabel, setInputLabel] = useState<string>('');
  const [fistWordType, setFirstWordType] = useState<string>('');
  const [secondWordType, setSecondWordType] = useState<string>('');

  const assignClassNameForType = useCallback((value: string, isFirst: boolean) => {
    const suffix = isFirst ? '-first' : '-second';
    if (value !== "means") {
      switch (value) {
        case "rhymes with":
          return `is-rhyme${suffix}`;
        default:
          return `is-letter${suffix}`;
      }
    }
    return ""
  }, []);

  useEffect(function getAndSetIsWordMatch() {
    setIsWordMatch(
      (inputWord.toLowerCase() === state.zygolex[inputIndex].toLowerCase())
    );
  }, [inputWord, state.zygolex[inputIndex]]);

  useEffect(function getAndSetStateWithStaticWord() {
    if (!isInput) {
      dispatch(updateZygolexAnswers(id, word));
    }
  }, [word]);

  useEffect(function getAndSetInputLabel() {
    if (clueMatch !== undefined) {
      const firstLabel = state.zygolex[clueMatch[0].index] ? `${clueMatch[0].label} ${state.zygolex[clueMatch[0].index]}` : '';
      const secondLabel = state.zygolex[clueMatch[1].index] ? `${clueMatch[1].label} ${state.zygolex[clueMatch[1].index]}` : '';
      if (firstLabel || secondLabel) {
        setInputLabel(`${firstLabel} ${secondLabel}`)
      }
      setFirstWordType(assignClassNameForType(clueMatch[0].label, true));
      setSecondWordType(assignClassNameForType(clueMatch[1].label, false));
    }
  }, [clueMatch, state.zygolex]);

  const updateValue = useCallback((value: string) => {
    dispatch(updateZygolexAnswers(id, value));
  }, []);

  return (
    <div
      className={`${css["zygolex-word"]} ${isWordMatch ? css["is-word-match"] : ""
        } ${isInput || showLines ? css["is-input"] : ""
        }
        ${fistWordType ? css[fistWordType] : ''}
        ${secondWordType ? css[secondWordType] : ''}
        ${className ?? ""}`}
    >
      {isInput ? (
        <Input
          id={`word-${id}`}
          labelText={inputLabel}
          visuallyHidden
          type="text"
          onChange={updateValue}
        />
      ) : (
        <p>{word}</p>
      )}
    </div>
  );
};
