import React, { useCallback, useState } from "react";
import css from "./style.module.scss";

export const Hold: React.FC = () => {
  const [marked, setMarked] = useState<Set<string>>(new Set());

  const letters =
    "ICLUTCHACY NNORNSUULD FUKNDYCHNC LZDITOCUXT UGPWCRKKNC EPRPCJOLUN NUTINPCLAT CLASPPPCZL ELUGPCSPVR VUPTOCBICC";
  const lettersArr = letters.split(" ");

  const splitLetters = useCallback((letters: string) => {
    return letters.split("");
  }, []);

  const markedCoordinate = (x: number, y: number): string => `${x},${y}`;

  const isMarked = (x: number, y: number): boolean => {
    const coord = markedCoordinate(x, y);
    return marked.has(coord);
  };

  const toggleMarked = (x: number, y: number): void => {
    const coord = markedCoordinate(x, y);

    const newMarked = new Set(marked);

    if (marked.has(coord)) {
      newMarked.delete(coord);
    } else {
      newMarked.add(coord);
    }

    setMarked(newMarked);
  };

  return (
    <>
      <h1>Which am I ?/1</h1>
      <div className={css.hold}>
        <ul className={css["hold-list"]}>
          <li>Clasp</li>
          <li>Clutch</li>
          <li>Control</li>
          <li>Grip</li>
          <li>Hold</li>
          <li>Influence</li>
          <li>Pull</li>
        </ul>
        <table className={css["hold-table"]}>
          <tbody>
            {lettersArr.map((group, y) => (
              <tr>
                {splitLetters(group).map((letter, x) => (
                  <td
                    className={isMarked(x, y) ? css["marked"] : ""}
                    onClick={() => toggleMarked(x, y)}
                  >
                    {letter}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
