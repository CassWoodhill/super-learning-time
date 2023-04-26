import React from "react";
import css from "./style.module.scss";

type Box = {
  gutter?: boolean;
  layout?: "small" | "medium";
  className?: string;
  children: React.ReactNode;
};

export const Box: React.FC<Box> = ({ children }) => {
  return <div className={css.Box}>{children}</div>;
};
