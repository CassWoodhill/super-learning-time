import React from "react";
import css from "./style.module.scss";

type Input = {
  type?: "text" | "email" | "number" | "password" | "search" | "tel";
  labelText: string;
  id: string;
  visuallyHidden?: boolean;
  className?: string;
  onChange?: (value: string) => void;
};

export const Input: React.FC<Input> = ({
  type,
  labelText,
  id,
  visuallyHidden,
  className,
  onChange,
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <div className={`${css["input"]} ${className ?? ""}`}>
        <label
          htmlFor={id}
          className={visuallyHidden ? css["is-visually-hidden"] : ""}
        >
          {visuallyHidden ? (
            <span className="visually_hidden">{labelText}</span>
          ) : (
            labelText
          )}
        </label>
        <input
          type={type}
          id={id}
          onChange={(e) => {
            return handleChange(e.target.value);
          }}
        />
      </div>
    </>
  );
};

Input.defaultProps = {
  type: "text",
};
