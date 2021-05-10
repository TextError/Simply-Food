import { NUMBER } from "../actions/types";

export interface INumberState {
  value: number
};

interface I_NUMBER_INCREMENT { type: typeof NUMBER.INCREMENT, payload: number };
interface I_NUMBER_DECREMENT { type: typeof NUMBER.DECREMENT };

export type IAction = I_NUMBER_INCREMENT | I_NUMBER_DECREMENT;