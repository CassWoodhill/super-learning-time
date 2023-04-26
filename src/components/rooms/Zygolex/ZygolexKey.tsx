import React from "react";
import css from "./style.module.scss";

export const ZygolexKey: React.FC = () => {
  return (
    <table className={css.keys}>
      <tbody>
        <tr>
          <td scope="col">Words are synonyms</td>
          <td scope="col"><span className={css.key}></span></td>
        </tr>
        <tr>
          <td scope="col">One letter has changed</td>
          <td scope="col"><span className={`${css.key} ${css['key-letter']}`}></span></td>
        </tr>
        <tr>
          <td scope="col">Words rhyme</td>
          <td scope="col"><span className={`${css.key} ${css['key-rhyme']}`}></span></td>
        </tr>
      </tbody>
    </table>
  );
};
