import { ActionTypes } from 'store/actions/actionTypes';

const initialState = '';

interface Action {
  type: string;
  payload: any;
}

const dataReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default dataReducer;
