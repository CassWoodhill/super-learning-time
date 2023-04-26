import React, { useRef } from "react";
import css from "./style.module.scss";

export const RootLayoutBottom: React.FC = () => {
  const generateID = () => Math.random().toString(36).substr(2, 9);
  const { current: fakeID } = useRef(generateID());

  return (
    <div className={css["root-layout-bottom"]}>
      <table>
        <tbody>
          <tr>
            <td>123456</td>
            <td>ID: {fakeID.toUpperCase()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
