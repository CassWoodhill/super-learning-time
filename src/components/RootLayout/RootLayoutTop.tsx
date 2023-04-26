import React from "react";
import css from "./style.module.scss";

export const RootLayoutTop: React.FC = () => {
  return (
    <div className={css["root-layout-top"]}>
      <table>
        <thead>
          <tr>
            <td>SR 262 144</td>
            <td>ATP COUNT</td>
            <td>SEQUENCE</td>
            <td>CTP COUNT</td>
            <td>CPU USAGE</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123456</td>
            <td>TEXT</td>
            <td>ANALYSIS</td>
            <td>123456</td>
            <td>16%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
