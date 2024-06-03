import { ActionTypes } from 'store/actions/actionTypes';

/* Это объект, который определяет начальное
состояние хранилища Redux */

const initialState = {
  search: '',
  data: null,
  isSorted: false,
  category: 'all',
  theme: '',
  count: 0,
  error: null,
  page: 1,
};

//интерфейс, который определяет структуру действия

interface Action {
  type: string;
  payload: any;
}

/* Это функция, которая принимает текущее
состояние и действие, а затем возвращает 
новое состояние. */

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return { ...state, search: action.payload };
    case ActionTypes.SET_DATA:
      return { ...state, data: action.payload };
    case ActionTypes.SET_IS_SORTED:
      return { ...state, isSorted: action.payload };
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case ActionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    case ActionTypes.SET_COUNT:
      return { ...state, count: action.payload };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case ActionTypes.SET_PAGE:
      return { ...state, page: action.payload };
  }
};

export default reducer;
