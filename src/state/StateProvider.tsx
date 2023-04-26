import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { State, StateContext } from "./StateContext";
import { sharedInitialState } from "./sharedTypes";
interface StateProviderProps {
  children: React.ReactNode;
  initialState?: State;
}

const StateProvider: React.FC<StateProviderProps> = ({
  children,
  initialState = sharedInitialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider };
