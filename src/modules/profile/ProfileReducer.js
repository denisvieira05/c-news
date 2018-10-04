import {
  UPDATE_MY_INTERESTS,
  IS_FETCHING_MY_INTERESTS,
} from './ProfileTypes'

export const INITIAL_STATE = {
  myInterests: [],
  isFetchingMyInterests: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MY_INTERESTS:
      return { ...state, myInterests: action.payload }
    case IS_FETCHING_MY_INTERESTS:
      return { ...state, isFetchingMyInterests: action.payload }
    default:
      return state
  }
}
