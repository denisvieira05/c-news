import {
  UPDATE_MY_INTERESTS,
  IS_FETCHING_MY_INTERESTS,
} from './ProfileTypes'
import InterestsService from '../../services/interests/InterestsService'

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

export const isSavingMyInterests = (isFetching) => ({
  type: IS_FETCHING_MY_INTERESTS,
  payload: isFetching,
})

export const loadMyInterests = () => {
  return async (dispatch) => {
    dispatch(isFetchingMyInterests(true))

    const myInterests = await new InterestsService().getMyInterests()

    dispatch(updateMyInterests(myInterests))
    dispatch(isFetchingMyInterests(false))
  }
}

export const saveMyInterests = (myInterests) => {
  return (dispatch) => {
    dispatch(isSavingMyInterests(true))

    new InterestsService().saveMyInterests(myInterests).then(() => {
      dispatch(isSavingMyInterests(false))
    })
    .catch((error) => {
      dispatch(isSavingMyInterests(false))
    });

  }
}