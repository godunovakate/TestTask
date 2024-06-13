import { ActionTypes } from 'store/actions/actionTypes';

const initialState = '';

interface Action {
  type: string;
  payload: any;
}

const searchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
