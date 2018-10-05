import {
  UPDATE_MY_INTERESTS,
  IS_FETCHING_MY_INTERESTS,
  IS_SAVING_MY_INTERESTS
} from './ProfileTypes'

export const INITIAL_STATE = {
  myInterests: [],
  isFetchingMyInterests: false,
  isSavingMyInterests: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MY_INTERESTS:
      return { ...state, myInterests: action.payload }
    case IS_FETCHING_MY_INTERESTS:
      return { ...state, isFetchingMyInterests: action.payload }
    case IS_SAVING_MY_INTERESTS:
      return { ...state, isSavingMyInterests: action.payload }
    default:
      return state
  }
}
