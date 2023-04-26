import { ActionTypes, Action } from "./actions";
import { Reducer } from "react";
import { State } from "./StateContext";

const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ActionTypes.updateCircuitAnswers:
      const newCircuitArray = [...state.circuit];
      newCircuitArray[action.id] = action.payload;
      return {
        ...state,
        circuit: newCircuitArray,
      };
    case ActionTypes.updateZygolexAnswers:
      const newZygolexArray = [...state.zygolex];
      newZygolexArray[action.id] = action.payload;
      return {
        ...state,
        zygolex: newZygolexArray,
      };
    default:
      return state;
  }
};

export { reducer };
