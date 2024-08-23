import { createAction, props } from "@ngrx/store";
import { DECREMENT, INCREMENT, INCREMENT_BY, RESET } from "./counter.actions-types";

export interface IncrementAction{
    type: typeof INCREMENT
}
export interface IncrementByAction{
    type: typeof INCREMENT_BY;
    payload: number;
}
export interface DecrementAction{
    type: typeof DECREMENT;
}
export interface ResetAction{
    type: typeof RESET
}
export type CounterActions = |IncrementAction |DecrementAction |IncrementByAction | ResetAction
export const increment = createAction(INCREMENT);
export const incrementBy = createAction(INCREMENT_BY, props<{payload:number}>());
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);