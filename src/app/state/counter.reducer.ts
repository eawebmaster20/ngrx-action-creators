import { createReducer, INITIAL_STATE, on } from "@ngrx/store";
import { CounterActions, decrement, increment, incrementBy, IncrementByAction, reset } from "./counter.actions";
import { INCREMENT, DECREMENT, RESET, INCREMENT_BY } from "./counter.actions-types";

export const initialState: number = 0;
export const counterReducer = createReducer(
    initialState, 
    on(increment, (state) => state + 1),
    on(incrementBy, (state, {payload}) => state + payload),
    on(decrement, (state) => state > 0 ? state - 1: 0),
    on(reset, () => 0)
  );

export function _counterReducer(state:number=initialState, action:CounterActions):number{
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case INCREMENT_BY:
      return state + (action as IncrementByAction).payload;
    case DECREMENT:
      return state > 0? state - 1: 0;
    case RESET:
      return 0;
    default:
      return state;
  }
}