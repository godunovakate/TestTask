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


export const SET_IS_SORTED = (isSorted: boolean) => ({
  type: ActionTypes.SET_IS_SORTED,
  payload: isSorted,
});

export const SET_CATEGORY = (category: string) => ({
  type: ActionTypes.SET_CATEGORY,
  payload: category,
});

export const SET_THEME = (theme: string) => ({
  type: ActionTypes.SET_THEME,
  payload: theme,
});

export const SET_COUNT = (count: number) => ({
  type: ActionTypes.SET_COUNT,
  payload: count,
});

export const SET_ERROR = (error: string | null) => ({
  type: ActionTypes.SET_ERROR,
  payload:{
    message: error
  },
});


export const SET_PAGE = (page: number) => ({
  type: ActionTypes.SET_PAGE,
  payload: page,
});
