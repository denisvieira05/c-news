import { UPDATE_NEWS, IS_FETCHING_NEWS } from "./HomeTypes";

export const INITIAL_STATE = {
  news: [],
  isFetchingNews: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NEWS:
      return { ...state, news: action.payload };
    case IS_FETCHING_NEWS:
      return { ...state, isFetchingNews: action.payload };
    default:
      return state;
  }
};
