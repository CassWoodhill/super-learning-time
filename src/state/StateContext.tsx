import { createContext } from "react";
import { Action } from "./actions";
import {
  sharedInitialState,
  CircuitAnswerType,
  ZygolexAnswerType,
} from "./sharedTypes";

export interface State {
  circuit: CircuitAnswerType;
  zygolex: ZygolexAnswerType;
}

interface ContextState {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const initialState = {
  state: sharedInitialState,
  dispatch: () => ({}),
};

const StateContext = createContext<ContextState>(initialState);
StateContext.displayName = "StateContext";

export { StateContext };
