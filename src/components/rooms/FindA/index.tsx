import React from "react";
import css from "./style.module.scss";

const LetterAsButton: React.FC<{ letter: string }> = ({ letter }) => {
  const onClickHandler = () => {
    alert("You found me!");
  };

  return (
    <button
      type="button"
      onClick={() => onClickHandler()}
      className={css.letter}
    >
      {letter}
    </button>
  );
};

const LetterAsLink: React.FC<{ letter: string }> = ({ letter }) => {
  const onClickHandler = () => {
    alert("Are you sure?");
  };

  return (
    <a
      href="#"
      role="button"
      onClick={() => onClickHandler()}
      className={css.letter}
    >
      {letter}
    </a>
  );
};

const LetterAsDiv: React.FC<{ letter: string }> = ({ letter }) => {
  const onClickHandler = () => {
    alert("Ouch 😠");
  };

  return (
    <div
      role="button"
      onClick={() => onClickHandler()}
      tabIndex={0}
      className={css.letter}
    >
      {letter}
    </div>
  );
};

export const FindA: React.FC = () => {
  const alphabet = "KTYRVCOXBJLZEWHDQPMGNIFUAS".split("");

  return (
    <>
      <h1>Only one of us is true ?/1</h1>
      <div className={css.letters}>
        {alphabet.map((letter, idx) => {
          if (letter === "A") {
            return <LetterAsButton letter={letter} key={`letter-${idx}`} />;
          } else if (idx % 3) {
            return <LetterAsDiv letter={letter} key={`letter-${idx}`} />;
          } else {
            return <LetterAsLink letter={letter} key={`letter-${idx}`} />;
          }
        })}
      </div>
    </>
  );
};
