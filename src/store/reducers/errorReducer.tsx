import { ActionTypes } from 'store/actions/actionTypes';

const initialState = '';

interface Action {
  type: string;
  payload: any;
}

const errorReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
