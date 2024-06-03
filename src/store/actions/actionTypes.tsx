/* объект, который определяет типы действий, 
которые могут быть отправлены в хранилище Redux. 
Каждое действие имеет уникальный тип, 
который используется редуктором для определения,
как обновить состояние */

export const ActionTypes = {
  SET_SEARCH: 'SET_SEARCH',
  SET_DATA: 'SET_DATA',
  SET_IS_SORTED: 'SET_IS_SORTED',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_THEME: 'SET_THEME',
  SET_COUNT: 'SET_COUNT',
  SET_ERROR: 'SET_ERROR',
  SET_PAGE: 'SET_PAGE',
};
