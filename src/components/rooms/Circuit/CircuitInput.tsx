import React, { useCallback, useContext, useState } from "react";
import { Input } from "../../atoms/Input";
import css from "./style.module.scss";
import { updateCircuitAnswers } from "../../../state/actions";
import { StateContext } from "../../../state/StateContext";

type CircuitInput = {
  id: number;
  value: number;
};

export const CircuitInput: React.FC<CircuitInput> = ({ id }) => {
  const { dispatch } = useContext(StateContext);

  const updateValue = useCallback((value: string) => {
    dispatch(updateCircuitAnswers(id, value));
  }, []);

  return (
    <Input
      className={css["circuit-input"]}
      labelText={`What is the clue for input ${id}`}
      visuallyHidden
      id={`circuit-${id}`}
      type="number"
      onChange={updateValue}
    />
  );
};
