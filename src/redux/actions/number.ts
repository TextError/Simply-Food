import { Dispatch } from 'redux';
import { NUMBER } from './types';

export const increment = (number: number) => (dispatch: Dispatch) => {
  dispatch({ type: NUMBER.INCREMENT, payload: number });
};

export const decrement = (number: number) => (dispatch: Dispatch) => {
  dispatch({ type: NUMBER.DECREMENT, payload: number });
};

export const reset = () => (dispatch: Dispatch) => dispatch({ type: NUMBER.RESET });

