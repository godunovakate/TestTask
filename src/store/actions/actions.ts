import { ActionTypes } from './actionTypes';
import { Book } from 'constants/bookInterface';



export const SET_SEARCH = (search: string) => ({
  type: ActionTypes.SET_SEARCH,
  payload: search,
});

export const SET_DATA = (data: Book[]) => ({
  type: ActionTypes.SET_DATA,
  payload: data,
});

export const SET_ERROR = (error: string | null) => ({
  type: ActionTypes.SET_ERROR,
  payload:{
    message: error
  },
});
