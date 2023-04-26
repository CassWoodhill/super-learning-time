export enum ActionTypes {
  updateCircuitAnswers = "updateCircuitAnswers",
  updateZygolexAnswers = "updateZygolexAnswers",
}

interface UpdateCircuitAnswersAction {
  type: ActionTypes.updateCircuitAnswers;
  id: number;
  payload: string;
}

interface UpdateZygolexAnswersAction {
  type: ActionTypes.updateZygolexAnswers;
  id: number;
  payload: string;
}

export type Action = UpdateCircuitAnswersAction | UpdateZygolexAnswersAction;

export const updateCircuitAnswers = (
  id: number,
  answer: string
): UpdateCircuitAnswersAction => ({
  type: ActionTypes.updateCircuitAnswers,
  id: id,
  payload: answer,
});

export const updateZygolexAnswers = (
  id: number,
  answer: string
): UpdateZygolexAnswersAction => ({
  type: ActionTypes.updateZygolexAnswers,
  id: id,
  payload: answer,
});
