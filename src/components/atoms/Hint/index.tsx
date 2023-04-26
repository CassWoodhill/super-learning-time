import React from "react";
import css from "./style.module.scss";

export const Hint: React.FC<{
  children: React.ReactNode;
}> = ({
  children,
}) => {
    return (
      <div className={css.hint}>
        <p>{children}</p>
      </div>
    );
  };
