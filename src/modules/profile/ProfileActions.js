import {
  UPDATE_MY_INTERESTS,
  IS_FETCHING_MY_INTERESTS,
} from './ProfileTypes'

export const updateMyInterests = (myInterests) => {
  return {
    type: UPDATE_MY_INTERESTS,
    payload: myInterests,
  }
}

export const isFetchingMyInterests = (isFetching) => ({
  type: IS_FETCHING_MY_INTERESTS,
  payload: isFetching,
})

export const loadMyInterests = () => {
  return async (dispatch) => {
    dispatch(isFetchingMyInterests(true))

    // const dogs = await new DogsService().getMyInterests()

    // dispatch(updateMyInterests(dogs))
    dispatch(isFetchingMyInterests(false))
  }
}
