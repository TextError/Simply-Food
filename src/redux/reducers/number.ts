import { NUMBER } from '../actions/types';
import { IAction, INumberState } from '../interfaces/number';

const data = {
  value: 42
};

const INITIAL_STATE: INumberState = {
  ...data
};

const number = (state=INITIAL_STATE, action: IAction): INumberState => {
  switch(action.type) {
    case NUMBER.INCREMENT:
      return { ...state, value: action.payload}
    default:
      return state;
  }
};

export default number;