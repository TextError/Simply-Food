import { createSelector } from 'reselect';
import { IAppState } from '../interfaces/app';

const select_number_state = (state: IAppState): number => state.number.value;

export const state_number = createSelector(
  [select_number_state],
  state => state
);