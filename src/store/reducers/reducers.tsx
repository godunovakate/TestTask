import { ActionTypes } from 'store/actions/actionTypes';

/* Это объект, который определяет начальное
состояние хранилища Redux */

const initialState = {
  search: '',
  data: null,
  error: null,
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
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
  }
};

export default reducer;
